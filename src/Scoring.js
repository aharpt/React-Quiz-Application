const Scoring = (props) => {
    return (
        <div className="row">
            <p>Your score is <span>{props.numberCorrect}</span>/5</p>
        </div>
    )
};

export default Scoring;