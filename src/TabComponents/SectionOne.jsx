import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { EmissionState } from '../Context';

const useStyles = makeStyles(()=>({
  splitScreen: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    maxWidth: "720px",
    margin: "auto",
    marginTop: "1rem"
  },
  heroContent: {
    backgroundColor: 'white',
    padding: '2rem 0rem 1.5rem',
  },
  topPane: {
    width: '50%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomPane: {
      width: '50%',
      textAlign: 'center',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
  },
  para1:{
    fontSize: 'larger',
    fontWeight: 'bold',
  },
  para2:{
    fontSize: 'xxx-large',
    fontWeight: 'bold',
  }
}));

const SectionOne = () => {
  const classes = useStyles();
  const {coal, oil, gas, electricity, handleChange, ghgEmission, selectedCountry} = EmissionState()
  return (
    <>
      <div className="container" style={{backgroundColor: "black",maxWidth:"1280px"}}>
            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" alt="Snow" style={{width:"100%",height:"90vh",opacity:"0.5"}}></img>
            <div className="centered">
                <h1 style={{fontSize:"90px",fontFamily: "Georgia, 'Times New Roman', Times, serif"}}>GHG EMISSION CALCULATOR</h1>
                <br></br>
                <h5>Use the calculator below to view per capita GHG Emissions from a list of available countries in tCO2(tonnes of CO2e)</h5>
                <p></p>
            </div>
            <p></p>
      </div>
      <div className={classes.splitScreen}>
      <div className={classes.topPane}>
      <div className="card m-3 mx-auto" style={{borderRadius: "0.5rem", minWidth: "320px", maxWidth: "320px", backgroundColor: "#f2f2f2", color: "#4ca950"}}>
                <div className="card-body" style={{borderRadius: "0.25rem"}}>
                    <form>
                      <div className="form-row">
                            <div className="form-group col">
                                <label style={{color: "#4ca950",paddingTop:"0px"}}>Country</label>
                                <select name="country" onChange={handleChange} value={selectedCountry!==""?selectedCountry:""}>
                                  <option hidden value="">Choose here</option>
                                  <option value="argentina">Argentina</option>
                                  <option value="australia">Australia</option>
                                  <option value="austria">Austria</option>
                                  <option value="belgium">Belgium</option>
                                  <option value="brazil">Brazil</option>
                                  <option value="bulgaria">Bulgaria</option>
                                  <option value="canada">Canada</option>
                                  <option value="china">China PR</option>
                                  <option value="croatia">Croatia</option>
                                  <option value="denmark">Denmark</option>
                                  <option value="estonia">Estonia</option>
                                  <option value="finland">Finland</option>
                                  <option value="france">France</option>
                                  <option value="germany">Germany</option>
                                  <option value="greece">Greece</option>
                                  <option value="hungary">Hungary</option>
                                  <option value="india">India</option>
                                  <option value="indonesia">Indonesia</option>
                                  <option value="ireland">Ireland</option>
                                  <option value="italy">Italy</option>
                                  <option value="japan">Japan</option>
                                  <option value="latvia">Latvia</option>
                                  <option value="lithuania">Lithuania</option>
                                  <option value="luxembourg">Luxembourg</option>
                                  <option value="mexico">Mexico</option>
                                  <option value="netherlands">Netherlands</option>
                                  <option value="new zealand">New Zealand</option>
                                  <option value="norway">Norway</option>
                                  <option value="poland">Poland</option>
                                  <option value="portugal">Portugal</option>
                                  <option value="romania">Romania</option>
                                  <option value="russia">Russia</option>
                                  <option value="saudi arabia">Saudi Arabia</option>
                                  <option value="serbia">Serbia</option>
                                  <option value="slovakia">Slovakia</option>
                                  <option value="slovenia">Slovenia</option>
                                  <option value="south africa">South Africa</option>
                                  <option value="south korea">South Korea</option>
                                  <option value="spain">Spain</option>
                                  <option value="sweden">Sweden</option>
                                  <option value="switzerland">Switzerland</option>
                                  <option value="turkey">Turkey</option>
                                  <option value="united arab emirates">United Arab Emirates</option>
                                  <option value="united kingdom">United Kingdom</option>
                                  <option value="united states of america">United States of America</option>
                              </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <label style={{color: "#4ca950",paddingTop:"0px"}}>Electricity Consumption(KWh/Yr)</label>
                                <input name="electricityConsumption" type="number" step="0.1" value={electricity} className="form-control" readOnly/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <label style={{color: "#4ca950",paddingTop:"0px"}}>Petroleum Consumption(Lt/Yr)</label>
                                <input type="number" step="0.1" value={oil} className="form-control" readOnly/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <label style={{color: "#4ca950",paddingTop:"0px"}}>Natural Gas Consumption(Kg/Yr)</label>
                                <input type="number" step="0.01" value={gas} className="form-control" readOnly/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <label style={{color: "#4ca950",paddingTop:"0px"}}>Coal Consumption(Kg/Yr)</label>
                                <input type="text" step="0.01" value={coal} className="form-control" readOnly/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
          </div>
          <div className={classes.bottomPane}>
            <div>
                <p className={classes.para1}>
                  Calculated GHG Emissions:
                </p>
                <p className={classes.para2}>
                  {ghgEmission} tCO2
                </p>
            </div>
          </div>
          </div>
    </>
  )
}

export default SectionOne