import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return React.createElement("h1", {}, "Quiz Application")
};

ReactDOM.render (
    React.createElement(App, {}, null), document.getElementById('root')
);