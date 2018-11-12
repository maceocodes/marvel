import React from 'react';
import './App.css';
import Search from  './Search';

class Comics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comics: [],
      search: "",
    }
  };

byCharacter = async (name) => {
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
    <Search loadComics={this.byCharacter} />
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
    </div>
  </div>
  )
}
}


export default Comics;

