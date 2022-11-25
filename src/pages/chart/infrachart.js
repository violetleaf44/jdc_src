import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import metric from '../../data/metric';
import {  Line } from 'react-chartjs-2';
import { Chart, registerables } from "chart.js"
Chart.register(...registerables)


const options = {
    radius : 0,
    borderWidth: 1,
    spanGaps: true,
    maxBarThickness: 30,
    grouped: true,
    responsive: false,
    interaction: {
        mode: 'index',
    },
    plugins: {
    legend: {
        labels: {
        usePointStyle: true,
        padding: 5,
        font: {
            family: "'Noto Sans KR', 'serif'",
            lineHeight: 3,
        },
        }
    }
  }
};


const Infrachart = (props) => {
  let i=props.i;
   let [data, setData] = useState(metric);

  console.log(data);

  return (
    <Container>
      <Line type="line" data={data[i]} options={options} />
    </Container>
  );
};

export default Infrachart;

const Container = styled.div`
  width: 30vw;
  max-width: 600px;
  height: 30vw;
  max-height: 150px;
`;