import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  mapStocks = () => {
    return this.props.stocks.map((stock) => {
      return (
      <Stock 
        key={stock.id} 
        stock={stock}
        addToPortfolio={this.props.addToPortfolio}
      /> 
    )})
  }

  render() {
    // console.log(this.props)

    return (
      <div>
        <h2>Stocks</h2>
        {this.mapStocks()}
      </div>
    );
  }

}

export default StockContainer;
