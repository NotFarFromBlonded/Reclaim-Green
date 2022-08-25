import React from 'react'
import Tableau from "tableau-react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(()=>({
  splitScreen: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: "1rem"
  },
  topPane: {
    width: '50%',
  },
  bottomPane: {
      width: '50%',
  },
}));

const SectionThree = () => {
  const classes = useStyles();
  const options = {
    hideTabs:true,
    hideToolbar:true
  };
  return (
    <div>
      <div className="container" style={{backgroundColor: "black", maxWidth:"1280px"}}>
            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" alt="Snow" style={{width:"100%",height:"90vh",opacity:"0.5"}}></img>
            <div className="centered">
                <h2 style={{fontSize:"80px",fontFamily: "Georgia, 'Times New Roman', Times, serif"}}>CO2e Visualizer</h2>
                <br></br>
                <p></p>
            </div>
            <p></p>
      </div>
      <div>
        <div>
          <Tableau
            url="https://public.tableau.com/views/CO2EmissionAnalysis_16499110310530/GloablImpact?:language=en-US&:display_count=n&:origin=viz_share_link"
            options = {options}
          />
        </div>
        <div>
          <Tableau
            url="https://public.tableau.com/views/CO2EmissionAnalysisDashboard-2/Countrywiseimpact?:language=en-US&:display_count=n&:origin=viz_share_link"
            options = {options}
          />
        </div>
        <div>
          <Tableau
            url="https://public.tableau.com/views/GlobalCO2EmissionDashboard_16614187360680/Sheet1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
            options = {options}
          />
        </div>
      </div>
      <div className="instructions">
        <h3 className="head3">FOLLOW SET OF INSTRUCTIONS FOR BETTER VISUALISATIONS:</h3>
          <dl>
            <dt>- Hover on graphs to get detail about visualisation.</dt>
            <dt>- Select country to see specific CO2e for that country.</dt>
            <dt>- Click on the image to get the visualisation.</dt>
          </dl>
      </div>
    </div>
    
  )
}

export default SectionThree