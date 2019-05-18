import React from 'react';

function ResultFail(){

    return(
        <div className='jumbotron'>
            <h2>
                You don't have any plants saved in our database. You can <a href="/newplant">search</a> for a plant 
                or manually <a href="/newplant">enter</a> information about a plant
            </h2>
        </div>
    )
}

export default ResultFail;