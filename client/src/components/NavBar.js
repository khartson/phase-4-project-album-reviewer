import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'; 
import { MdAlbum, MdMusicNote, MdPlaylistAdd, MdAdd } from 'react-icons/md'

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
          <LinkContainer to='/albums'>
            <Nav.Link><MdAlbum className='mb-1'/>{' '}View Albums</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/artists'>
            <Nav.Link><MdMusicNote className='mb-1'/>{' '}View Artists</Nav.Link>
          </LinkContainer>
        </Nav>
        <span className='text-muted'>|</span>
        <Nav>
          <LinkContainer to='/albums/new'>
            <Nav.Link><MdPlaylistAdd className='mb-1'/>{' '}Add an Album</Nav.Link>
          </LinkContainer>
          <LinkContainer to='artists/new'>
            <Nav.Link><MdAdd className='mb-1'/>{' '}Add an Artist</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <LinkContainer to='profile'>
            <Nav.Link>{user.username}{' '}<Image roundedCircle height={30} width={30} src={user.profile.pfp_url}/></Nav.Link>
          </LinkContainer>
          <Nav.Link onClick={handleLogoutClick}>Sign out</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar;