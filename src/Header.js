import React from 'react';
import './App.css';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
     } from 'reactstrap';


class Header extends React.Component {
    render(props) {
        return (
            <div className="Header">
                <div className="Navigation">
                    <Navbar expand="md">
                        <Nav pills className="Navigation">
                            <NavItem className="Item1">
                                    <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="Link" href="/bycharacter">Search by Character</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/bycreator">Search by Creator</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
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


