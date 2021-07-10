import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  Form,
  ModalHeader,
  Label,
  ModalBody,
  Input,
  ModalFooter,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { updateLink } from '../helpers/data/linkData';
import { signOutUser } from '../helpers/auth';

export default function NavBar({ user, setUser }) {
  const [modal, setModal] = useState(false);
  const [steam, setSteam] = useState('');

  const toggle = () => setModal(!modal);

  const handleInput = (e) => {
    setSteam(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateLink({ steam, key: user.linkKey });
    setUser({
      fullName: user.fullName,
      steam,
      linkKey: user.linkKey,
      uid: user.uid,
    });

    setSteam('');
    toggle();
  };

  const handleUnlink = () => {
    updateLink({ steam: '', key: user.linkKey });
    setUser({
      fullName: user.fullName,
      steam: '',
      linkKey: user.linkKey,
      uid: user.uid,
    });
  };

  return (
    <>
      <Navbar color='dark' dark id='navbar'>
        <NavbarBrand href='/'><img src='https://image.flaticon.com/icons/png/512/60/60778.png' alt='Check Mark Logo' className='nav-logo' />Achievement Tracker</NavbarBrand>
        <Nav className='mr-auto' navbar>
          <NavItem className='nav-item'>
            <Link to='/achievements' className='link'>Achievements</Link>
          </NavItem>
          <NavItem className='navi-item'>
            <Link to='/games' className='link'>Games</Link>
          </NavItem>
        </Nav>
        <UncontrolledDropdown nav inNavbar className='ml-auto user-dropdown'>
          <DropdownToggle nav caret>
            {user.fullName}
          </DropdownToggle>
          <DropdownMenu right>
            {user.steam ? (
              <DropdownItem onClick={handleUnlink} className='steam-connect'>Unlink Steam</DropdownItem>
            ) : (
              <DropdownItem onClick={toggle} className='steam-connect'>Connect Steam</DropdownItem>
            )}
            <DropdownItem onClick={signOutUser}>Log Out</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Navbar>

      <Modal isOpen={modal} toggle={toggle}>
        <Form onSubmit={handleSubmit}>
          <ModalHeader toggle={toggle}>
            <Label for='steamId'>Enter Your Steam ID</Label>
          </ModalHeader>
          <ModalBody>
            <Input
              required
              type='text'
              value={steam}
              onChange={handleInput}
              name='steam'
              id='steamId'
            ></Input>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={handleSubmit}>
              Submit
            </Button>
            <Button color='secondary' onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
}

NavBar.propTypes = {
  user: PropTypes.any.isRequired,
  setUser: PropTypes.func.isRequired,
};
