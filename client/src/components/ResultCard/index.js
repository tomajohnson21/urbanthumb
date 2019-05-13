import React from 'react';
import './style.css'

function ResultCard(props) {
    const buttonClass = props.completeData ? "btn" : "btn disabled";

        return(
            <div className="card">
                <h3>{props.commonName}</h3>
                <h5><i>{props.scientificName}</i></h5>
                <button className={buttonClass} onClick={() => props.handlePlantClick(props.commonName)}>Save</button>
            </div>
        )
}

export default ResultCard;