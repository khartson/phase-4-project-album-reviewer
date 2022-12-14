import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

function LoadingPage() {
  
  return(
    <Container style={{ textAlign: 'center', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
      <Spinner animation='border' role='status'/>
    </Container>
  )
}

export default LoadingPage;