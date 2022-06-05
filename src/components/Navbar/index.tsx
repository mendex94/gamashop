import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import './styles.scss';

function UserNavbar() {
  return (
    <header>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand color='light'>
            <Icon.Cart4 /> Gamashop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />

          <Navbar.Collapse className='me-auto'>
            <Nav.Link>
              <Link className='nav-link' to='/'>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='nav-link' to='/usuarios'>Usuarios</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='nav-link' to='/fornecedores'>Fornecedores</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='nav-link' to='/produtos'>Produtos</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='nav-link' to='/entregas'>Entregas</Link>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default UserNavbar;