import React from 'react';
import './style.css';
import Button from 'react-bootstrap/Button';


function PlantForm(props) {

    return(

        <div className='container formContainer'>

        <h2 className='plantFormHeader'>Can't find the plant you're looking for? Create a custom plant here!</h2>
        <div className="md-form mt-0">
            <input className="form-control" name="common_name" value={props.common_name} onChange={props.handleChange} type="text" placeholder="Common Name (Required)" aria-label="Common Name" />
            
            <input className="form-control" name="scientific_name" value={props.scientific_name} onChange={props.handleChange} type="text" placeholder="Scientific Name" aria-label="Scientific Name" />


            <input className="form-control" name="growth_period" value={props.growth_period} onChange={props.handleChange} type="text" placeholder="Growth Period" aria-label="Growth Period" />
            
            <br />
            <label>Is this plant tolerant or intolerant to shade?
            <form name="shade_tolerance" value={props.shade_tolerance} onChange={props.handleChange}>
                    <label className='searchLabel'>
                          Tolerant
                        <input className='bubble' type="radio" name ="shade_tolerance" value="Tolerant" />
                    </label>
                    <label className='searchLabel'>
                        Intolerant
                        <input className='bubble' type="radio" name="shade_tolerance" value="Intolerant" />  
                    </label>
                </form> 
            </label>

            <br />
            <label>What amount of water does this plant need?
                    <form name="water" value={props.water} onChange={props.handleChange}>
                    <label className='searchLabel'>
                        High
                        <input className='bubble' type="radio" name ="water" value="High" />
                    </label>
                    <label className='searchLabel'>
                        Medium
                        <input className='bubble' type="radio" name="water" value="Medium" />  
                    </label>
                    <label className='searchLabel'>
                        Low
                        <input className='bubble' type="radio" name="water" value="Low" />  
                    </label>
                </form>
            </label>

            <br />
            <label>Is this plant toxic?
                <form name="toxicity" value={props.toxicity} onChange={props.handleChange}>
                    <label className='searchLabel'>
                        Yes
                        <input className='bubble' id="radio-yes" type="radio" name ="toxicity" value="yes" />
                    </label>
                    <label className='searchLabel'>
                        No
                        <input className='bubble' id="radio-no" type="radio" name="toxicity" value="no" />  
                    </label>
                </form> 
            </label>
            
            <Button className='customPlantButton' onClick={props.submitPlant}>Submit</Button>
        </div>
        </div>
    )
}

export default PlantForm;