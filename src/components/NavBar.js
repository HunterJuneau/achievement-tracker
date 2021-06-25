import React from 'react';
import {
  Navbar, NavbarBrand, Nav, NavItem, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { signOutUser } from '../helpers/auth';

export default function NavBar() {
  return (
    <Navbar color='dark' dark id='navbar'>
      <NavbarBrand href='/'>Achievement Tracker</NavbarBrand>
      <Nav className='mr-auto' navbar>
        <NavItem>
          <Link to='/achievements'>Achievements</Link>
        </NavItem>
        <NavItem>
          <Link to='/games'>Games</Link>
        </NavItem>
      </Nav>
      <Button onClick={signOutUser} color='warning'>
        Log Out
      </Button>
    </Navbar>
  );
}
