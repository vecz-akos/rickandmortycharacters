import React from 'react'

import { Container, Navbar } from 'react-bootstrap'

export default function CustomNavBar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
        <Container fluid>
            <Navbar.Brand href="/">Rick and Morty characters</Navbar.Brand>
        </Container>    
    </Navbar>
  )
}
