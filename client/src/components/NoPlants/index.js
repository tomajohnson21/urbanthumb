import React from 'react';

function ResultFail(){

    return(
        <div className='jumbotron'>
            <h2>
                You don't have any plants saved in our database. You can <a href="/search">search</a> for a plant 
                or manually <a href="/enter">enter</a> information about a plant
            </h2>
        </div>
    )
}

export default ResultFail;