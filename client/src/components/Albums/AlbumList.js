import React from 'react'
import { Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import AlbumPreview from './AlbumPreview'

function AlbumList({ albums }) {

  return(
    <>
    {albums.map((album)=>{
      return(
        <LinkContainer key={album.id} style={{ width: '15rem', height: '16rem' }} to={`/albums/${album.id}`}>
          <Col>
            <AlbumPreview album={album}/>
          </Col>
        </LinkContainer>
      )
    })
    }
    </>
  )
}

export default AlbumList;