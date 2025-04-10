import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthenticationButton from "./AuthenticationButton";

function Navigation() {
  return (
    <Navbar bg="light" expand="sm" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">Welcome to My App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/tasks">Tasks</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          </Nav>
          <AuthenticationButton />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
