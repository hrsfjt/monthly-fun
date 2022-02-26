import React from 'react'
import DateFilter from '../components/DateFilter'
import MultitypeChart from '../components/MultitypeChart'
import Sample from '../assets/json/multitype_chart_sample.json'
import Loading from '../components/Loading'

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
      isLoading: false,
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
    const { title, labels, datasets, scales, isLoading } = this.state
    return (
      <div>
        <DateFilter handleUpdate={this.onUpdateFilter}></DateFilter>
        <MultitypeChart
          title={title}
          labels={labels}
          datasets={datasets}
          scales={scales}
        ></MultitypeChart>
        <Loading isLoading={isLoading}></Loading>
      </div>
    )
  }
}

export default AppContanier
