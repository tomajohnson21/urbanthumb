import React from "react";
import './style.css';
import styled from 'styled-components';

//here is your nav bar
const Bar = styled.div`
height: 100px;
display: flex;
flex-direction: row;
justify-content: space-around;
//background-color: purple;
background-color: rgb(7,26,40);`


function TopNav() {
    return (
        // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navbar'>
        //   <Navbar.Brand><a href="/"><img className='navImg' src={Urbanthumbfinallogo} alt="UrbanThumb" /></a> </Navbar.Brand>
        //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //   <Navbar.Collapse id="responsive-navbar-nav">
        //     <Nav className="mr-auto">
        //       <Nav.Link href="/search">Search</Nav.Link>
        //       <Nav.Link href="/profile">Profile</Nav.Link>
        //       <Nav.Link href="/login">Log in</Nav.Link>
        //       <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        //         <NavDropdown.Item href="/myplants">My Plants</NavDropdown.Item>
        //         <NavDropdown.Item href="#action/3.2">Photo ID</NavDropdown.Item>
        //         <NavDropdown.Item href="/about">About</NavDropdown.Item>
        //         <NavDropdown.Divider />
        //         <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
        //       </NavDropdown>
        <Bar>
            {/* <a href="/">
            <div>
          <Icon style={{backgroundImage: `url(${require('./Home.png')})`}}/>
          <h7 style={{textAlign: 'center', color: 'white'}}>Home</h7>
          </div>
            </a> */}

            <a className="active faText" href="/"><i className="fa fa-fw fa-home"></i>Home</a>

            <a className="active faText" href="/newplant"><i className="fa fa-fw fa-search"></i>Search</a>

            <a className="active faText" href="/myplants"><i className="fa fa-fw fa-leaf"></i>MyPlant</a>

            <a className="active faText" href="/login"><i className="fa fa-fw fa-user"></i>Login</a>

            <a className="active faText" href="/about"><i className="fa fa-fw fa-users"></i>Team</a>
            {/* <a href="/search">
            <div>
          <Icon style={{backgroundImage: `url(${require('./search.png')})`}}/>
          <h7 style={{textAlign: 'center', color: 'white'}}>Search</h7>
          </div>
            </a>
            <a href="/myPlant">
            <div>
          <Icon style={{backgroundImage: `url(${require('./myplant.png')})`}}/>
          <h7 style={{textAlign: 'center', color: 'white'}}>My Plant</h7>
          </div>
            </a>
            <a href="/Login">
            <div>
          <Icon style={{backgroundImage: `url(${require('./login.png')})`}}/>
          <h7 style={{textAlign: 'center', color: 'white'}}>Login</h7>
          </div>
            </a>
            <a href="/aboutMe">
            <div>
          <Icon style={{backgroundImage: `url(${require('./team.png')})`}}/>
          <h7 style={{textAlign: 'center', color: 'white'}}>Team</h7>
          </div>
            </a> */}

        </Bar>


        //     </Nav>
        //   </Navbar.Collapse>
        // </Navbar>
    );
}

export default TopNav;