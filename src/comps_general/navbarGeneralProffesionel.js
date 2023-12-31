import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Logout from './logout'

import './navbarGeneralProffesional.css'
import Avatar from '@mui/material/Avatar';
import { pink } from '@mui/material/colors';
import { MY_PROINFO } from '../services/apiService';
import AccountMenu from './avatarProMenu';


import './navBar.css'

export default function NavbarGeneralProffesionel() {
  return (

    <div>


     {/* <div style={{ backgroundColor: 'rgb(250, 210, 210)' , color: 'rgb(216, 173, 173)'}}>
          <Navbar expand="lg" className="bg-body-tertiary"> */}

         <Navbar expand="lg" className='myNavbar' >

{/* 
//     <div style={{ backgroundColor: 'rgb(250, 210, 210)' , color: 'rgb(216, 173, 173)'}}>
//          <Navbar expand="lg" className="bg-body-tertiary"> */}


        <Container>
          <Navbar.Brand href="/proffesionals/home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="/proffesionals/proffesionalProfile/:id" >My profile</Nav.Link> */}
              {/* לבדוק איפה ההודעות של האיש מקצוע */}
              {/* <Nav.Link href="/client/datepicker">My messages</Nav.Link> */}
              <Nav.Link href="/proffesionals/eventsProffesional">My events</Nav.Link>
            </Nav>
            <AccountMenu/>
            {/* <Logout/> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
