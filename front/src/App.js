import React from 'react'
import './App.css'
import Header from './components/Header'
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Title,
} from 'chart.js'
import LineGraph from './components/LineGraph'
import MultitypeChart from './components/MultitypeChart'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { title: 'Monthly Fun!!' }
  }

  render() {
    return (
      <div className="container">
        <Header title={this.state.title} />
        <LineGraph></LineGraph>
        <MultitypeChart></MultitypeChart>
      </div>
    )
  }
}

export default App
