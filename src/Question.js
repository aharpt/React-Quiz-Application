import PossibleAnswer from "./PossibleAnswer"
let i = 0;

const Question = (props) => {

    i++;
    return (
    <div className="question-container">
        <div className="question">
            <h3 id="question-title">{props.title}</h3>
            { /* answers */ }
            <PossibleAnswer value={props.options[0]} />
            <PossibleAnswer value={props.options[1]} />
            <PossibleAnswer value={props.options[2]} />
            <PossibleAnswer value={props.options[3]} />

            <button id={"button-" + i} type="button" className="btn btn-secondary btn-sm submit-answer">Submit Answer</button>
        </div>
    </div>
    )
};

export default Question;