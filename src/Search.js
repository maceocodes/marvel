import React from 'react';
import './App.css';

const onSearch = event => {
    this.setState({search: event.targe.value})
}

const generateSearchResults = search => {
    if (search === "") {
        return []
    } else {
        return 
        window.alert("error");
    }
}


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


