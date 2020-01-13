import React from 'react'

// const Stock = () => (

export default class Stock extends React.Component {
  handleClick = () => {
    if (this.props.addToPortfolio) {
      this.props.addToPortfolio(this.props.stock)
    } else if (this.props.removeFromPortfolio) {
      this.props.removeFromPortfolio(this.props.stock)
    }
  }
  render() {
    // console.log(this.props)
    return (
      <div onClick={this.handleClick} onClick={this.handleClick}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.props.stock.name}</h5>
            <p className="card-text">
              {this.props.stock.price}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
// );

// export default Stock
