import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AlbumList from '../Albums/AlbumList';
function ArtistDisplay({ artist }) {
  
  return(
    <Container>
      <Row>
        <h1 class='text-muted'>Artist Information</h1>
      </Row>
      <Row xs='auto'>
        <Col>
          <Image style={{ objectFit: 'cover '}} roundedCircle height='130px' width='130px' src={artist.image_url}/>
        </Col>
        <Col>
          <h1 className='mb-3'>{artist.name}</h1>
          <h3 className='text-muted'>{artist.location}</h3>
        </Col>
      </Row>
      <hr/>
      <Row>
        <h2 className='text-muted'>Albums</h2>
      </Row>
      <Row sm={'auto'}>
        <AlbumList albums={artist.albums}/>
      </Row>
      <hr/>
      <Link to='/artists'>Return to Artists</Link>
    </Container>
  )
}

export default ArtistDisplay;
