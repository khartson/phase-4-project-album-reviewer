import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import ReviewList from '../Reviews/ReviewList';

function AlbumDisplay({ album, userReviewed }) {

  return(
    <Container>
      <Row>
        <h1 className='text-muted'>Album Information</h1>
      </Row>
      <Row xs='auto'>
        <Col>
          <Image style={{objectFit: 'cover'}} height='130px' width='130px' src={album.album_art_url}/>
        </Col>
        <Col>
          <h1>{album.title}</h1>
          <LinkContainer to={`/artists/${album.artist.id}`}>
            <Row xs='auto'>
              <Col>
                <Image roundedCircle style={{objectFit: 'cover'}} height='40x' width='40px' src={album.artist.image_url}/>
              </Col>
              <Col>
                <h3 className='text-muted'>{album.artist.name}</h3>
              </Col>
            </Row>
          </LinkContainer>
        </Col>
      </Row>
      <hr/>
      <Row>
        <h1 className='text-muted'>Reviews</h1>
      </Row>
      <Row>
        <ReviewList userReviewed={userReviewed} albumId={album.id} reviews={album.reviews}/>
      </Row>
      <Link to='/albums'>Return to Albums</Link>
    </Container>
  )
}

export default AlbumDisplay;