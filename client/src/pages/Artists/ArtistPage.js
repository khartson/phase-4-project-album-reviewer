import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import LoadingPage from '../Fetching/LoadingPage';
import NoResultsPage from '../Fetching/NoResultsPage';
import ArtistDisplay from '../../components/Artists/ArtistDisplay';

function ArtistPage() {

  const { artistId } = useParams();
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    fetch(`/artists/${artistId}`).then((r)=>{
      setLoading(false)
      if (r.ok) {
        r.json().then((r)=>{
          setArtist(r);
        })
      } 
    })

  }, []);


  if (loading) return <LoadingPage/>

  return(
    <Container>
    {artist ? (
      <>
        <ArtistDisplay artist={artist}/>
      </>
    ) : (
      <NoResultsPage category='artists'/>
    )}
    </Container>
  )
}

export default ArtistPage; 