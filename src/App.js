import React from 'react';
import Comics from './Comics';
import Heading from './Heading';
import './App.css';


class App extends React.Component {
    render() {
      return (
        <div>
          <Heading />
          <Comics />
        </div>
      )
  }
}

export default App;

