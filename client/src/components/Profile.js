import React, { useEffect, useState } from 'react';
import { Card, Image } from 'react-bootstrap';
function Profile({ userId }) {

  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  useEffect(()=>
    fetch(`/users/${userId}`).then((r)=>{
      if (r.ok) {
        r.json().then((r)=>setProfile(r));
      }
    }), []);
  
    if (!profile) return <div>Loading</div>
    return(
      <Card border='primary' style={{width:'18rem'}}>
        <Card.Body>
          <Image roundedCircle height={50} width={50} src={profile.profile.pfp_url}/>
          <Card.Title>{profile.profile.name}</Card.Title>
          <Card.Title>{profile.username}</Card.Title>
          <Card.Text>{profile.profile.bio}</Card.Text>
        </Card.Body>
      </Card>
    )
}

export default Profile; 