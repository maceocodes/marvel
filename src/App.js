import React from 'react';
import Header from  './Header';
import Search from  './Search';
import Creators from './Creators';
import Comics from './Comics';
import Home from './Home';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import {

   } from 'reactstrap';
import './App.css';

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/bycharacter" component={Comics} />
          <Route path="/bycreator" component={Creators}/>
        </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;

