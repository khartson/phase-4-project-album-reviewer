import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import LoadingPage from '../Fetching/LoadingPage';
import NoResultsPage from '../Fetching/NoResultsPage';
import AlbumList from '../../components/Albums/AlbumList';


function Albums() {
  
  const location = useLocation();
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  const [urls, setUrls] = useState({
    next: null,
    last: null,
    page: null
  });

  const [endReached, setEndReached] = useState(false);

  useEffect(()=>{
    fetch('/albums').then((r)=>{
      if (r.ok) {
        setLoading(false);
        r.json().then((r)=>{
          console.log(r.data);
          setAlbums(r.data);
          setUrls({
            next: r.next_url,
            last: r.last_url,
            page: r.page_url,
          })
        })
      }
    })
  }, []);

  function showMoreAlbums() {
    if (urls.page === urls.last) {
      setEndReached(true);
    } else {
      fetch(`${urls.next}`).then((r)=>{
        if(r.ok) {
          r.json().then((r)=>{
            setAlbums([...albums, ...r.data]);
            setUrls({...urls, page: r.page_url, next: r.next_url});
          })
        }
      })
    }
  };

  if (loading) return <LoadingPage/>
  return (
    <Container>
      <hr></hr>
      <Row sm={'auto'}>
      { albums.length === 0 ? (
        <NoResultsPage category='albums'/>
      ) : (
        <AlbumList albums={albums}/>
      )
      }
      </Row>
      <Row>
         <Button variant='dark' disabled={endReached} onClick={showMoreAlbums}>Show More</Button>
      </Row>
    </Container>

  )

}

export default Albums;