import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'; 
import LoadingPage from '../Fetching/LoadingPage';
import UserDisplay from '../../components/Users/UserDisplay';
import UserNotFoundPage from '../Fetching/UserNotFoundPage';
function UserPage() {
  
  const { userId } = useParams();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch(`/users/${userId}`).then((r)=>{
      setLoading(false);
      if (r.ok) {
        r.json().then((user)=>setUser(user))
      }
    })
  }, []);

  if (loading) return <LoadingPage/>
  return (
    <Container>
    {user? (
      <UserDisplay user={user}/>
    ) : (
      <UserNotFoundPage/>
    )}
    </Container>
  )
}

export default UserPage; 

