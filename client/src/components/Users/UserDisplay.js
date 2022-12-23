import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import AlbumList from '../Albums/AlbumList';
function UserDisplay({ user }) {
  

  const memberSince = new Date(user.created_at).toLocaleDateString(); 
  return (
    <Container>
      <hr/>
      <Row style={{textAlign: 'center'}}>
        <h1 className='text-muted'>{user.username}'s Profile</h1>
      </Row>
      <Row xs='auto' style={{ justifyContent: 'center'}}>
        <Col>
          <Image roundedCircle style={{ objectFit: 'cover' }} height='130px' width='130px' src={user.profile.pfp_url}/>
        </Col>
        <Col>
          <h1>{user.profile.name}</h1>
          <span className='text-muted'>Member Since: {`${memberSince}`}</span>
          <br/>
          <span>{user.profile.bio}</span>
        </Col>
      </Row>
      <hr/>
      <Row>
        <h1 className='text-muted'>{user.profile.name}'s Reviewd Albums</h1>
      </Row>
      <Row xs='auto'>
        <AlbumList albums={user.albums}/>
      </Row>
    </Container>
  )
}

export default UserDisplay; 