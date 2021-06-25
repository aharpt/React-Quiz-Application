import React from 'react'
let i = 0;

const changeDisabled = () => {
    console.log("changeDisabled function called");
    if (document.querySelector(".next").style.disabled == true) {
        console.log("Button is Disabled");
    }
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