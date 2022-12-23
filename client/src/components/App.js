import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Users
import Login from '../pages/Users/Login';
import Account from '../pages/Users/Account';
import NavBar from './NavBar';
import Home from '../pages/Users/Home'; 
import UserPage from '../pages/Users/UserPage';


// Albums
import Albums from '../pages/Albums/Albums';
import AlbumPage from '../pages/Albums/AlbumPage';
import NewAlbum from '../pages/Albums/NewAlbum';


// Artists
import NewArtist from '../pages/Artists/NewArtist';
import ArtistPage from '../pages/Artists/ArtistPage';
import Artists from '../pages/Artists/Artists';

function App() {

  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('/me').then((r)=>{
      console.log(r.status)
      if (r.ok){
        r.json().then((user)=>setUser(user));
      }
    });
  }, []);
  
  if (!user) return <Login onLogin={setUser}/>

  return (
    <>
      <NavBar user={user} onLogout={setUser} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='profile' element={<Account user={user} onUpdate={setUser}/>}/>
        <Route path='artists'>
          <Route index element={<Artists/>}/>
          <Route path='new' element={<NewArtist/>}/>
          <Route path=':artistId' element={<ArtistPage/>}/>
        </Route>
        <Route path='/albums'>
          <Route index element={<Albums/>}/>
          <Route path='new' element={<NewAlbum/>}/>
          <Route path=':albumId' element={<AlbumPage/>}/>
        </Route>
        <Route path='/users'>
          <Route path=':userId' element={<UserPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
