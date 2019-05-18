import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../MyPlantsCard/style.css';


function MyPlantsCard(props) {


    if(props.imageUrl){
    return (
        <CardGroup className='cardGroup'>
            <Card>
                <Card.Body className='leftCardBody'>
                    <Card.Title>
                        <h1 className='cardTitle'>{props.commonName}</h1>
                        <h4><i>{props.scientificName}</i></h4>
                    </Card.Title>
                    <Card.Text className='cardTxt'>
                        {props.description}
                    </Card.Text>
                </Card.Body>
            </Card>


            <Card>
                <Card.Body className='rightCardBody'>
                    <Card.Img className='cardImage' src={props.imageUrl} />
                </Card.Body>
            </Card>
        </CardGroup>
    )
    } else {
        return (
            <CardGroup className='cardGroup'>
            <Card>
                <Card.Body className='leftCardBody'>
                    <Card.Title>
                        <h1 className='cardTitle'>{props.commonName}</h1>
                        <h4><i>{props.scientificName}</i></h4>
                    </Card.Title>
                    <Card.Text className='cardTxt'>
                        {props.description}
                    </Card.Text>
                </Card.Body>
            </Card>


            <Card>
                <Card.Body className='rightCardBody'>
                    <input type='file' name='image' onChange={(event) =>props.imageUpload(props.id, event)}/>
                </Card.Body>
            </Card>
        </CardGroup>
        )
    }
}


export default MyPlantsCard;