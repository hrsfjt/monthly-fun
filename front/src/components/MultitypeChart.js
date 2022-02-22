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
          text: this.props.title,
        },
      },
      scales: this.props.scales,
    }

    const data = {
      labels: this.props.labels,
      datasets: this.props.datasets,
    }
    return <Chart type="bar" data={data} options={options} />
  }
}

export default MultitypeChart
