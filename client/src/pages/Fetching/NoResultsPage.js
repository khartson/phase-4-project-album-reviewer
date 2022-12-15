import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';


function NoResultsPage({ category }) {

  return (
    <Container style={{ textAlign: 'center', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
      <h1>No {category} found</h1>
        <Link to={`/${category}/new`}>Want to add one?</Link>
    </Container>
  )
}

export default NoResultsPage;