import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingPage from '../Fetching/LoadingPage';
import NoResultsPage from '../Fetching/NoResultsPage';
import AlbumDisplay from '../../components/Albums/AlbumDisplay';

function AlbumPage() {
  
  const { albumId } = useParams();
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch(`/albums/${albumId}`).then((r)=>{
      setLoading(false);
      if (r.ok) {
        r.json().then((r)=>{
          setAlbum(r);
        })
      }
    })
  }, []);

  if (loading) return <LoadingPage/>
  return (
    <>
      {album ? (
        <>
          <AlbumDisplay album={album}/>
        </>
      ) : (
        <NoResultsPage category='artists'/>
      )}
    </>
  )
}

export default AlbumPage;