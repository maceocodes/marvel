import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col
     } from 'reactstrap';
import './App.css';

class Header extends React.Component {
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render(props) {
        return (
            <div>
                <div className="Navigation">
                        <Nav>
                            <NavItem>
                                <NavLink tag={Link} to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/bycharacter">Search by Character</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/bycreator">Search by Creator</NavLink>
                            </NavItem>
                        </Nav>
                </div>
                <div className="Title" >
                    <h2>Marvel Comic Search</h2>
                    <p>Search comics by Character or Creator</p>
                </div>    
            </div> 
        )
    }
}

export default Header;


