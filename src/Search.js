import React from 'react';
import { Button } from 'reactstrap';
import './App.css';


class Search extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value:''
        };
    }


handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

    render () {
        return (
        <div class="Search">
            <input 
              type="search"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button class="Button" onClick={() => this.props.loadComics(this.state.value)}>Search</button>
        </div>
        )
    }
}

export default Search;


