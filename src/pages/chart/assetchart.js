import React from 'react'
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from "chart.js"
Chart.register(...registerables)

const data = {
    labels: ['서버', '네트워크', 'DB', 'WEB', 'OA'],
    datasets: [
      {
        data: [462, 102, 25, 56, 121],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#3DD9D3", "#F0E98D"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#3DD9D3", "#F0E98D"],
        borderWidth: 2,
        borderColor: '#FFFFFF',
      }
    ]
  };

const options = {
  spanGaps: true,
  maxBarThickness: 30,
  grouped: true,
  interaction: {
    mode: 'index',
  },
  plugins: {
    legend: {
      display: true,
      position: "right",
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

const Assetchart = () => {
  return (
    <Container>
      <Doughnut type="doughnut" data={data} options={options}/>
    </Container>
  );
};

export default Assetchart;

const Container = styled.div`
  width: 30vw;
  max-width: 350px;
  height: 20vw;
  max-height: 300px;
  text-align: center;
`;