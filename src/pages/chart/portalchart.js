import React from 'react'
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from "chart.js"
Chart.register(...registerables)


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

const Portalchart = (props) => {
  return (
    <Container>
      <Line type="line" data={props.data} options={options} />
    </Container>
  );
};

export default Portalchart;

const Container = styled.div`
  width: 20vw;
  max-width: 350px;
  height: 20vw;
  max-height: 200px;
`;