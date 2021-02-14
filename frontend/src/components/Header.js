import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
//import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Navbar.Brand href='/'>Henok's Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='auto'>
            <Nav.Link href='/Cart'>
              <i className='fas fa-shopping-cart'></i> Cart
            </Nav.Link>
            <Nav.Link href='/Login'>
              <i className='fas fa-user'></i>Log In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
