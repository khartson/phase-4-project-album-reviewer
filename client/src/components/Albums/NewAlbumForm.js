import React, { useState } from 'react';
import { Form, Button, InputGroup, Row, Col, Image, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ArtistSearch from '../Artists/ArtistSearch';

const placeholderUrl = 'https://via.placeholder.com/150/000000/FFFFFF/?text=Album Cover'
const artistPlaceholderUrl = 'https://via.placeholder.com/150/000000/FFFFFF/?text=Artist Image'
function NewAlbumForm() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    album_art_url: '',
  });
  const [artist, setArtist] = useState({ id: null });

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
        artist_id: artist.id
      })
    }).then((r)=>{
      setLoading(false)
      if (r.ok) {
        r.json().then((r)=>navigate(`/albums/${r.id}`)); 
      } else {
        r.json().then((err)=>setErrors(err.errors));
      }
    })
  };

  return(
    <>
    <Row>
    <Col>
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
      <Form.Group className='mb-3'>
        <Form.Label>Artist</Form.Label>
        <InputGroup>
          <ArtistSearch setArtist={setArtist}/>
        </InputGroup>
        <Form.Text>Not seeing your artist?</Form.Text>
      </Form.Group>
    <Button className='mb-3' type='submit'>Submit New Artist</Button>
    {errors.map((err)=>{
      return <Alert key={err} variant='danger'>{err}</Alert>
    })}
    </Form>
    </Col>

    <Col>
      <Row>
        <h2 className='text-muted'>Album Preview</h2>
      </Row>
      <Row xs='auto'>       
        <Col>
          <Image style={{objectFit: 'cover'}} height='130px' width='130px'
              src={formData.album_art_url?  formData.album_art_url : placeholderUrl }/>
        </Col>
        <Col>
          <h2>{formData.title? formData.title : 'Album Title'}</h2>
          <Row xs='auto'>
            <Col>
            <Image roundedCircle style={{ objectFit: 'cover'}} height='30px' width='30px' 
                src={artist? artist.image_url : artistPlaceholderUrl}/>
            </Col>
            <div className='text-muted'>{artist? artist.name : 'Artist name'}</div>
          </Row>
        </Col>
      </Row>
    </Col>

    </Row>
    </>
  )

}

export default NewAlbumForm;