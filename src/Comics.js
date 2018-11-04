import React from 'react';
import './App.css';

class Comics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comics: [],
    }
  }

  componentDidMount() {
    fetch('https://gateway.marvel.com:443/v1/public/characters?name=wolverine&apikey=117b458635106b9721749634b53fb07b')
      .then(res => res.json())
      .then(json => {
      const characterId = json.data.results[0].id;
        return fetch(`https://gateway.marvel.com:443/v1/public/comics?characters=${characterId}&apikey=117b458635106b9721749634b53fb07b`)
      })
      .then(res => res.json())
      .then(d => this.setState ({comics: d.data.results}));  
      }

render() {
  console.log(this.state.comics);
  return (
  <div>
  <div>
          {this.state.comics.map(c => {
            return ( <ul>
              <li key={c.id}>{c.title}</li>
            </ul>
            )
          })}          
        </div>
    );

  </div>
  )
}
}


export default Comics;

