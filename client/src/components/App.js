import React, { useEffect, useState } from 'react';

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
    <div>
      hello 
    </div>
  );
}

export default App;
