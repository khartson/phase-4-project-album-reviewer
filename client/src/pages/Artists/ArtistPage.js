import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import LoadingPage from '../Fetching/LoadingPage';
import NoResultsPage from '../Fetching/NoResultsPage';
import AlbumList from '../../components/Albums/AlbumList';
function ArtistPage() {

  const { artistId } = useParams();
  const [artist, setArtist] = useState(null);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    fetch(`/artists/${artistId}`).then((r)=>{
      setLoading(false)
      if (r.ok) {
        r.json().then((r)=>{
          setArtist(r);
        })
      } else {
        r.json().then((err)=>setErrors(err.errors));
      }
    })

  }, []);


  if (loading) return <LoadingPage/>

  return(
    <Container>
    {artist ? (
      <>
        <Row>
          <h1 className='text-muted'>Artist Information</h1>
        </Row>
        <Row xs='auto'>
          <Col xs>
            <Image style={{ objectFit: 'cover' }} roundedCircle height='130x' width= '130px' src={artist.image_url}/>
          </Col>
          <Col xs>
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
      </>
    ) : (
      <NoResultsPage category='artists'/>
    )}
    <Link to='/artists'>Return to Artists</Link>
    </Container>
  )
}

export default ArtistPage; 