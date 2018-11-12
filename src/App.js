import React from 'react';
import Heading from  './Heading';
import Search from  './Search';
import Creators from './Creators';
import './App.css';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comics: [],
      search: "",
    }
  };

getComics = async (name) => {
    await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=117b458635106b9721749634b53fb07b`)
      .then(res => res.json())
      .then(json => {
      const characterId = json.data.results[0].id;
        return fetch(`https://gateway.marvel.com:443/v1/public/comics?characters=${characterId}&apikey=117b458635106b9721749634b53fb07b`, 
      {cache: "force-cache"})
      })
      .then(res => res.json())
      .then(d => this.setState({comics: d.data.results}));  
      }

render() {
  return (
    
  <div>
    <Heading />
    <Search loadComics={this.getComics} />
    <div>
      <ul className="comics">
        {this.state.comics.map(c => 
          <li key={c.id}>
            <p> {c.title} </p>
            <p> {c.description} </p>
            <img src={c.thumbnail.path + "." +c.thumbnail.extension}/>
            <li>{c.creators.items.map(cr => <li>{cr.name}</li>)}</li>
          </li>
        )}          
      </ul>
        <BrowserRouter>
          <div className="container">
          <Route path="/creators" component={Creators} />
          </div>
        </BrowserRouter>
    </div>
  </div>
  )
}
}


export default App;

