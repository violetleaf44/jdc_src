import React from 'react'
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from "chart.js"
Chart.register(...registerables)

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'line',
      label: '  합계  ',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2,
      data: [4, 2, 7, 4, 9, 9, 1],
    },
    {
      type: 'bar',
      label: '1등급',
      backgroundColor: 'rgb(255, 99, 132)',
      data: [2, 2, 3, 1, 5, 3, 7],
      borderColor: 'red',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: '2/3등급',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [7, 2, 6, 4, 3, 6, 11],
    },
  ],
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

const Mychart = () => {
  return (
    <Container>
      <Line type="line" data={data} options={options} />
    </Container>
  );
};

export default Mychart;

const Container = styled.div`
  width: 50vw;
  max-width: 650px;
  height: 18vw;
  max-height: 450px;
`;