import React from 'react';
import Card from 'react-bootstrap/Card';
import Urbanthumbfinallogo from '../../assets/Urbanthumbfinallogo.png';
import './style.css';



class HomeCard extends React.Component {

    render() {

        return(
            <div>
             <Card className='homeCard'> 
                 <div>
                 <img src={Urbanthumbfinallogo} alt="Logo" className='homeCardLogo'/>
                 </div>
                 
                 <h1 className='homeCardTitle'>UrbanThumb</h1>

                 <div className='container'>
                     <p>Instantly identify plants. Accurate, fast and content rich! In addition to description and plant care tips, enjoy beautiful plant pictures around the world at your urban setting. UrbanThumb helps users identify, learn, and enjoy all kinds of plants. UrbanThumb is capable of identifying 500+ plant species with accuracy of 98%. Enjoy!</p>
                 </div>
                

             </Card>    
             </div>
        )
    }
}

export default HomeCard;