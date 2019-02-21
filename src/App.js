import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from "./component/FilterableProductTable";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable></FilterableProductTable>
      </div>
    );
  }
}

export default App;
