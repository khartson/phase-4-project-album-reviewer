import React, { useState } from 'react';
import Rating from 'react-rating';
import { Card, Row, Col, Image, Button, Form } from 'react-bootstrap';
import { BsStarFill, BsStar } from 'react-icons/bs';
import { LinkContainer } from 'react-router-bootstrap';
import { HiPencil } from 'react-icons/hi';
import { IoIosCheckmark } from 'react-icons/io'

function Review({ review, updateReviews, onDeleteReview }) {

  const [editedContent, setEditedContent] = useState(review.content);
  const [rating, setRating] = useState(review.rating);
  const [editable, setEditable] = useState(false);

  const [invalid, setInvalid] = useState(false); 
  const [errors, setErrors] = useState([]); 

  function onReviewUpdate(e) {
    e.preventDefault();
    fetch(`/reviews/${review.id}`, {
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating: rating,
        content: editedContent
      })
    }).then((r)=>{
      if (r.ok) {
        r.json().then((r)=>{
          updateReviews(r);
          setInvalid(false);
          setEditable(false);
        });
      } else {
        r.json().then((err)=>{
          setInvalid(true);
          setErrors(err.errors);
        });
      }
    })
  }

  function deleteReview() {
    fetch(`/reviews/${review.id}`, {
      method: "DELETE",
    }).then((r)=> {
      if (r.ok) {
        onDeleteReview(review);
      }
    })

  }
  return(
    <Card className='mb-3'>
      <Card.Header>
        <Row>
        <Col sm>
          <LinkContainer to={`/users/${review.user.id}`}>
            <div>
              <Image roundedCircle height={30} width={30} src={review.user.profile.pfp_url}/>
              {' '}<span>{review.user.profile.name}</span>
            </div>
          </LinkContainer>
        </Col>
        <Col sm></Col>
        <Col sm style={{ textAlign: 'right'}}>
          <Rating className='mb-1'
            emptySymbol={<BsStar/>}
            fullSymbol={<BsStarFill/>}
            readonly={editable? false : true}
            onClick={(value)=>setRating(value)}
            placeholderSymbol={<BsStarFill/>}
            placeholderRating={rating}
          />
          {review.current_user_review ? <Button onClick={()=>{setEditable(!editable); setRating(review.rating)}} variant='default'><HiPencil/></Button>: null}
        </Col>
        </Row>
      </Card.Header>
      <Card.Body>
          {editable ? (
            <Form noValidate onSubmit={onReviewUpdate}>
            <Form.Control
              className='mb-3'
              as='textarea'
              value={editedContent}
              onChange={(e)=>setEditedContent(e.target.value)}
              isInvalid={invalid}
             />
             <Form.Control.Feedback type='invalid'>
              {errors[0]}
             </Form.Control.Feedback>
             <Button 
                variant='outline-secondary' 
                size='sm'
                type='submit'
                style={{ marginRight: '10px' }}
              >Save changes <IoIosCheckmark className='mb-1'/>
            </Button>
            <Button
              variant='outline-danger'
              size='sm'
              onClick={deleteReview}
            > Delete Review
            </Button>
            </Form>) :
            ( review.content
            )}
            
      </Card.Body>
    </Card>
  )
}

export default Review;