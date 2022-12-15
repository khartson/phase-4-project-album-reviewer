import React from 'react'; 
import { Card } from 'react-bootstrap';

function AlbumPreview({ album }) {

  return(
    <Card className='mb-3 text-center bg-dark'>
      <Card.Img style={{ objectFit: 'cover', height: '12rem'}} src={album.album_art_url} alt='Album art'/>
      <Card.Footer style={{ fontSize: '15px', maxHeight: '40px', overflow: 'hidden'}} className='text-white'>{album.title}</Card.Footer>

    </Card>
  )
}

export default AlbumPreview