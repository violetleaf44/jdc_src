import React from 'react'
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from "chart.js"
Chart.register(...registerables)

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  type: 'bar',
  datasets: [{
    label: '서비스 만족도 월별',
    axis: 'y',
    type: 'bar',
    data: [95, 92, 90, 88, 97, 85, 90],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

const options = {
  spanGaps: true,
  indexAxis: 'y',
  maxBarThickness: 30,
  reponsive: false,
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
      display: false,
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


const Napgichart = () => {
  return (
    <Container>
      <Line data={data} options={options} />
    </Container>
  );
};

export default Napgichart;

const Container = styled.div`
  width: 50vw;
  max-width: 530px;
  height: 20vw;
  max-height: 500px;
  margin-top:3  0px
`;