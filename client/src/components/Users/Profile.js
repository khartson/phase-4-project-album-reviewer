import React from 'react';
import { Card, Image } from 'react-bootstrap';
function Profile({ user }) {

    return(
      <Card style={{width:'18rem'}}>
        <Card.Body>
          <Image roundedCircle height={50} width={50} src={user.profile.pfp_url}/>
          <Card.Title>{user.profile.name}</Card.Title>
          <Card.Title>{user.username}</Card.Title>
          <Card.Text>{user.profile.bio}</Card.Text>
        </Card.Body>
      </Card>
    )
}

export default Profile; 