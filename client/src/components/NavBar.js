import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'; 

function NavBar({ user, onLogout }) {

  function handleLogoutClick() {
    fetch('/logout', { method: "DELETE" }).then((r)=>{
      if (r.ok) {
        onLogout(null);
      }
    })
  }
  return (
    <Navbar bg='light'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>Reviewr</Navbar.Brand>
        </LinkContainer>
        <Nav>
          <LinkContainer to='/albums/new'>
            <Nav.Link>Add an Album</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <LinkContainer to='profile'>
            <Nav.Link>{user.username}{' '}<Image roundedCircle height={30} src={user.pfp_url}/></Nav.Link>
          </LinkContainer>
          <Nav.Link onClick={handleLogoutClick}>Sign out</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar;