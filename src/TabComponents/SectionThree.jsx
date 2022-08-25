import React from 'react'
import Tableau from "tableau-react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
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
    hideTabs: true,
    hideToolbar: true
  };
  return (
    <div>
      <div className="ghgheading" style={{ marginTop: "85px", marginLeft: "78px", textAlign: "center", marginBottom: "70px" }}>
        <h1 style={{ fontSize: "60px", fontFamily: "Georgia, 'Times New Roman', Times, serif", color: "darkgreen" }}>GHG EMISSION CALCULATOR </h1>
      </div>
      <div className="bullets">
          <h1 style={{marginLeft:"22px" ,marginBottom:"22px"}}>Instructions</h1>
          <ol>
            <li>Hover on graphs to get detail visualizations</li>
            <li>Select country to see specific CO2 emissions for that country</li>
            <li>Click on the image to get the visualizations</li>
          </ol>
        </div>
        <div style={{marginTop:"62px"}} className="shallow">
        <div className = {classes.splitScreen}>
          <div className = {classes.topPane}>
            <Tableau
              url="https://public.tableau.com/views/CO2emissions2_0_16614224042090/Causewiseimpactedcountry?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
              options = {options}
            />
          </div>
          <div className = {classes.bottomPane}>
            <Tableau
              url="https://public.tableau.com/views/CO2emissions3_0/No_ofimpactedcountries?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
              options = {options}
            />
          </div>
        </div>
        
        <div>
          <Tableau
            url="https://public.tableau.com/views/CO2emissions1_0/Countrywiseimpact?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
            options = {options}
          />
        </div>
        <div>
          <Tableau
            url="https://public.tableau.com/views/GlobalCO2EmissionDashboard_16614187360680/Sheet1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
            options = {options}
          />
        </div>
        <div>
          <Tableau
            url="https://public.tableau.com/shared/ZDQBCTCYM?:display_count=n&:origin=viz_share_link"
            options = {options}
          />
        </div>
      </div>
    </div>
    
  )
}
export default SectionThree
// Footer
