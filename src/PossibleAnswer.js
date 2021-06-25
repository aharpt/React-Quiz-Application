import React from 'react'
let i = 0;

const changeDisabled = () => {
    console.log("changeDisabled function called");
    document.querySelector(".next").removeAttribute("disabled"); 
};

const PossibleAnswer = (props) => {
    
    i++;
    return (
        <div className="form-check">
            <input onClick={changeDisabled} className="form-check-input" type="radio" name="exampleRadios" id={i} value="" />
            <label className="form-check-label" htmlFor={i}>{props.value}</label>
        </div>
    )
};

export default PossibleAnswer;