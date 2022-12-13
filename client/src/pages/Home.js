import React from 'react';
import { Carousel, Button, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Home() {
   return (
    <Container>
      <LinkContainer to='artists'>
        <Button className='mb-3' variant='secondary'>View Artists</Button>
      </LinkContainer>
      <LinkContainer to='albums'>
        <Button className='mb-3'>View Albums</Button>
      </LinkContainer>
    </Container>
   )
}

export default Home; 