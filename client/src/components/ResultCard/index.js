import React from 'react';
import './style.css'

function ResultCard(props) {
    return(
        <div className="card">
            <h3>{props.commonName}</h3>
            <h5><i>{props.scientificName}</i></h5>
        </div>
    )
}

export default ResultCard;