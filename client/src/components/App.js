import React, { useEffect, useState } from 'react';
import Login from '../pages/Login';

function App() {

  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('/me').then((r)=>{
      console.log(r.status)
      if (r.ok){
        console.log(r.ok)
        r.json().then((user)=>setUser(user));
      }
    });
  }, []);
  
  if (!user) return <Login onLogin={setUser}/>

  return <div>Logged in as: {user.username}</div>
}

export default App;
