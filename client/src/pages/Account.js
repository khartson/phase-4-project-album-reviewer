import React, { useState } from 'react';
import Profile from '../components/Profile';
import EditProfileForm from '../components/EditProfileForm';
import { Container } from 'react-bootstrap';
import { BsFillPencilFill } from 'react-icons/bs';
import { GrView } from 'react-icons/gr';

function Account({ user }) {

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
            <Profile userId={user.id} use={user}/>
            <span className='link-primary' onClick={toggleEditMode}><BsFillPencilFill/>{' '}Edit Profile</span>
          </>
        ) : (
          <>
            <EditProfileForm toggleEditMode={toggleEditMode}/>
            <span className='link-primary' onClick={toggleEditMode}><GrView/>{' '}View Profile</span>
          </>
        )}
        <div>{editMode}</div>
      </Container>
    </>
  )
}

export default Account;