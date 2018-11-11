import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

class Creators extends React.Component {

  constructor(props){
      super(props);
      this.state = {

      };
  }

getCreators = async (firstName, lastName) => {
    await fetch(`https://gateway.marvel.com:443/v1/public/creators?firstName=${firstName}%20&lastName=${lastName}&apikey=117b458635106b9721749634b53fb07b`)
      .then(res => res.json())
      .then(json => {
      const creatorID = json.data.results[0].id;
        return fetch(`https://gateway.marvel.com:443/v1/public/comics?creators=${creatorID}&apikey=117b458635106b9721749634b53fb07b`,
      {cache: "force-cache"})
      })
      .then(res => res.json())
      .then(d => this.setState({comics: d.data.results}));  
      }


  render() {
    return (     
      <div>
      </div>
    )
  }
}


export default Creators;

