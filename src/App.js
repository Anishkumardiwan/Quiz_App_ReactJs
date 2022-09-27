import { useState } from "react";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const questions = [
  {
    questionText: "What language is spoken in Brazil?",
    answerOptions: [
      { answerText: "Portugues", isCorrect: true },
      { answerText: "English", isCorrect: false },
      { answerText: "French", isCorrect: false },
      { answerText: "German", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which countries have the highest and lowest life expectancy in the world?",
    answerOptions: [
      { answerText: "Japan and sierra", isCorrect: true },
      { answerText: "Australia and Afghanistan", isCorrect: false },
      { answerText: "Italy", isCorrect: false },
      { answerText: "Brasil", isCorrect: false },
    ],
  },
  {
    questionText: "Which company created the iPhone?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "How to learn to program?",
    answerOptions: [
      { answerText: "Practising what you lern", isCorrect: true },
      { answerText: "Watching vídeo", isCorrect: false },
      { answerText: "Reading", isCorrect: false },
      { answerText: "Writing", isCorrect: false },
    ],
  },
];

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [Point, setPoint] = useState(0);
  const [wrongProgress, setWrongProgress] = useState(0);
  const [rightProgress, setRightProgress] = useState(0);

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      // If Answer is Correct then set the Score , Point and RightProgress Bar Data
      setScore(score + 1);
      setPoint(Point + 5);
      setRightProgress(rightProgress + 25);
    } else {

      // If Answer is Wrong Then 
      setPoint(Point - 4);
      setWrongProgress(wrongProgress + 25);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="app">
      <div className="marking_center">
        <h6 className="fw-bold">Points: {Point}</h6>
      </div>

      <div className="row">
        <div className="col">
          <h6 className="fw-bold">Right Answer</h6>
          <div className="progress">
            <div className="progress-bar bg-success" style={{ width: `${rightProgress}%` }} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className="col">
          <h6 className="fw-bold">Wrong Answer</h6>
          <div className="progress">
            <div className="progress-bar bg-danger" style={{ width: `${wrongProgress}%` }} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>

      {showScore ? (
        <div className="score-section">
          You Scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">

            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  onClick={() => handleAnswer(answerOption.isCorrect)}
                  key={index}
                  className="answer_button"
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>

          <div className="note_section">
            <h6>Note: Right ans is 5 points and Wrong ans leads to -4 points</h6>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
