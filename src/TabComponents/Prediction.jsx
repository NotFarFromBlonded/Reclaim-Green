import React from 'react'
import PredictedImage from './PredictedImage'
import PredictedTable from './PredictedTable'
import PredictedSolution from './PredictedSolution'

const Prediction = () => {
  return (
    <div>
        <PredictedTable/>
        <PredictedImage/>
        <PredictedSolution/>
    </div>
  )
}

export default Prediction