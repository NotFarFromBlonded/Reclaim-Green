import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SectionOne from './TabComponents/SectionOne';
import './App.css';
import SectionTwo from './TabComponents/SectionTwo';
import SectionThree from './TabComponents/SectionThree';
import SectionFour from './TabComponents/SectionFour';
import About from './TabComponents/About';
import { EmissionState } from './Context';

//import NavBar from './NavBar/NavBar';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `auto-tab-${index}`,
    'aria-controls': `auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    height: '100vh'
  },
  defaultTabStyle:{
    color: 'black',
    backgroundColor: 'white',
    paddingTop: '20px',
    paddingBottom: '20px'
  },
 
  activeTabStyle:{
    color: 'white',
    backgroundColor: 'black',
    paddingTop: '20px',
    paddingBottom: '20px'
  },
  title: {
    flexGrow: 1,
    color: 'black',
    fontWeight: '600'
  },
  toolb: {
    paddingRight: '0'
  }
}));

function App() {
  const classes = useStyles();
  const {value, setValue} = EmissionState();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    window.scrollTo(0, 0)
  };
  const titleSpanClick = (e) => {
    setValue(0);
  }
  return (
    <div className={classes.root}>
      {/*<NavBar/>*/}
      <AppBar position="fixed" style={{backgroundColor:"white"}}>
        <Toolbar className = {classes.toolb} style = {{padding:0}}>

          <Typography className={classes.title} variant="h5">
            <span className = "titleSpan" style = {{padding: '20px 20px 20px 20px'}} onClick={titleSpanClick}>RG</span>
          </Typography>
          
          <Tabs value={value} onChange={handleChange}>
            <Tab label="About" {...a11yProps(0)} className={value===0?classes.activeTabStyle:classes.defaultTabStyle}/>
            <Tab label="GHG Calculator" {...a11yProps(1)} className={value===1?classes.activeTabStyle:classes.defaultTabStyle} style={{marginLeft: 'auto'}}/>
            <Tab label="Future Trends" {...a11yProps(2)} className={value===2?classes.activeTabStyle:classes.defaultTabStyle} style={{marginLeft: 'auto'}}/>
            <Tab label="CO2e Visualizer" {...a11yProps(3)} className={value===3?classes.activeTabStyle:classes.defaultTabStyle} style={{marginLeft: 'auto'}}/>
            <Tab label="Roads" {...a11yProps(4)} className={value===4?classes.activeTabStyle:classes.defaultTabStyle} style={{marginLeft: 'auto'}}/>
          </Tabs>
        </Toolbar>
      </AppBar>
      <TabPanel value={value} index={0}>
        <About/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SectionOne/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SectionTwo/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SectionThree/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <SectionFour/>
      </TabPanel>
    </div>
  );
}

export default App;
