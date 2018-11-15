import React from 'react';
import Header from  './Header';
import Search from  './Search';
import Creators from './Creators';
import Comics from './Comics';
import Home from './Home';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/bycharacter" component={Comics} />
          <Route path="/bycreator" component={Creators}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;

