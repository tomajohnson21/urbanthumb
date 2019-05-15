import React from 'react';
import Card from 'react-bootstrap/Card';
import '../MyPlantsCard/style.css';
import rosetest from '../Carousel/images/rosetest.jpg';


function MyPlantsCard(props) {

    return (

        <div className='container plantsCardContainer'>
        <br></br>
        <Card className='plantsCard'>
            <div className='row this'>
                <div className='col card'>
                    <div>
                        <img className='myPlantsImg' variant="top" src={rosetest} alt="Rose" />
                        <div>
                            <div className='cardTitle'>{props.commonName}</div>
                            <h3><i>{props.scientificName}</i></h3>
                            <div className="description container">
                                {props.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Card>
        <br></br>
        </div>
    )

}

export default MyPlantsCard;