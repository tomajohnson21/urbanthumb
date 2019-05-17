import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css';
import Urbanthumbfinallogo from '../../assets/Urbanthumbfinallogo.png';

function TopNav() {

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navbar'>
            <Navbar.Brand><a href="/"><img className='navImg' src={Urbanthumbfinallogo} alt="UrbanThumb" /></a> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/new-plant">New Plant</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    <Nav.Link href="/login">Log in</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/myplants">My Plants</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Photo ID</NavDropdown.Item>
                        <NavDropdown.Item href="/about">About</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default TopNav;