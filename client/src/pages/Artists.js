import React, { useState, useEffect } from 'react';
import ArtistPreview from '../components/ArtistPreview';
import { Button, Container, Row, Col } from 'react-bootstrap'; 

function Artists() {
  const [artists, setArtists] = useState([]);

  const [urls, setUrls] = useState({
    next: null,
    last: null, 
    page: null,
  })

  const [endReached, setEndReached] = useState(false);

  useEffect(()=>{
    fetch('/artists').then((r)=>{
      if (r.ok){
        r.json().then((r)=>{
          setArtists(r.data);
          setUrls({ 
            next: r.next_url,
            last: r.last_url,
            page: r.page_url
          })
        })
      
      }
    })
  }, []);

  function showMoreArtists() {
    if (urls.page === urls.last) {
      setEndReached(true);
    } else {
      fetch(`${urls.next}`).then((r)=>{
        if(r.ok) {
          r.json().then((r)=>{
            setArtists([...artists, ...r.data]);
            setUrls({...urls, page: r.page_url, next: r.next_url});
          })
        }
      })
    }
  }

  return(
    <Container>
      <Row sm={'auto'}>
      { artists.length === 0 ? (
          <div>empty</div>
      ) : (
        <>
          {artists.map((artist)=>{
              return (
                <Col>
                  <ArtistPreview artist={artist}/>
                </Col>
              )
            })}
        </>
      )}
      </Row>
      <Row>
            <Button disabled={endReached} onClick={showMoreArtists}>Show More</Button>
      </Row>
    </Container>
  )
} 

export default Artists;