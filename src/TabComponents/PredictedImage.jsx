import React from 'react';
import { EmissionState } from '../Context';
import usaPrediction from '../Img/usaPrediction.png';
import canadaPrediction from '../Img/canadaPrediction.png';
import indiaPrediction from '../Img/indiaPrediction.png';

const PredictedImage = () => {
  const {selCountry} = EmissionState();
  return (
    <div>
        <img alt = "predictionImage" className='country-map' src={selCountry==="United States"?usaPrediction:selCountry==="Canada"?canadaPrediction:selCountry==="India"?indiaPrediction:""}></img>
    </div>
  )
}

export default PredictedImage
