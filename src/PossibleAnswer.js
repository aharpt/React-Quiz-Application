import React from 'react'

const PossibleAnswer = (props) => {
    return (
        <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
            <label className="form-check-label" htmlFor="exampleRadios1">{props.value}</label>
        </div>
    )
};

export default PossibleAnswer;