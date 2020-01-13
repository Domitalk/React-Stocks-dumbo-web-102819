import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    portfolioStocks: [],
    filterType: ""
  }
  
  filterStocks = () => {

    let stocks = this.props.stocks 

    if (this.state.filterType === "Alphabetically") {
      stocks.sort((a, b) => { 
        return a.name.localeCompare(b.name)
      })
    } else if (this.state.filterType === "Price") {
      stocks.sort((a, b) => { 
        return a.price - b.price
      })
    } else if (this.state.filterType === "Tech") {
      stocks = stocks.filter((element) => {
        return element.type === "Tech"
      })
    } else if (this.state.filterType === "Finance") {
      stocks = stocks.filter((element) => {
        return element.type === "Finance"
      })
    } else if (this.state.filterType === "Sportswear") {
      stocks = stocks.filter((element) => {
        return element.type === "Sportswear"
      })
    }
    // filter here
    // console.log(stocks)
    return stocks 

  }



  addToPortfolio = (newStock) => {
    // console.log("new", newStock)
    // console.log("old", this.state.portfolioStocks)
    if (!this.state.portfolioStocks.includes(newStock)) {
      // console.log("Already works")
      let newOne = [...this.state.portfolioStocks, newStock]
      this.setState({
        portfolioStocks: newOne
      })
    }
  //   } else {
  //     let newOne = [...this.state.portfolioStocks, newStock]
  //     this.setState({
  //       portfolioStocks: newOne
  //     })
  // }
  }
  removeFromPortfolio = (stock) => {
    let copyArr = this.state.portfolioStocks
    let newArr = copyArr.filter(function(value, index, arr) {
      return stock != value 
    })
    this.setState({
      portfolioStocks: newArr
    })
  }

  changeFilterType = (type) => {
    this.setState({
      filterType: type
    })
    // console.log(type)

  }

  render() {
    return (
      <div>
        <SearchBar changeFilterType={this.changeFilterType} />

          <div className="row">
            <div className="col-8">

              <StockContainer  stocks={this.filterStocks()} addToPortfolio={this.addToPortfolio} />

            </div>
            <div className="col-4">

              <PortfolioContainer removeFromPortfolio={this.removeFromPortfolio} stocks={this.state.portfolioStocks} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
