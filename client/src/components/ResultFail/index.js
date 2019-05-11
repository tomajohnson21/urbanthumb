import React from 'react';

function ResultFail(props){

    return(
        <div className='jumbotron'>
            <h2>Sorry, we couldn't find anything for '{props.search}' in our database :(</h2>
        </div>
    )
}

export default ResultFail;