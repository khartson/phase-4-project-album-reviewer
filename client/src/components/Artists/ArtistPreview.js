import React from 'react'; 
import { Card } from 'react-bootstrap';
import { TbMicrophone2 } from 'react-icons/tb';

function ArtistPreview({ artist }) {

  return(
    <Card className='mb-3'>
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
  )
}

export default ArtistPreview;