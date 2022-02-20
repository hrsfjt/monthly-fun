import React from 'react'
import { Chart } from 'react-chartjs-2'

class MultitypeChart extends React.Component {
  render() {
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Multitype Chart',
        },
      },
    }

    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
    ]

    const data = {
      labels,
      datasets: [
        {
          type: 'line',
          label: 'Dataset 1',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
          fill: false,
          data: [10, 200, 120, 80, 40, 50, 60],
        },
        {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: 'rgb(75, 192, 192)',
          data: [40, 100, 50, 30, 100, 80, 20],
          borderColor: 'white',
          borderWidth: 2,
        },
        {
          type: 'bar',
          label: 'Dataset 3',
          backgroundColor: 'rgb(53, 162, 235)',
          data: [10, 200, 120, 80, 40, 50, 60],
        },
      ],
    }
    return <Chart type="bar" data={data} options={options} />
  }
}

export default MultitypeChart
