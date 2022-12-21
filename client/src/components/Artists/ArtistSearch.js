import React from 'react';
import { Col } from 'react-bootstrap';
import AsyncSelect from 'react-select/async';
import debounce from 'lodash.debounce';

function ArtistSearch({ setArtist }) {

  const _loadSuggestions = (query, callback) => {
    fetch(`/artists/?search=${query}`).then((r)=>r.json().then((r)=>callback(r.data.map((r)=>{ return { value: r.name, label: r.name, data: r}}))));
  }

  const loadSuggestions = debounce(_loadSuggestions, 500);

  function handleChange(e) {
    setArtist(e.data);
  }

  return(
      <Col className='align-items-center'>
          <AsyncSelect
            onChange={handleChange}
            loadOptions={loadSuggestions}
          />
      </Col>
  )
}

export default ArtistSearch;