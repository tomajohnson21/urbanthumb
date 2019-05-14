import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../AboutCard/style.css';
import Kevin from './Kevin.png';
import Sheima from './Sheima.png';
import Tom from './Tom.png';
// import Urbanthumbfinallogo from './Urbanthumbfinallogo.png';

export default class AboutCard extends React.Component {

    render() {
        return (
            // <div>
            // <img src={Urbanthumbfinallogo} alt='Logo' />

            <Card className='container aboutContainer'>
                <div className='row this'>
                    <div className='col card'>
                        <div>
                            <img className='aboutImg' variant="top" src={Tom} alt="Tom" />
                            <div>
                                <div className='cardTitle'>Tom</div>
                                <div>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </div>
                                <a href="#" class="fa fa-github aboutLinks"></a>
                                <a href="#" class="fa fa-linkedin aboutLinks"></a>
                            </div>
                        </div>
                    </div>
                    <div className='col card'>
                        <div>
                            <img className='aboutImg' variant="top" src={Sheima} alt="Sheima" />
                            <div>
                                <div className='cardTitle'>Sheima</div>
                                <div>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </div>
                                <a href="#" class="fa fa-github aboutLinks"></a>
                                <a href="#" class="fa fa-linkedin aboutLinks"></a>
                            </div>
                        </div>
                    </div>
                    <div className='col card'>
                        <div>
                            <img className='aboutImg' variant="top" src={Kevin} alt="Sheima" />
                            <div>
                                <div className='cardTitle'>Kevin</div>
                                <div>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                        </div>
                                <a href="#" class="fa fa-github aboutLinks"></a>
                                <a href="#" class="fa fa-linkedin aboutLinks"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            // </div>

        )
    }
}

