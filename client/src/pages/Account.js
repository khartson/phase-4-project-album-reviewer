import React from 'react';
import Profile from '../components/Profile';
import { Route, useRouteMatch } from 'react-router-dom';

function Account({ user }) {
  return (
    <>
      <Profile userId={user.id} user={user}/>
    </>
  )
}

export default Account;