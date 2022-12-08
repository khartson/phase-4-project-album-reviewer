import React, { useEffect, useState } from 'react';
import Login from '../pages/Login';

function App() {

  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('/me').then((r)=>{
      if (r.ok){
        r.json().then((user)=>setUser(user));
      }
    });
  }, []);

  return (
    <Login></Login>
  );
}

export default App;
