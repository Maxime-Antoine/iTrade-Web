import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import "./header.css";

const Header = () => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/" className="nav-item nav-link">iTrade</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem>
                        <Link to="/portfolio" className="nav-item nav-link">Portfolio</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/transaction" className="nav-item nav-link">Transactions</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem>
                        <Link to="/login" className="nav-item nav-link">Login</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/register" className="nav-item nav-link">Register</Link>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
