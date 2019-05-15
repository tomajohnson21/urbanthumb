import React from 'react';
import Card from 'react-bootstrap/Card';
import '../AboutCard/style.css';
import Kevin from '../../assets/Kevin.png';
import Sheima from '../../assets/Sheima.png';
import Tom from '../../assets/Tom.png';
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
                                Full-stack Web Developer who loves working with backend technologies and 
                                developing software using Python and the MERN stack
                        </div>
                                <a href="https://www.github.com/tomajohnson21/" target="_blank" className="fa fa-github"></a>
                                <a href="https://www.linkedin.com/" target="_blank" className="fa fa-linkedin"></a>
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
                                <a href="https://www.github.com" target="_blank" className="fa fa-github"></a>
                                <a href="https://www.linkedin.com/" target="_blank" className="fa fa-linkedin"></a>
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
                                <a href="https://www.github.com" target="_blank" className="fa fa-github"></a>
                                <a href="https://www.linkedin.com/" target="_blank" className="fa fa-linkedin"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            // </div>

        )
    }
}

