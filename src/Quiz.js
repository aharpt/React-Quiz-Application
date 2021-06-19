import React from 'react'
import ReactDOM from 'react-dom'

const Quiz = () => {
    return React.createElement("h1", {}, "Quiz Application")
};

ReactDOM.render (
    React.createElement(Quiz, {}, null), document.getElementById('root')
);