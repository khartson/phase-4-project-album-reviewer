import React from 'react';
import NewAlbumForm from '../../components/Albums/NewAlbumForm';
import { Container } from 'react-bootstrap';

function NewAlbum() {
  
  return(
    <Container>
      <h1>New Album</h1>
      <NewAlbumForm/>
    </Container>
  )
}

export default NewAlbum;