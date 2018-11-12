import React from 'react';
import Heading from  './Heading';
import Search from  './Search';
import Creators from './Creators';
import Comics from './Comics';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Heading />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Comics} />
          <Route path="/bycharacter" component={Comics} />
          <Route path="/bycreator" component={Creators}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;

