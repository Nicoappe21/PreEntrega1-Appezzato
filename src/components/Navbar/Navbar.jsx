import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';


function NavBar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Casacashowroom</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
        <Nav.Link href="#Catalogo">Catalogo</Nav.Link>
        <Nav.Link href="#ofertas">Ofertas</Nav.Link>
      </Nav>
    </Container>
    <CartWidget/>
  </Navbar>
  
  );
}

export default NavBar;