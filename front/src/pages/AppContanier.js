import React from 'react'
import DateFilter from '../components/DateFilter'
import MultitypeChart from '../components/MultitypeChart'
import Sample from '../assets/json/multitype_chart_sample.json'

class AppContanier extends React.Component {
  constructor(props) {
    super(props)
    // income chart object
    const incomeChart = Sample
    // init state
    this.state = {
      title: incomeChart.title,
      labels: incomeChart.labels,
      datasets: incomeChart.datasets,
      scales: incomeChart.scales,
    }
    // bind methods
    this.onUpdateFilter = this.onUpdateFilter.bind(this)
  }

  onUpdateFilter(dates) {
    if (!dates.from || !dates.to) {
      window.alert('期間を指定してください')
      return
    }
    // TODO: update filter with dates parameter
  }

  render() {
    return (
      <div>
        <DateFilter handleUpdate={this.onUpdateFilter}></DateFilter>
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
