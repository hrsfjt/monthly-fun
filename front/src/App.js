import React from 'react'
import './App.css'
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
import Header from './components/Header'
import AppContanier from './components/AppContanier'

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
        <AppContanier></AppContanier>
      </div>
    )
  }
}

export default App
