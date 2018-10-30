import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comics: [],
    }
  }

  componentDidMount() {
    fetch('https://gateway.marvel.com:443/v1/public/characters/1009718/comics?apikey=117b458635106b9721749634b53fb07b')
      .then(res => res.json())
      .then(d => this.setState({ comics: d.data.results }))
  }

    render() {
      return (
      <div>
        {this.state.comics.map((comic) => (
            <div key={comic.id}>
                  <h2>{comic.title}</h2>
                  <p>{comic.description}</p>
                  </div>
       ))}
      </div>
      )
  }
}

export default App;

