import React from 'react';
import {
  Navbar, NavbarBrand, Nav, NavItem, NavLink, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { signOutUser } from '../helpers/auth';

export default function NavBar({ user }) {
  console.warn(user);
  return (
    <Navbar color='dark' dark id='navbar'>
      <NavbarBrand href='/'>Achievement Tracker</NavbarBrand>
      {user && (
        <>
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
        </>
      )}
    </Navbar>
  );
}

NavBar.propTypes = {
  user: PropTypes.any,
};
