import React from 'react';
import Button from 'react-bootstrap/Button';

function SearchForm(props) {

    return(
        <div className="md-form mt-0">
            <input className="form-control" name="search" value={props.search} onChange={props.updateSearchTerm} type="text" placeholder="Search" aria-label="Search" />
            <Button onClick={props.fetchData}>Submit</Button>
        </div>
    )
}

export default SearchForm;