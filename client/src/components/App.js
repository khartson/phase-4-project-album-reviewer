import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Account from '../pages/Account';
import NavBar from './NavBar';

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
        <Route path='profile' element={<Account user={user}/>}></Route>
      </Routes>
    </>
  )
}

export default App;
