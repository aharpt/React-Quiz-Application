import React from 'react'
let i = 0;


const PossibleAnswer = (props) => {
    
    i++;
    return (
        <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id={i} value="" />
            <label className="form-check-label" htmlFor={i}>{props.value}</label>
        </div>
    )
};

export default PossibleAnswer;