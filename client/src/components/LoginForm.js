import React, { useState } from 'react'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function LoginForm({ onLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  // const [errors, setErrors] = useState([]);
  // const [loading, setLoading] = useState(false);

  function handleFormChange(e) {
    const field = e.target.id;
    const input = e.target.value; 
    
    setFormData({
      ...formData,
      [field]: input
    })
  }


  function handleLoginSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return(
    <Form onSubmit={handleLoginSubmit}>
      <Form.Group className='mb-3'>
        <Form.Label>Username</Form.Label>
        <Form.Control 
          id='username'
          type='text' 
          value={formData.username} 
          placeholder='Enter username'
          onChange={handleFormChange}
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Password</Form.Label>
        <Form.Control 
          id='password'
          type='password' 
          placeholder='password'
          onChange={handleFormChange}
        />
      </Form.Group>
        <Button 
          variant='primary' 
          type='submit'
        >
          Login
        </Button>
    </Form>
  )
}

export default LoginForm;