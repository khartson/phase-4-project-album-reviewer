import React, { useState, useEffect } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import NoResultsPage from '../Fetching/NoResultsPage';
import ArtistList from '../../components/Artists/ArtistList';
import LoadingPage from '../Fetching/LoadingPage';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Searchbar from '../../components/Searchbar';
function Artists() {

  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [urls, setUrls] = useState({
    next: null,
    last: null, 
    page: null,
  })

  const [endReached, setEndReached] = useState(false);

  useEffect(()=>{
    fetch('/artists').then((r)=>{
      setLoading(false);
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

  if (loading) return <LoadingPage/>
  return(
      <Container>
      <hr/>
      <Searchbar category='artists'/>
      <Row sm={'auto'}>
      { artists.length === 0 ? (
          <NoResultsPage category={'artists'}/>
      ) : (
        <>
          <ArtistList artists={artists}/>
          <div className='' style={{ width: '2rem', height: '14rem', textAlign: 'center'}}>
            <Link style={{ color: 'gray', textDecoration: "none"}} to='/artists/new'><AiOutlinePlus style={{marginTop: '7rem'}}/></Link>
          </div>
        </>
      )}
      </Row>
      <hr/>
      <Row>
            <Button variant='link'disabled={endReached} onClick={showMoreArtists}>Show More</Button>
      </Row>
    </Container>
  )
}

export default Artists; 