import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from 'next/router';
import { readToken, removeToken } from '@/lib/authenticate';

export default function MainNav() {
  const router = useRouter();
  
  let token = readToken(); 

  function logout() {
    removeToken(); 
    router.push('/login'); 
  }

  return (
    <>
      <Navbar className="fixed-top navbar-dark bg-dark">
        <Container>
          <Navbar.Brand href="/" as={Link}>YI-LUN,WU</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" as={Link} active={router.pathname === "/"}>Home</Nav.Link>
            <Nav.Link href="/about" as={Link} active={router.pathname === "/about"}>About</Nav.Link>
          </Nav>

          {token ? ( 
            <Nav>
              <NavDropdown title={token.userName} id="basic-nav-dropdown"> 
                <NavDropdown.Item href="/favourites" as={Link} active={router.pathname === "/favourites"}>
                  Favourites
                </NavDropdown.Item> [cite: 577]
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : ( 
            <Nav className="ms-auto">
              <Nav.Link href="/register" as={Link} active={router.pathname === "/register"}>Register</Nav.Link> 
              <Nav.Link href="/login" as={Link} active={router.pathname === "/login"}>Login</Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}