import React from 'react';
import {
  Navbar, NavbarBrand, Nav, NavItem, NavLink, Button
} from 'reactstrap';
import { signOutUser } from '../helpers/auth';

export default function NavBar() {
  return (
    <Navbar color='dark' dark id='navbar'>
      <NavbarBrand href='/'>Achievement Tracker</NavbarBrand>
      <Nav className='mr-auto' navbar>
        <NavItem>
          <NavLink href='/'>Achievements</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/games'>Games</NavLink>
        </NavItem>
      </Nav>
      <Button onClick={signOutUser} color='warning'>
        Log Out
      </Button>
    </Navbar>
  );
}
