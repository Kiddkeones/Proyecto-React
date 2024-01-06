import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import { useCategory} from '../../hooks/useCategory';

export const NavBarComponent = () => {

  const { category } = useCategory()

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"}>
              <Nav.Link href="#Inicio">Inicio</Nav.Link>
            </Link>
            <Nav.Link href="#Ayuda">Ayuda</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              {
                category.map((item, index) => {
                  return <NavDropdown.Item key={index}>
                    <link to={`category/${item}`}>{item}</link>
                  </NavDropdown.Item>
                })
              }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  )
}
