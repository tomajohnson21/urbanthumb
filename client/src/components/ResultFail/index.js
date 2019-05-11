import React from 'react';

function ResultFail(props){

    return(
        <div className='jumbotron'>
            <h2>Sorry, '{props.search}' either doesn't exist in our database, or the data is incomplete :(</h2>
        </div>
    )
}

export default ResultFail;