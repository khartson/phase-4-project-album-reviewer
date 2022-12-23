import React from 'react';
import AsyncSelect from 'react-select/async';
import debounce from 'lodash.debounce';
import { useNavigate } from 'react-router-dom';
import { Row } from 'react-bootstrap';

function Searchbar({ category }) {

  const field = (category === 'artists') ? 'name' : 'title';
  const navigate = useNavigate();

  const _loadSuggestions = (query, callback) => {
    fetch(`/${category}/?search=${query}`).then((r)=>{
      r.json().then((r)=>callback(r.data.map((r)=>{ return { value: r.id, label: r[field]}})));
    })
  }

  const loadSuggestions = debounce(_loadSuggestions, 500);

  function handleChange(e) {
    navigate(`/${category}/${e.value}`);
  }
  return(
    <Row md={2} style={{ marginBottom: '10px' }} className='justify-content-center'>
      <AsyncSelect
      placeholder={`Search for ${category}...`}
      onChange={handleChange}
      loadOptions={loadSuggestions}/>
    </Row>
  )
}

export default Searchbar; 