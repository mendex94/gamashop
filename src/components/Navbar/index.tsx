import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'

function UserNavbar() {
  return (
    <header>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#home' color='light'>
            <Icon.Cart4/>
            Gamashop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#usuarios'>Usuarios</Nav.Link>
            <Nav.Link href='#fornecedores'>Fornecedores</Nav.Link>
            <Nav.Link href='#produtos'>Produtos</Nav.Link>
            <Nav.Link href='#entregas'>Entregas</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default UserNavbar