import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Logout from './logout'

export default function NavbarGeneralClient() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/clients/home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/clients/clientProfile/:id">My profile</Nav.Link>
              <Nav.Link href="/client/eventPicker">Create event</Nav.Link>
              <Nav.Link href="/clients/eventsClient">My events</Nav.Link>
            </Nav>
            <Logout/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
