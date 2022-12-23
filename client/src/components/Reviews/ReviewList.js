import React, { useEffect, useState } from 'react';
import { Row, Col, Stack, Container } from 'react-bootstrap';
import Review from './Review';
import ReviewForm from './ReviewForm';

function ReviewList({ albumId, userReviewed }) {

  const [reviews, setReviews] = useState([]);
  const [hasReviewed, setReviewed] = useState(userReviewed);

  useEffect(()=>{
    fetch(`/reviews/?album_id=${albumId}`).then((r)=>{
      r.json().then((r)=>setReviews(r));
    })
  }, [])
 
  function updateReviews(newReview) {
    const newReviews = reviews.map((review)=>{
      if (review.id === newReview.id) {
        return newReview
      } else {
        return review
      }
    }); 

    setReviews(newReviews); 
  }

  function addReview(newReview) {
    const newReviews = [...reviews, newReview];
    setReviews(newReviews);
    setReviewed(true);
  }

  function deleteReview(deletedReview) {
    const newReviews = reviews.filter((review)=> review.id !== deletedReview.id);
    setReviews(newReviews);
    setReviewed(false);
  }

  return (
    <Col>
    <Row>
      <Stack>
        {reviews.map((review)=>{
          return <Review onDeleteReview={deleteReview} updateReviews={updateReviews} key={review.id} review={review}/>
        })}
      </Stack>
      <h2 className='text-muted'>Review this Album</h2>
    </Row>
    <hr/>
    {!hasReviewed ? (
    <Container className='border rounded' style={{ padding: '16px' }}>
      <ReviewForm userReviewed={userReviewed} addReview={addReview} albumId={albumId}/>
    </Container>
    ) : (
      <div>You've already reviewd this album</div>
    )}
    </Col>

  )

}

export default ReviewList; 