import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  state = {
    stocks: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(r => r.json())
    .then((response) => {
      // console.log(response)
      this.setState({
        stocks: response
      })
    })
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer stocks={this.state.stocks} />
      </div>
    );
  }
}

export default App;
