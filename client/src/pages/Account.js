import React, { useState } from 'react';
import Profile from '../components/Users/Profile';
import EditProfileForm from '../components/Users/EditProfileForm';
import { Container } from 'react-bootstrap';
import { BsFillPencilFill } from 'react-icons/bs';
import { GrView } from 'react-icons/gr';

function Account({ user, onUpdate }) {

  const [editMode, setEditMode] = useState('view');
  function toggleEditMode() {
    setEditMode(editMode === 'view' ? 'edit' : 'view')
  }

  return (
    <>
      <Container>
        <h1>View or Edit Your Account Information</h1>
        {editMode === 'view' ? (
          <>
            <Profile user={user}/>
            <span className='link-primary' onClick={toggleEditMode}><BsFillPencilFill/>{' '}Edit Profile</span>
          </>
        ) : (
          <>
            <EditProfileForm user={user} toggleEditMode={toggleEditMode} onUpdate={onUpdate}/>
            <span className='link-primary' onClick={toggleEditMode}><GrView/>{' '}View Profile</span>
          </>
        )}
      </Container>
    </>
  )
}

export default Account;