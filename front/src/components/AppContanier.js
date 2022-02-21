import React from 'react'
import Sample from '../assets/json/multitype_chart_sample.json'
import MultitypeChart from './MultitypeChart'
import LineGraph from './LineGraph'

class AppContanier extends React.Component {
  render() {
    return (
      <div>
        <LineGraph></LineGraph>
        <MultitypeChart
          title={Sample.title}
          labels={Sample.labels}
          datasets={Sample.datasets}
        ></MultitypeChart>
      </div>
    )
  }
}

export default AppContanier
