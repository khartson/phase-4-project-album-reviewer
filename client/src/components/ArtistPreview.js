import React from 'react'; 
import { Card } from 'react-bootstrap';
import { TbMicrophone2 } from 'react-icons/tb';
import { LinkContainer } from 'react-router-bootstrap';

function ArtistPreview({ artist }) {
  
  return(
    <LinkContainer style={{ width: '15rem', height: '18rem'}} to={`artists/${artist.id}`}>
    <Card className='mb-3' style={{}}>
      { artist.image_url ? (
        <Card.Img style={{ objectFit: 'cover', height: '12rem'}} variant='top' src={artist.image_url}/>
      ) : ( 
        <TbMicrophone2 style={{ height: '15rem', width: '15rem'}}/>
      )}
      <Card.Body>
        <Card.Title style={{fontSize: '15px', maxHeight: '20px', overflow: 'hidden'}}>{artist.name}</Card.Title>
        <Card.Text className='text-muted'>{artist.location}</Card.Text>
      </Card.Body>
    </Card>
    </LinkContainer>
  )
}

export default ArtistPreview;