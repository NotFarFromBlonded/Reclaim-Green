import React from 'react'
import { EmissionState } from '../Context';
import '../SectionTwo.css'
import Prediction from './Prediction';
import {
  makeStyles,
  CircularProgress,
} from '@material-ui/core';

const useStyles = makeStyles(()=>({
  progress: {
    color:"black",
    marginLeft: "50%",
    marginTop: "3rem",
  },
}))

const SectionTwo = () => {
  const classes = useStyles();

  const {countryReasons, selCountry, selCause, selYear, predictedValues, loading, handleCountryChange, handleCauseChange, handleYearChange, handlePredictSubmit, submitting} = EmissionState()
  let options = null;
  let type = null;
  if(selCountry !== ""){
    type = countryReasons.find(country=>country.country === selCountry);
  }
  if(type){
    options = type.reasons.map((el)=><option key={el} value={el}>{el}</option>)
  }
  return (
    <div >
      <div className="container" style={{backgroundColor: "black", maxWidth:"1280px"}}>
            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" alt="Snow" style={{width:"100%",height:"90vh",opacity:"0.5"}}></img>
            <div className="centered">
                <h1 style={{fontSize:"90px",fontFamily: "Georgia, 'Times New Roman', Times, serif"}}>FUTURE TRENDS</h1>
                <p></p>
            </div>
            <p></p>
        </div>
        <div style={{height:"100vh"}}>
        <div className="container23" styles={{textAlign:"left"}}>
            <div className="c2">
                <p className="para1" >The given dashboard will give you the values till 2018, to get the visualizations and predicted values for future year follow
the following steps:
                </p>
                <p className='para1'>
                    <li>Enter the year you want the values to be predicted.</li>
                    <li>You will get the visualizations and the predicted values till that year.</li>
                </p>
            </div>
               
        </div>
                <div className="container11" style={{maxWidth:"360px", }}>
                    <form style = {{maxWidth:"360px"}} onSubmit={handlePredictSubmit}>
                      <div className="row">
                            <div className="col-25">
                                <label style={{fontFamily: "'Poppins', sans-serif",textTransform: "uppercase",fontWeight: "200",color: "#4ca950",marginLeft:"2px",marginTop:"4px"}}>Country</label>
                            </div>
                            <div className="col-75">
                                <select id="country" name="country" onChange={handleCountryChange} value={selCountry!==""?selCountry:""}required>
                                  <option value="" hidden>Country</option>
                                  <option value="Canada">Canada</option>
                                  <option value="United States">United States</option>
                                  <option value="India">India</option>
                                </select>
                                <div className="invalid-feedback">
                                  Please choose a country.
                                </div>
                            </div>
                      </div>
                      <div className="row">
                            <div className="col-25">
                                <label style={{fontFamily: "'Poppins', sans-serif",textTransform: "uppercase",fontWeight: "200",color: "#4ca950",marginLeft:"2px",marginTop:"4px"}}>Cause</label>
                            </div>
                            <div className="col-75">
                                <select id="reason" name="reason" onChange={handleCauseChange} value={selCause!==""?selCause:""} required>
                                  <option value="" hidden>Cause</option>
                                  {options}
                                </select>
                                <div className="invalid-feedback">
                                  Please choose a cause.
                                </div>
                            </div>
                      </div>
                      <div className="row">
                            <div className="col-25">
                                <label style={{fontFamily: "'Poppins', sans-serif",textTransform: "uppercase",fontWeight: "200",color: "#4ca950",marginLeft:"2px",marginTop:"4px"}}>Year</label>
                            </div>
                            <div className="col-75">
                                <select id="year" name="year" onChange={handleYearChange} value={selYear!==""?selYear:""} required>
                                  <option value="" hidden>YYYY</option>
                                  <option value="2019">2019</option>
                                  <option value="2020">2020</option>
                                  <option value="2021">2021</option>
                                  <option value="2022">2022</option>
                                  <option value="2023">2023</option>
                                  <option value="2024">2024</option>
                                  <option value="2025">2025</option>
                                </select>
                                <div className="invalid-feedback">
                                  Please choose a year.
                                </div>
                            </div>
                        </div>
                        
                            <div className="row" style={{marginTop:"12px"}}>
                                <button className="btn btn-primary" type="submit" disabled={loading?true:false}>Predict</button>
                            </div>
                    </form>
                </div>
                <div>{!submitting && predictedValues.length===0?"":
                  loading?<CircularProgress className={classes.progress}/>:
                  <Prediction/>}
                </div>
                </div>
    </div>
  )
}

export default SectionTwo