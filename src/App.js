import React from 'react';
import Heading from  './Heading';
import Search from  './Search'
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comics: [],
      search: "",
    }
  }

getComics = async () => {
    await fetch('https://gateway.marvel.com:443/v1/public/characters?name=wolverine&apikey=117b458635106b9721749634b53fb07b')
      .then(res => res.json())
      .then(json => {
      const characterId = json.data.results[0].id;
        return fetch(`https://gateway.marvel.com:443/v1/public/comics?characters=${characterId}&apikey=117b458635106b9721749634b53fb07b`)
      })
      .then(res => res.json())
      .then(d => ({comics: d.data.results}));  
      }



render(props) {
  return (
  <div>
    <Heading />
    <Search loadComics={this.props.getComics} />
    <div>
          {this.state.comics.map(c => {
            return ( <ul>
              <li key={c.id}>{c.title}</li>
            </ul>
            )
          })}          
    </div>
  </div>
  )
}
}


export default App;

