import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

function SignUpForm({ onLogin }) {
  
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    password_confirmation: '',
    bio: '',
    pfp_url: '',
  })

  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);


  function handleFormChange(e) {
    const field = e.target.id;
    const input = e.target.value; 

    setFormData({
      ...formData,
      [field]: input
    })
  }

  function handleSignUpSubmit(e) {
    e.preventDefault()
    fetch('/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        username: formData.username,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
        bio: formData.bio,
        pfp_url: formData.pfp_url,
      })
    }).then((r)=>{
      setLoading(false)
      if (r.ok) {
        r.json().then((user)=>onLogin(user))
      } else {
        r.json().then((errors)=> setErrors(errors.errors))
      }
    })
  }
  
  return(
    <Form onSubmit={handleSignUpSubmit}>
      <Form.Group classnName='mb-3'>
        <Form.Label>Name</Form.Label>
        <Form.Control 
          id='name'
          type='text'
          value={formData.name}
          placeholder='Enter your name'
          onChange={handleFormChange}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Username</Form.Label>
        <Form.Control
          id='username'
          type='text'
          value={formData.username}
          placeholder='Choose a username'
          onChange={handleFormChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          id='password'
          type='password'
          value={formData.password}
          placeholder='Enter a password'
          onChange={handleFormChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password Confirmation</Form.Label>
        <Form.Control
          id='password_confirmation'
          type='password'
          vallue={formData.password_confirmation}
          placeholder='Confirm your password'
          onChange={handleFormChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Profile Image URL</Form.Label>
        <Form.Control
          id='pfp_url'
          type='text'
          value={formData.pfp_url}
          placeholder='Enter an image URL for a profile picture'
          onChange={handleFormChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Bio</Form.Label>
        <Form.Control
          as='textarea'
          id='bio'
          value={formData.bio}
          placeholder='Tell us a bit about yourself'
          onChange={handleFormChange}
        />
      </Form.Group>
      <Button
        variant='primary'
        type='submit'
      >
        Sign Up
      </Button>
      <div>{errors}</div>
    </Form>
  )
}

export default SignUpForm;