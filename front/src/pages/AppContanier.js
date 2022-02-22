import React from 'react'
import MultitypeChart from '../components/MultitypeChart'
import Sample from '../assets/json/multitype_chart_sample.json'

class AppContanier extends React.Component {
  constructor(props) {
    super(props)
    const incomeChart = Sample
    this.state = {
      title: incomeChart.title,
      labels: incomeChart.labels,
      datasets: incomeChart.datasets,
      scales: incomeChart.scales,
    }
  }

  render() {
    return (
      <div>
        <MultitypeChart
          title={this.state.title}
          labels={this.state.labels}
          datasets={this.state.datasets}
          scales={this.state.scales}
        ></MultitypeChart>
      </div>
    )
  }
}

export default AppContanier
