import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { EmissionState } from '../Context';
import BarChart from './Charts/BarChart';
import PieChart from './Charts/PieChart';
import DoughnutChart from './Charts/DoughnutChart';

const SectionFour = () => {
  const {highwayType, highwayData, handleChangeHighway} = EmissionState()
  return (
    <>
      <div className="container" style={{backgroundColor: "black", maxWidth:"1280px"}}>
        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" alt="Snow" style={{width:"100%",height:"90vh",opacity:"0.5"}}></img>
        <div className="centered">
          <h2 style={{fontSize:"80px",fontFamily: "Georgia, 'Times New Roman', Times, serif"}}>Roads PMGSY</h2>
          <br></br>
          <p></p>
        </div>
        <p></p>
      </div>
      <div className="card m-3 mx-auto" style={{borderRadius: "0.5rem", minWidth: "320px", maxWidth: "320px", backgroundColor: "#f2f2f2", color: "#4ca950"}}>
        <div className="card-body" style={{borderRadius: "0.25rem"}}>
          <form>
            <div className="form-row">
              <div className="form-group col">
                <label style={{color: "#4ca950",paddingTop:"0px"}}>Highway</label>
                <select name="highway" onChange={handleChangeHighway} value={highwayType===""?"":highwayType}>
                  <option value="" hidden>Choose Highway Type</option>
                  <option value="NH">National Highway(NH)</option>
                  <option value="SH">State Highway(SH)</option>
                  <option value="RR">Rural Roadways(RR)</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        {highwayType===""&&highwayData.length===0?"":<BarChart chartData={highwayData} name="Volume of Materials Used in Construction" type="emission"/>}
        {highwayType===""&&highwayData.length===0?"":<PieChart chartData={highwayData} name="Volume of Materials Used in Construction" type="emission"/>}
        {highwayType===""&&highwayData.length===0?"":<DoughnutChart chartData={highwayData} name="Volume of Materials Used in Construction" type="volume"/>}
      </div> 
    </>
    
  )
}

export default SectionFour