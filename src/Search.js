import React from 'react';
import './App.css';


const Search = (props) => {
        return (
            <div>
                <input 
                  type="search"
                  onSearch={props.loadComics}
                  placeholder="character"
                />
                <button>Search</button>
            </div>
        )
    }

export default Search;


