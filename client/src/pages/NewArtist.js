import React from 'react';
import NewArtistForm from '../components/NewArtistForm';
import { Container } from 'react-bootstrap';


function NewArtist() {
  
  return(
    <Container>
        <h1 className='d-flex justify-content-center'>Submit a New Artist</h1>
        <NewArtistForm/>
    </Container>
  )
}

export default NewArtist; 