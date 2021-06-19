import React from 'react'
import ReactDOM from 'react-dom'
import Question from './Question'
import Heading from './Heading'
import Scoring from './Scoring'

const Quiz = () => {
    return (
        <div className="container">
            <Question title="What is my First Name?" options={["Jared", "Aaron", "Brett", "Rachel"]} />
            <Question title="What is my Last Name?" options={["Harpt", "Higley", "Grenier", "Morrison"]} />
            <Question title="How Tall am I?" options={["5' 6''", "5' 7''", "5' 8''", "5' 9''"]} />
            <Question title="What is my Age?" options={["19", "20", "21", "22"]} />
            <Question title="Where Do I Live?" options={["Missouri", "Kansas", "Michigan", "Florida"]} />


            <Scoring numberCorrect="0" />
        </div>
    )
};

ReactDOM.render (
    <Heading />, document.getElementById('heading')
);

ReactDOM.render (
    <Quiz />, document.getElementById('root')
);