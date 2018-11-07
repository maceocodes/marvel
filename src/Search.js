import React from 'react';
import './App.css';


class Search extends React.Component {
    render (props) {
        return (
        <div>
            <input 
              type="search"
              placeholder="character"
            />
            <button onClick={this.props.loadComics}>Search</button>
        </div>
        )
    }
}

export default Search;


