import React, { createContext, useContext, useState, useEffect } from 'react'
import { mockGHGEmissionData, oilFactor, gasFactor, coalFactor, electricityFactor, mockGHGState } from './mockGHGEmissionData';
import {countryWithReason} from './countriesWithReason'
import { solutionsToReason } from './solutionsToReasons';
import axios from 'axios';

const Emission = createContext();

const Context = ({children}) =>{
    
    const[electricity, setElectricity] = useState(0);
    const[oil, setOil] = useState(0);
    const[gas, setGas] = useState(0);
    const[coal, setCoal] = useState(0);
    const[ghgEmission, setGHGEmission] = useState(0);
    const[countryReasons, setCountryReasons] = useState(0);
    const[solutionsReason, setSolutionsReason] = useState(0);
    const[selectedCountry, setSelectedCountry] = useState("");
    const [selCountry, setSelCountry] = useState("");
    const[selCause, setSelCause] = useState("");
    const[selYear, setSelYear] = useState(0);
    const[loading, setLoading] = useState(false);
    const[predictedValues, setPredictedValues] = useState([]);
    const[submitting, setSubmitting] = useState(false);
    const [value, setValue] = React.useState(0);
    const[selectedState, setSelectedState] = useState("");
    const[stwitch, setStwitch] = useState({
        checkedA: false
    })
    const[repeater, setRepeater] = useState(0);

    const[mockGHGDataRandomCountry, setMockGHGDataRandomCountry] = useState([]); 
    const[mockGHGDataRandomState, setMockGHGDataRandomState] = useState([]); 
    const handleChange = (e) => {
        const selectedCountry = mockGHGEmissionData.find(country => country.country === e.target.value);
        setSelectedCountry(selectedCountry.country);
        setOil(selectedCountry.oilConsumption);
        setGas(selectedCountry.gasConsumption * 28.32);
        setElectricity(selectedCountry.electricityConsumption);
        setCoal(selectedCountry.coalConsumption * 28.32);
        setGHGEmission(((selectedCountry.electricityFactor*selectedCountry.electricityFactor+selectedCountry.oilConsumption*oilFactor+selectedCountry.coalConsumption * 28.32*coalFactor+selectedCountry.gasConsumption * 28.32*gasFactor)/1000).toFixed(3))
    }

    const handleChangeState = (e)=>{
        const selectedState = mockGHGState.find(state=>state.name === e.target.value);
        setSelectedState(selectedState.name);
        setOil(selectedState.oilConsumption);
        setGas(selectedState.gasConsumption * 28.32);
        setElectricity(selectedState.electricityConsumption);
        setCoal(selectedState.coalConsumption*28.32);
        setGHGEmission((selectedState.electricityConsumption*electricityFactor + selectedState.oilConsumption*oilFactor+selectedState.gasConsumption*gasFactor+ selectedState.coalConsumption*coalFactor).toFixed(2));
    }

    const handleStwitch = (e) => {
        setStwitch({[e.target.name]: e.target.checked });
        setOil(0);
        setGas(0);
        setElectricity(0);
        setCoal(0);
        setGHGEmission(0);
        setSelCountry("");
        setSelectedState("");
    }

    const predictData = async() => {

        
        const data = await axios.get(`http://127.0.0.1:5000/predict?country=${selCountry}&reason=${selCause}&year=${selYear}`,{
          responseType: "",
          headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          redirect: 'follow'
        })
        .then((res)=>{
          return res;
        })
        .catch(error=>console.log(error))
        return data.data;
    }

    const handleCountryChange = (e) => {
        setSelCountry(e.target.value);
    }

    const handleCauseChange = (e)=>{
        setSelCause(e.target.value);
    }

    const handleYearChange = (e) =>{
        setSelYear(e.target.value);
    }

    const handleWiggleImage = (e) =>{
        setValue(1);
        window.scrollTo(0, 0);
    }

    const handlePredictSubmit = (e) =>{
        e.preventDefault();
        setLoading(true)
        setSubmitting(true)
        predictData().then((res)=>{
            const re = [];
            for(let i = 0; i < selYear-2018; i++){
                re.push({
                   'year': 2019+i,
                   'value': res.predictions[i][0]
                });
            };
            return re;
        })
        .then((resp)=>{
            setPredictedValues(resp);
            setLoading(false);
            setSubmitting(false);
        })
        .catch((err)=>{console.log(err)})
    }
    
    const splitKeyValue = obj => {
        const keys = Object.keys(obj);
        const res = [];
        for(let i = 0; i < keys.length; i++){
           res.push({
              'country': keys[i],
              'reasons': obj[keys[i]]
           });
        };
        return res;
    };

    
    useEffect(() => {
        setCountryReasons(splitKeyValue(countryWithReason[0]))
        setSolutionsReason(splitKeyValue(solutionsToReason[0]))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(()=>{
        
        const newData = ()=>{
            setElectricity(Math.floor(Math.random()*(23210-935+1))+935);
            setOil(Math.floor(Math.random()*(5914-207+1))+207);
            setGas(Math.floor(Math.random()*(283.05-1.34))+1.34);
            setCoal(Math.floor(Math.random()*(5343-3.79))+3.79);
            setGHGEmission(((Math.floor(Math.random()*(23210-935+1))+935)+(Math.floor(Math.random()*(5914-207+1))+207)+(Math.floor(Math.random()*(283.05-1.34))+1.34)+Math.floor(Math.random()*(5343-3.79))+3.79).toFixed(2));
        }

        if(oil!==0 || gas!==0 || coal!==0 || ghgEmission!==0){
            newData();
        }
        setInterval(() => setRepeater(prevState=>prevState+1), 10000);
    },[repeater])

    return (
        <Emission.Provider value={{
            value, 
            setValue, 
            handleWiggleImage, 
            selectedCountry, 
            electricity, 
            oil, 
            gas, 
            coal, 
            loading, 
            handleChange, 
            handleCountryChange, 
            handleCauseChange, 
            handleYearChange, 
            handlePredictSubmit, 
            ghgEmission, 
            countryReasons, 
            solutionsReason, 
            selCountry, 
            selCause, 
            selYear, 
            predictedValues, 
            setPredictedValues, 
            submitting,
            stwitch,
            handleStwitch,
            handleChangeState,
            selectedState
        }}>
            {children}
        </Emission.Provider>
    )
}

export default Context;
export const EmissionState = () =>{
    return useContext(Emission);
}
