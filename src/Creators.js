import React from 'react';
import './App.css';
import Search from './Search';
import {
  CardColumns,
  Card,
  CardImg,
  CardTitle,
  CardText
} from 'reactstrap';




class Creators extends React.Component {

  constructor(props){
      super(props);

      this.state = {
        comics: [],
    }
};

byCreator = async (name) => {
  var names = name.split(" ");
  var firstName = names[0];
  var lastName = names[1];
  await fetch(`https://gateway.marvel.com:443/v1/public/creators?firstName=${firstName}%20&lastName=${lastName}&apikey=117b458635106b9721749634b53fb07b`)
    .then(res => res.json())
    .then(json => {
      const creatorID = json.data.results[0].id;
      return fetch(`https://gateway.marvel.com:443/v1/public/comics?creators=${creatorID}&apikey=117b458635106b9721749634b53fb07b`,
        { cache: "force-cache" })
    })
    .then(res => res.json())
    .then(d => this.setState({ comics: d.data.results }));
}


render () {
  return (
      <div>
      <Search loadComics={this.byCreator} />
        <ul>
        <div className = "Creator">
          {this.state.comics.map(c => 
            <li key={c.id}>
              <h1> {c.title} </h1>
              <p> {c.description} </p>
              <img src={c.thumbnail.path + "." +c.thumbnail.extension}/>
            </li>
          )} 
        </div>         
        </ul>
      </div>
  
  )
}


}


export default Creators;

