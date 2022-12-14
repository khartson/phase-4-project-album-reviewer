import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Account from '../pages/Account';
import NavBar from './NavBar';
import NewArtist from '../pages/NewArtist';
import Home from '../pages/Home'; 
import ArtistPage from '../pages/ArtistPage';
import ArtistsList from '../pages/ArtistsList';

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
          <Route index element={<ArtistsList/>}/>
          <Route path='new' element={<NewArtist/>}/>
          <Route path=':artistId' element={<ArtistPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
