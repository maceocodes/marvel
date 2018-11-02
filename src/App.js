import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import Comics from './Comics';
import './App.css';


class App extends Component {
    render() {
      return (
        <div>
          <Header />
          <Search />
          <Comics />
        </div>
      )
  }
}

export default App;

