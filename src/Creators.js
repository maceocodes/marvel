import React from 'react';
import './App.css';


class Creators extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        comics: [],
        value:''
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

handleChange = (event) => {
this.setState({ value: event.target.value });
}  

render () {
  return (
  <div>
      <button>Creator</button>
      <div className="creatorSearch">
      <input 
        type="search"
        placeholder="creator"
        value={this.state.value}
        onChange={this.handleChange}
      />
      <button onClick={() => this.getCreators.value}>Search</button>
      </div>

      <div className="creatorResponse">
        <ul>
          {this.state.comics.map(c => 
            <li key={c.id}>
              <p> {c.title} </p>
              <p> {c.description} </p>
              <img src={c.thumbnail.path + "." +c.thumbnail.extension}/>
            </li>
          )}          
        </ul>
      </div>
      
  </div>
  )
}


}


export default Creators;

