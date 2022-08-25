import React from 'react'
import footEn from '../Img/footEn.png'
import worldMap from '../Img/worldMap.gif'
import azadi from '../Img/azadi.png'
import SIH from '../Img/SIH.png'
import MOE from '../Img/MOE.png'
import Ministry_of_Rural_Development from '../Img/Ministry_of_Rural_Development.png'
import { EmissionState } from '../Context'


const About = () => {
    const { handleWiggleImage } = EmissionState()
    return (

        <>
            <div></div>
            <div className="logos11">
                <img src={SIH} alt="worldmap"></img>
                <img src={MOE} alt="worldmap"></img>
                <img src={Ministry_of_Rural_Development} alt="worldmap"></img>
            </div>

            <div className="heading" style={{backfaceVisibility:"0.4",backgroundPosition: 'right',marginRight:"39px",
                    backgroundImage: "url(" + azadi + ")"
                }}>
                <h1 style={{ fontStyle: "Monoton" }}>RECLAIM <span style={{ margin: "12px" }}> </span>GREEN</h1>
                <h1 className="bgLogo" ><span style={{color:"orange"}}>#Carbon-free</span> <span style={{ margin: "5px" ,color:"blue"}}> भारत</span><span style={{ margin: "5px" ,color:"green"}}> परियोजना</span> </h1>
                <h1>India’s <span style={{ margin: "5px" }}> </span>Road <span style={{ margin: "5px" }}> </span>to <span style={{ margin: "5px" }}> </span>Net-Zero:<span style={{ margin: "5px" }}> </span>A <span style={{ margin: "5px" }}> </span>Mission</h1>
            </div>

            <div className="aboutpage">
                <div className="container2">
                    <div className="c2">
                        <h2 className="head1">CARBON FOOTPRINTS</h2>
                        <p className="para1">Carbon footprint is the total amount of greenhouse gas (GHG) emissions caused by a person, event, organization, service, place or product, expressed as carbon dioxide (CO2 emission).</p>
                    </div>
                    <div className="container-foot fade-to-top">
                        <img alt="foot_img" className="foot-img wiggle" src={footEn} onClick={handleWiggleImage}></img>
                    </div>
                    <p className="para1">Rapid industrial growth and global expansion has caused an irrecoverable damage to the earth and has contributed towards Global Warming. Greenhouse gases like Carbon Dioxide(CO2), Methane(CH4), Chlorofluorocarbons(CFC’s) etc. produced by various manmade and natural activities are the major contributors towards this global deterioration. This project is developed with the aim of analyzing the impact of CO2 emissions produced by various sources for countries across globe and provide customized solutions based on the causes. Niche technologies like Machine Learning, Data Analytics and Cloud platform have been utilized for the development of this project. This project will provide a platform to view past trends and analyze real time data. It will also provide calculations for the greenhouse gas emissions.</p>

                </div>
                <div className='image1'>
                    <img src={worldMap} alt="worldmap" style={{ width: "50vw", height: "50vh" }}></img>
                </div>
            </div>


        </>
    )
}

export default About
