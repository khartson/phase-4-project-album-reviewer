import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import Button from 'react-bootstrap/Button';

function Login({ onLogin }) {
  return(
    // <LoginForm onLogin={onLogin}/>
    <SignUpForm onLogin={onLogin}/>
  )
}

export default Login;