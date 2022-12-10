import React, { useState } from 'react';
import  { Form, Button, InputGroup } from 'react-bootstrap'
import { BsFillPencilFill } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';

function EditableFormField({ onSaveChange, field, value, type}) {

  const [disabled, setDisabled] = useState(true);

  function setEditable() {
    setDisabled(!disabled)
  }

  function handleInputChange(e) {
    onSaveChange(field, e.target.value);
  }

  return(
    <InputGroup className='mb-3'>
      <Button variant='outline-secondary' onClick={setEditable}>
        { disabled? (
          <BsFillPencilFill/>
        ) : (
          <AiOutlineCheck/>
        )}
      </Button>
      <Form.Control
        as={type}
        disabled={disabled}
        value={value}
        onChange={handleInputChange}>
      </Form.Control>
    </InputGroup>
  )
}

export default EditableFormField; 