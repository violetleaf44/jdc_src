import React from 'react'
import styled from 'styled-components';
import { Line, Radar } from 'react-chartjs-2';
import { Chart, registerables } from "chart.js"
Chart.register(...registerables)

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            type: 'radar',
            label: 'My First Dataset',
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, 
        {
            type: 'radar',
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 96, 27, 100],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        }
    ]
  };

const options = {
  spanGaps: true,
  maxBarThickness: 30,
  grouped: true,
  scales: {
    y: {
      beginAtZero: true
    }
  },
  interaction: {
    mode: 'index',
  },
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        padding: 10,
        font: {
          family: "'Noto Sans KR', 'serif'",
          lineHeight: 1,
        },
      }
    }
  }
};


const Radarchart = () => {
  return (
    <Container>
      <Radar data={data} options={options} />
    </Container>
  );
};

export default Radarchart;

const Container = styled.div`
  width: 50vw;
  max-width: 550px;
  height: 18vw;
  max-height: 450px;
`;