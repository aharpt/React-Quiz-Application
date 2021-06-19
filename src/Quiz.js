import React from 'react'
import ReactDOM from 'react-dom'
import Question from './Question'
import Heading from './Heading'

const Quiz = () => {
    return (
        <div className="container">
            <Question title="What is my First Name" />
        </div>
    )
};

ReactDOM.render (
    <Heading />, document.getElementById('heading')
);

ReactDOM.render (
    <Quiz />, document.getElementById('root')
);