import React from 'react';
import { Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ArtistPreview from './ArtistPreview';

function ArtistList({ artists }) {
  return(
    <>
    {artists.map((artist)=>{
      return(
        <LinkContainer key={artist.id} style={{width: '15rem', height: '18rem'}} to={`/artists/${artist.id}`}>
          <Col>
            <ArtistPreview artist={artist}/>
          </Col>
        </LinkContainer>
      )
    })

    }
    </>
  )
}

export default ArtistList;