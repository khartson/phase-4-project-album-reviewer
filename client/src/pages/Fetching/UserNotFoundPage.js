import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import { BsQuestionSquare } from 'react-icons/bs'; 

function UserNotFoundPage() {
  return (
    <Container style={{ textAlign: 'center', position: 'fixed', 
                        top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
    >
      <>
        <BsQuestionSquare/> 
        <h1 className='text-muted'>No user found</h1>
        <Link to='/'>Return Home</Link>
      </>
            
    </Container>

     )
}

export default UserNotFoundPage;