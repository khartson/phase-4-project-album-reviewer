import React from 'react'; 
import { Card, Image } from 'react-bootstrap';

function ArtistPreview({ artist }) {
  
  return(
    <>
      <Image roundedCircle height={50} width={50} src={artist.image_url}/>
      <div>{artist.name}</div>
      <div>{artist.location}</div>
    </>
  )
}

export default ArtistPreview;