import React, { useState } from 'react';
import { Form, Image, Alert, Button, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NewArtistForm() {
 
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    image_url: ''
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
  }; 


  function handleArtistSubmission(e) {
    e.preventDefault();
    setLoading(true);

    fetch('/artists', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        location: formData.location,
        image_url: formData.image_url,
      })
    }).then((r)=>{
      setLoading(false)
      if (r.ok) {
        r.json().then((r)=>navigate('/artists'))
      } else {
        r.json().then((errors)=> setErrors(errors.errors))
      }
    })
  };

  return (
    <Form onSubmit={handleArtistSubmission}>
      <Image height={50} width={50} className='mb-3' roundedCircle src={formData.image_url}/>
      <Form.Group className='mb-3'>
        <Form.Label>Artist Image URL</Form.Label>
        <Form.Control
          id='image_url'
          type='text'
          value={formData.image_url}
          placeholder='Enter URL'
          onChange={handleFormChange}
        /> 
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Enter Artist's Name</Form.Label>
        <Form.Control
         id='name'
         type='text'
         value={formData.name}
         placeholder='Enter the name of the artist'
         onChange={handleFormChange}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Enter Artist Location</Form.Label>
        <Form.Control
         id='location'
         type='text'
         value={formData.location}
         placeholder="Enter artist's location"
         onChange={handleFormChange}
        />
      </Form.Group>
      {loading ? (
        <Button variant='primary' disabled>
          <Spinner 
            as='span'
            animation='grow'
            size='sm'
            role='status'
            aria-hidden='true'
          />
          </Button>
         ) : (
          <Button 
            variant='primary'
            type='submit'
            className='mb-3'
          >
            Submit New Artist
          </Button>
        )}
        {errors.map((err)=>{
          return <Alert key={err} variant='danger'>{err}</Alert>
        })}

    </Form>
  )

}

export default NewArtistForm;