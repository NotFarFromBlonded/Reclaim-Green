import React, { createContext, useContext, useState, useEffect } from 'react'
import { mockGHGEmissionData, oilFactor, gasFactor, coalFactor } from './mockGHGEmissionData';
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

    const handleChange = (e) => {
        const selectedCountry = mockGHGEmissionData.find(country => country.country === e.target.value);
        setSelectedCountry(selectedCountry.country);
        setOil(selectedCountry.oilConsumption);
        setGas(selectedCountry.gasConsumption * 28.32);
        setElectricity(selectedCountry.electricityConsumption);
        setCoal(selectedCountry.coalConsumption * 28.32);
        setGHGEmission(((selectedCountry.electricityFactor*selectedCountry.electricityFactor+selectedCountry.oilConsumption*oilFactor+selectedCountry.coalConsumption * 28.32*coalFactor+selectedCountry.gasConsumption * 28.32*gasFactor)/1000).toFixed(3))
    }

    const predictData = async() => {

        
        const data = await axios.get(`https://shrouded-tundra-62725.herokuapp.com/predict?country=${selCountry}&reason=${selCause}&year=${selYear}`,{
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
            for(let i = 0; i < res.predictions.length; i++){
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

    return (
        <Emission.Provider value={{value, setValue, handleWiggleImage, selectedCountry, electricity, oil, gas, coal, loading, handleChange, handleCountryChange, handleCauseChange, handleYearChange, handlePredictSubmit, ghgEmission, countryReasons, solutionsReason, selCountry, selCause, selYear, predictedValues, setPredictedValues, submitting}}>
            {children}
        </Emission.Provider>
    )
}

export default Context;
export const EmissionState = () =>{
    return useContext(Emission);
}