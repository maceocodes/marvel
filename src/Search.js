import React from 'react';
import './App.css';
import { Button } from 'reactstrap';


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
        <div>
            <input 
              type="search"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <Button color="secondary" onClick={() => this.props.loadComics(this.state.value)}>Search</Button>
        </div>
        )
    }
}

export default Search;


