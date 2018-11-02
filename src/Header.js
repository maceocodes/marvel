import React from 'react';
import Header from './Header';
import Search from './Search';
import Comics from './Comics';
import './App.css';


class App extends React.Component {
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

