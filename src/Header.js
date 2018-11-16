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
                        <Nav vertical>
                            <li>
                                <NavLink className="NavHome" tag={Link} to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="Navcharacter" tag={Link} to="/bycharacter">Search by Character</NavLink>
                            </li>
                            <li>
                                <NavLink className="Navcreator" tag={Link} to="/bycreator">Search by Creator</NavLink>
                            </li>
                        </Nav>
                </div>
                <div className="Title" >
                    <h2>Marvel Comic Search</h2>
                </div>    
            </div> 
        )
    }
}

export default Header;


