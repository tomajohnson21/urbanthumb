import React from 'react';

function Search(props) {

    return(
        <div className="md-form mt-0">
            <input className="form-control" name="search" value={props.search} onChange={props.updateSearchTerm} type="text" placeholder="Search" aria-label="Search" />
            <button onClick={props.fetchData}>Submit</button>
        </div>
    )
}

export default  Search;