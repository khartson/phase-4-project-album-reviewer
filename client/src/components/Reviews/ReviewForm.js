import React, { useState } from 'react';
import { Card, Form , Row, Col, FloatingLabel, Button, Alert } from 'react-bootstrap';
import Rating from 'react-rating';
import { BsStarFill, BsStar } from 'react-icons/bs';

function ReviewForm({ albumId, addReview }) {
  
  const [errors, setErrors] = useState([]);
  function handleReviewSubmit(e) {
    e.preventDefault();
    fetch('/reviews', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        album_id: albumId,
        content: content, 
        rating: rating
      })
    }).then((r)=>{
      if (r.ok) {
        r.json().then((r)=>addReview(r));
      } else {
        r.json().then((err)=>setErrors(err.errors)); 
      }
    })
  } 
  const [rating, setRating] = useState(null);
  const [content, setContent] = useState('');

  return(
    <Card>
      <Card.Header>
        <Row>
          <Col style={{ textAlign: 'left' }}>
            <Rating
              emptySymbol={<BsStar/>}
              fullSymbol={<BsStarFill/>}
              onClick={(value)=>setRating(value)}
              placeholderSymbol={<BsStarFill/>}
              placeholderRating={rating}
            /> 
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleReviewSubmit}>
          <Form.Group className='mb-3'>
            <FloatingLabel label='Type a review for this album..'>
              <Form.Control
                as='textarea'
                placeholder='Leave a review here'
                value={content}
                onChange={(e)=>setContent(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <Button 
            size='sm'
            className='mb-3'
            variant='outline-secondary' 
            type='submit'>Add Review
          </Button>
          {errors.map((err)=>{
            return <Alert key={err} variant='danger'>{err}</Alert>
          })}
        </Form>
      </Card.Body>
    </Card>
  )
}

export default ReviewForm; 