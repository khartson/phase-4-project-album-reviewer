import React from 'react';
import User from '../components/User';
import { Route, useRouteMatch } from 'react-router-dom';

function Profile({ user }) {
  return (
    <>
      <User userId={user.id}/>
    </>
  )
}

export default Profile;