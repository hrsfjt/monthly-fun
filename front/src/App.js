import React from 'react';
import './App.css';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { title: 'Monthly Fun!!' }
  }

  render() {
    return (
      <div className="container" >
        <Header title={this.state.title} />
      </div>
    );
  }
}

export default App;
