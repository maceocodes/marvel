import React from 'react';
import Search from './Search';
import Heading from './Heading';
import './App.css';


class App extends React.Component {
    render() {
      return (
        <div>
          <Search />
          <Heading />
        </div>
      )
  }
}

export default App;

