import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeaderNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <div className="container">
            <Navbar.Brand to="/home"><b>
                <span style={{color:"#0674A4"}}>Computer Ripo</span>
                </b></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link className='nav-link mr-5' to="/home">Home</Link>
                    <Link className='nav-link mr-5' to="/about">About</Link>
                    <Link className='nav-link mr-5' to="/service">Service</Link>
                    <Link className='nav-link mr-5' to="/dashboard">Dashboard</Link>
                    <Link className='nav-link mr-5' to="/blog">Blog</Link>
                    <Link className='nav-link mr-5' to="/contact">Contact</Link>
                    
                </Nav>
               
            </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default HeaderNavbar;