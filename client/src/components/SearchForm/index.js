import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SearchForm(props) {

    return(
        <Card className='searchArea'>
        <div className="md-form mt-0 searchArea">
            <input className="form-control" name="search" value={props.search} onChange={props.updateSearchTerm} type="text" placeholder="Search" aria-label="Search" />
            <Button className='searchButton' onClick={props.fetchData}>Submit</Button>
        </div>
        </Card>
    )
}

export default SearchForm;