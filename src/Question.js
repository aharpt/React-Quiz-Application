import PossibleAnswer from "./PossibleAnswer"

const Question = (props) => {
    return (
    <div>
        <h3 id="question-title">{props.title}</h3>
        { /* answers */ }
        <PossibleAnswer value="Jared" />
        <PossibleAnswer value="Aaron" />
        <PossibleAnswer value="Brett" />
        <PossibleAnswer value="Rachel" />

        <button type="button" className="btn btn-primary submit-answer">Submit Answer</button>
    </div>
    )
};

export default Question;