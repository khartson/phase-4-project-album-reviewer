import React, { useState } from 'react';
import LoginForm from '../../components/Users/LoginForm';
import SignUpForm from '../../components/Users/SignUpForm';
import Container from 'react-bootstrap/Container';

function Login({ onLogin }) {

  const [authMode, setAuthMode] = useState('login');

  function changeAuthMode() {
    setAuthMode(authMode === 'login' ? 'signup' : 'login');
  }


  return(
    <>
      <Container>
        <h1>Album Reviwer</h1>
        {authMode === 'login' ? (
          <>
            <h1>Log in</h1>
            <LoginForm onLogin={onLogin}/>
            <div>
              Need an account?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
          </>
        ) : (
          <>
            <h1>Sign Up</h1>
            <SignUpForm onLogin={onLogin}/>
            <div>
              Already registered?{" "}
              <span className='link-primary' onClick={changeAuthMode}>
                Log in
              </span>
            </div>
          </>
        )
        }
      </Container>
    </>
  )
}

export default Login;