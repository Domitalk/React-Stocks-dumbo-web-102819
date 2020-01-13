// const SearchBar = () => {
import React from 'react';

export default class SearchBar extends React.Component {
  
  
  handleChange = (event) => {
    // console.log(event.target.name)
    if (event.target.name === "Alphabetically") {
      this.props.changeFilterType("Alphabetically")
    } else if (event.target.name === "Price") {
      this.props.changeFilterType("Price")
    } else if (event.target.value === "Tech") {
      this.props.changeFilterType("Tech")
    } else if (event.target.value === "Sportswear") {
      this.props.changeFilterType("Sportswear")
    } else if (event.target.value === "Finance") {
      this.props.changeFilterType("Finance")
    }
  }


  render() {
    return (
      <div>

        <strong>Sort by:</strong>
        <label>
          <input type="radio" name="Alphabetically" value="Alphabetically" checked={null} onChange={this.handleChange}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" name="Price" value="Price" checked={null} onChange={this.handleChange}/>
          Price
        </label>
        <br/>

        <label>
          <strong>Filter:</strong>
          <select onChange={this.handleChange}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
      </div>
    );
  }
}
// }
// export default SearchBar;
