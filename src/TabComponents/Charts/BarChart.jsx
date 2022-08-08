import React from 'react';
import {Bar} from "react-chartjs-2";
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const BarChart = (props) => {
  var data = {
    labels: props.chartData.map(x => x.material),
    datasets: [{
      data: props.chartData.map(x => x.volume_in_ton),
      backgroundColor: [
        'rgba(8, 61, 119, 1)',
        'rgba(235, 235, 211, 1)',
        'rgba(218, 65, 103, 1)',
        'rgba(244, 211, 94, 1)',
        'rgba(247, 135, 100, 1)'
      ],
      borderColor: "black",
      borderWidth: 1
    }]
  }

  var options = {
    responsive: true,
    plugins: {
      legend: {display: false},
      title: {
        display: true,
        text: props.name
      }
    }
  }

  return(
    <div style = {{width: "700px"}}>
      <Bar 
        data = {data}
        options = {options}
      />
    </div>
    /*<>
      {props.chartData === ""?console.log(""):console.log(props.chartData.map(x=>x.material))}
    </>*/
  )
}

export default BarChart