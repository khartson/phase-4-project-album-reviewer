import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NewAlbumForm() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    artist_id: '',
    album_art_url: ''
  });

  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false)
  
  function handleFormChange(e) {
    const field = e.target.id;
    const input = e.target.value;

    setFormData({
      ...formData,
      [field]: input
    })
  };

  function handleAlbumSubmission(e) {
    e.preventDefault();
    setLoading(true);
    
    fetch('/albums', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.title,
        album_art_url: formData.album_art_url,
        artist_id: formData.artist_id,
      })
    }).then((r)=>{
      setLoading(false)
      if (r.ok) {
        r.json().then((r)=>navigate('/artists'))
      } else {
        r.json().then((err)=>setErrors(err.errors));
      }
    })
  };

  return(
    <Form onSubmit={handleAlbumSubmission}>
      <Form.Group className='mb-3'>
        <Form.Label>Album Title</Form.Label>
        <Form.Control
          id='title'
          type='text'
          value={formData.title}
          placeholder='Enter album name'
          onChange={handleFormChange}
        />
      </Form.Group>
      <Form.Group className='mhb-3'>
        <Form.Label>Album Art URL</Form.Label>
        <Form.Control
          id='album_art_url'
          type='text'
          value={formData.album_art_url}
          placeholder='Enter a URL for the album art'
          onChange={handleFormChange}
        />
      </Form.Group>
    </Form>
  )

}

export default NewAlbumForm;