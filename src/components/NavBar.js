import React from 'react';
import {
  Navbar, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';

export default function NavBar() {
  return (
    <Navbar>
      <NavbarBrand href='/'>Achievement Tracker</NavbarBrand>
      <Nav className='mr-auto' navbar>
        <NavItem>
          <NavLink href='/achievements'>Achievements</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/games'>Games</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
