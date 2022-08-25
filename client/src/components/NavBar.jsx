/** @format */

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../public//imgs/logo/LogoMakr-00c3Tf.png';

import React from 'react';

const NavBar = () => {
	return (
		<Navbar className='navbar' bg='light' variant='right'>
			<Container fluid>
				<Navbar.Brand href='#home'>
					<img className='logo m-2' src={logo} alt='' />
				</Navbar.Brand>
				<Nav className='col-3 navbar justify-content-around'>
					<Nav.Link href='#home'>Home</Nav.Link>
					<Nav.Link href='#features'>Features</Nav.Link>
					<Nav.Link href='#pricing'>Pricing</Nav.Link>
				</Nav>
				<Nav className='col-2  d-flex justify-content-evenly '>
					<Nav.Link href='#singin'>SingIn</Nav.Link>
					<Nav.Link href='#singup'>SingUp</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavBar;
