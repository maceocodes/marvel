import React from 'react';
import './App.css';


class Search extends React.Component {
    render(props) {
        return (
            <div className="search">
                <input type="text"/>
                <button> Search </button>
            </div>
        )
    }
}

export default Search;


