import React, { useState, useEffect } from 'react';
import ArtistPreview from '../components/ArtistPreview';
import { Button } from 'react-bootstrap'; 

function Artists() {
  const [artists, setArtists] = useState([]);

  useEffect(()=>{
    fetch('/artists').then((r)=>{
      if (r.ok){
        r.json().then((artists)=>setArtists(artists));
      }
    })
  }, []);

  function showMoreArtists() {
    console.log('clicked');
  }
  return(
    <>
      { artists.length === 0 ? (
          <div>empty</div>
      ) : (
          <>{artists.map((artist)=>{
              return <ArtistPreview artist={artist}/>
            })}
            <Button onClick={showMoreArtists}>Show More</Button>
          </>
      )}
    </>
  )
} 

export default Artists;