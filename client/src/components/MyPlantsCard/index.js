import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import CardGroup from 'react-bootstrap/CardGroup';
import '../MyPlantsCard/style.css';
import rosetest from '../../assets/rosetest.jpg';


function MyPlantsCard(props) {


    return (
        <CardGroup className='cardGroup'>
            <Card>
                <Card.Body className='leftCardBody'>
                    <Card.Title>
                        <h1 className='cardTitle'>{props.commonName}</h1>
                        <h4><i>{props.latinName}</i></h4>
                    </Card.Title>
                    <Card.Text className='cardTxt'>
                        {props.description}
                    </Card.Text>
                </Card.Body>
            </Card>


            <Card>
                <Card.Body className='rightCardBody'>
                    <Card.Img className='cardImage' src={rosetest} />
                </Card.Body>
            </Card>
        </CardGroup>
    )
}


export default MyPlantsCard;