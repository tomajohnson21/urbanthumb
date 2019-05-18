import React from 'react';
import Background from '../../static/BGUrbanThumb.jpg';
import styled from 'styled-components';
import './style.css';


function ResultFail() {

    const NewWrapper = styled.div`
    background-image: url(${Background});

    background-size: 100%;

    text-align: center;
 
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    `

    return (

        <NewWrapper className='noResultBgd'>
        <div className='noPlantCard'>
            <h2>
                You don't have any plants saved in our database. You can <a href="/newplant">search</a> for a plant
                or manually <a href="/newplant">enter</a> information about a plant
            </h2>
        </div>
        </NewWrapper>
    )
}

export default ResultFail;