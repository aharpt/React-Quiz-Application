import PossibleAnswer from "./PossibleAnswer"
let i = 0;

const nextQuestion = () => {
    if (document.getElementById("btn-1").style.display !== "none") {
        document.getElementById("question-1").style.display = "none";
        document.getElementById("question-2").style.display = "inline-block";
        document.getElementById("btn-1").style.display = "none";
        console.log("btn-1 display is not none");
    } else if (document.getElementById("btn-2").style.display !== "none") {
        document.getElementById("question-2").style.display = "none";
        document.getElementById("question-3").style.display = "inline-block";
        document.getElementById("btn-2").style.display = "none";
        console.log("btn-2 display is not none");
    } else if (document.getElementById("btn-3").style.display !== "none") {
      document.getElementById("question-3").style.display = "none";
      document.getElementById("question-4").style.display = "inline-block";
      document.getElementById("btn-3").style.display = "none";
    } else if (document.getElementById("btn-4").style.display !== "none") {
      document.getElementById("question-4").style.display = "none";
      document.getElementById("question-5").style.display = "inline-block";
      document.getElementById("btn-4").style.display = "none";

      // since we want the next button to never be shown
      document.getElementById("btn-5").style.display = "none";

      // show submit button
      document.getElementById("question-5").innerHTML += '<button type="button" class="btn btn-secondary submit">Submit Quiz</button>';
    }
};

const Question = (props) => {
    i++;
    return (
    <div className="question-container">
        <div id={"question-" + i} className="question">
            <h3 id="question-title">{props.title}</h3>
            { /* answers */ }
            <PossibleAnswer value={props.options[0]} />
            <PossibleAnswer value={props.options[1]} />
            <PossibleAnswer value={props.options[2]} />
            <PossibleAnswer value={props.options[3]} />
            <button id={"btn-" + i} onClick={nextQuestion} type="button" className="btn btn-secondary next">Next&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-forward-fill" viewBox="0 0 16 16">
                    <path d="m9.77 12.11 4.012-2.953a.647.647 0 0 0 0-1.114L9.771 5.09a.644.644 0 0 0-.971.557V6.65H2v3.9h6.8v1.003c0 .505.545.808.97.557z"/>
                </svg>
            </button>
        </div>
    </div>
    )
};

export default Question;
