
import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Logout from '../../comps_general/logout'
import '../../comps_general/navBar.css'

export default function NavbarAdmin() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary myNavbar">
        <Container>
          <Navbar.Brand href="#">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/admin/users">Users</Nav.Link>
              <Nav.Link href="/admin/clients">Clients</Nav.Link>
              <Nav.Link href="/admin/proffesionals">Proffesionals</Nav.Link>
              <Nav.Link href="/admin/events">Events</Nav.Link>
            </Nav>
            <Logout/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
