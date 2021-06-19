import PossibleAnswer from "./PossibleAnswer"

const Question = (props) => {
    return (
    <div>
        <div className="question">
            <h3 id="question-title">{props.title}</h3>
            { /* answers */ }
            <PossibleAnswer value={props.options[0]} />
            <PossibleAnswer value={props.options[1]} />
            <PossibleAnswer value={props.options[2]} />
            <PossibleAnswer value={props.options[3]} />

            <button type="button" className="btn btn-secondary btn-sm submit-answer">Submit Answer</button>
        </div>
    </div>
    )
};

export default Question;