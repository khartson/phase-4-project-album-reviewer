import React, { useState } from 'react';
import { Card, Form, Image, Button, Spinner, Alert } from 'react-bootstrap';
import EditableFormField from '../EditableFormField';

function EditProfileForm({ user, toggleEditMode, onUpdate }) {

  const [formData, setFormData] = useState({
    name: user.profile.name,
    username: user.username,
    password: '',
    password_confirmation: '',
    bio: user.profile.bio,
    pfp_url: user.profile.pfp_url,
  });

  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  function updateSavedField(field, input) {
    setFormData({
      ...formData,
      [field]: input
    })
  }
  function handleProfileUpdateSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: formData.username,
          profile_attributes: {
            id: user.profile.id,
            name: formData.name,
            bio: formData.bio,
            pfp_url: formData.pfp_url
          }
        }
      })
    }).then((r)=> {
      setLoading(false)
      if (r.ok) {
        r.json().then((user)=>onUpdate(user))
        toggleEditMode();
      } else {
        r.json().then((err)=> setErrors(err.errors))
      }
    })
  }

  return (
    <Card border={errors.length === 0 ? 'secondary' : 'danger'}style={{width: '18rem'}}>
      <Card.Body>
        <Card.Title>Edit Your Profile Information</Card.Title>
        <Image className='mb-3' roundedCircle height={50} width={50} src={formData.pfp_url? formData.pfp_url : user.profile.pfp_url}/>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Change Profile Image URL</Form.Label>
            <EditableFormField onSaveChange={updateSavedField} field='pfp_url' value={formData.pfp_url}/>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Change Username</Form.Label>
            <p className='text-muted'>{user.username}</p>
            <EditableFormField onSaveChange={updateSavedField} field='username' value={formData.username}/>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Edit Your Name</Form.Label>
            <p className='text-muted'>{user.profile.name}</p>
            <EditableFormField onSaveChange={updateSavedField} field='name' value={formData.name}/>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Edit Bio</Form.Label>
            <EditableFormField onSaveChange={updateSavedField} field='bio' value={formData.bio} type='textarea'/>
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
              Loading...
            </Button>
          ) : (
            <Button 
              variant='primary'
              type='submit'
              className='mb-3'
              onClick={handleProfileUpdateSubmit}
            > Save Changes 
            </Button> 
          )}
          {errors.map((error)=> {
            return <Alert key={error} variant='danger'>{error}</Alert>
          })}
        </Form>
      </Card.Body>
    </Card>
  )
}

export default EditProfileForm; 

