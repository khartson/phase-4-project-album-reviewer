import React from 'react';
import { Card, Carousel, Container } from 'react-bootstrap';
import { Link  } from 'react-router-dom';

function Home() {
   return (
    <Container>
      <Carousel style={{ textAlign: 'center', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        <Carousel.Item>
          <Card className='bg-dark' style={{ width: '30rem', height: '30rem'}}>
            <div style={{ textAlign: 'center', position: 'relative', top: '50%', top: '50%'}}>
              <Card.Title className='text-white'>Welcome to Reviewr</Card.Title>
              <Card.Text className='text-white'>A music review platfrom</Card.Text>
            </div>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className='bg-dark' style={{ width: '30rem', height: '30rem'}}>
            <div style={{ textAlign: 'center', position: 'relative', top: '50%', top: '50%'}}>
              <Card.Title className='text-white'>View and post artists & albums</Card.Title>
              <Link to='/artists/new' className='text-white'>Post an Artist</Link>
              {' '}
              <Link to='/albums/new' className='text-white'>Post an Album</Link>
            </div>
          </Card>
        </Carousel.Item>
        <Carousel.Item >
          <Card className='bg-dark' style={{ width: '30rem', height: '30rem'}}>
            <div style={{ textAlign: 'center', position: 'relative', top: '50%', top: '50%'}}>
              <Card.Title className='text-white'>See community music reviews</Card.Title>
              <Link to='/artists' className='text-white'>View Artists</Link>
              {' '}
              <Link to='/albums' className='text-white'>View Albums</Link>
            </div>
          </Card>
        </Carousel.Item>
      </Carousel>

    </Container>
   )
}

export default Home; 