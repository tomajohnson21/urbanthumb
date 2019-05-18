import React from 'react';

function PlantForm(props) {

    return(
        <div className="md-form mt-0">
            <input className="form-control" name="common_name" value={props.common_name} onChange={props.handleChange} type="text" placeholder="Common Name (Required)" aria-label="Common Name" />
            
            <input className="form-control" name="scientific_name" value={props.scientific_name} onChange={props.handleChange} type="text" placeholder="Search" aria-label="Search" />
            
            <br />
            <label>Is this plant tolerant or intolerant to shade?
                <select className="select-wheel" name="shade_tolerance" value={props.shade_tolerance} onChange={props.handleChange}>
                    <option value="tolerant">Tolerant</option>
                    <option value="intolerant">Intolerant</option>
                </select>
            </label>

            <br />
            <label>What amount of water does this plant need?
                <select className="select-wheel" name="water" value={props.water} onChange={props.handleChange}>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </label>

            <br />
            <label>Is this plant toxic?
                <form name="toxicity" value={props.toxicity} onChange={props.handleChange}>
                    <label>
                        Yes
                        <input id="radio-yes" type="radio" name ="toxicity" value="yes" />
                    </label>
                    <label>
                        No
                        <input id="radio-no" type="radio" name="toxicity" value="no" />  
                    </label>
                </form> 
            </label>
            
            <button onClick={props.submitPlant}>Submit</button>
        </div>
    )
}

export default PlantForm;