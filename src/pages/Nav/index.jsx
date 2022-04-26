import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image, Nav, Navbar} from 'react-bootstrap';

export default function NavComponent() {
    return (
        <Navbar className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark opacity-75" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home"><Image src="itadel.png" width="167" height="63"></Image></Navbar.Brand>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/news">News</Nav.Link>
              <Nav.Link href="/newsv2">News v2</Nav.Link>
              <Nav.Link href="/register">Sign Up</Nav.Link>
            </Nav>
            </div>
            </Container>
          </Navbar>
    );
}