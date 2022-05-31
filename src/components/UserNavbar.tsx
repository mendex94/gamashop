import React from 'react'
import {Navbar, Container} from 'react-bootstrap'
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
        </Container>
      </Navbar>
    </header>
  )
}

export default UserNavbar