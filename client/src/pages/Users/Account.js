import React, { useState } from 'react';
import Profile from '../../components/Users/Profile';
import EditProfileForm from '../../components/Users/EditProfileForm';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFillPencilFill } from 'react-icons/bs';
import { GrView } from 'react-icons/gr';
import { Link } from 'react-router-dom';

function Account({ user, onUpdate }) {

  const [editMode, setEditMode] = useState('view');
  function toggleEditMode() {
    setEditMode(editMode === 'view' ? 'edit' : 'view')
  }

  return (
    <>
      <Container>
        <h1>View or Edit Your Account Information</h1>
        <hr/>
        <Row md='auto' className='justify-content-center'>
        {editMode === 'view' ? (
          <Col>
            <Link to={`/users/${user.id}`}>View your public profile instead</Link>
            <Profile user={user}/>
            <span className='link-primary' onClick={toggleEditMode}><BsFillPencilFill/>{' '}Edit Profile</span>
            <br/>
          </Col>
        ) : (
          <Col>
            <EditProfileForm user={user} toggleEditMode={toggleEditMode} onUpdate={onUpdate}/>
            <span className='link-primary' onClick={toggleEditMode}><GrView/>{' '}View Profile</span>
          </Col>
        )}
        </Row>
      </Container>
    </>
  )
}

export default Account;