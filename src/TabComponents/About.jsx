import React from 'react'
import footEn from '../Img/footEn.png'
import worldMap from '../Img/worldMap.gif'
import { EmissionState } from '../Context'

const About = () => {
  const {handleWiggleImage} = EmissionState()
  return (
    <>
        <div className="container" style={{backgroundColor: "black", maxWidth:"1280px", maxHeight:"720px", marginTop:"1rem"}}>
            <img src={worldMap} alt="Snow" style={{width:"100%",height:"90vh",opacity:"0.5"}}></img>
            <div className="centered">
                <h3>Are you ready to save the world?</h3>
                <h1 style={{fontSize:"90px",fontFamily: "Georgia, 'Times New Roman', Times, serif"}}>RECLAIM GREEN</h1>
                <p></p>
            </div>
            <p></p>
        </div>
        <div className="container2">
            <div className="c2">
                <h2 className="head1">CARBON FOOTPRINTS</h2>
                <p className="para1">Carbon footprint is the total amount of greenhouse gas (GHG) emissions caused by a person, event, organization, service, place or product, expressed as carbon dioxide (CO2e).</p>
            </div>
                
            <div className="container-foot fade-to-top">
                <img alt="foot_img" className="foot-img wiggle" src={footEn} style={{marginTop:"1rem"}} onClick={handleWiggleImage}></img>
            </div>
            <p className="para1">Rapid industrial growth and global expansion has caused an irrecoverable damage to the earth and has contributed towards Global Warming. Greenhouse gases like Carbon Dioxide(CO2), Methane(CH4), Chlorofluorocarbons(CFC’s) etc. produced by various manmade and natural activities are the major contributors towards this global deterioration. This project is developed with the aim of analyzing the impact of CO2 emissions produced by various sources for countries across globe and provide customized solutions based on the causes. Niche technologies like Machine Learning, Data Analytics and Cloud platform have been utilized for the development of this project. This project will provide a platform to view past trends and analyze real time data. It will also provide calculations for the greenhouse gas emissions.</p>
               
        </div>
    </>
  )
}

export default About