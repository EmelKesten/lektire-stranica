import React, { useState, useEffect } from "react";
import "./Quiz.css";
import { questions } from "./questions"; // Assuming questions is exported as an array from './questions'

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState(null);

  const handleAnswer = (correct, answer) => {
    console.log(correct, answer);
    if (correct) {
      setCorrectAnswers(correctAnswers + 1);
      setIsAnsweredCorrectly(true);
    } else {
      console.log("hello");
      setIncorrectAnswers(incorrectAnswers + 1);
      setIsAnsweredCorrectly(false);
    }
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);
      setIsAnsweredCorrectly(null);
    }, 3000);
  };

  useEffect(() => {
    setIsAnsweredCorrectly(null);
  }, [currentQuestion]);
  const handleFinish = () => {
    setCurrentQuestion(questions.length);
  };

  return currentQuestion < questions.length ? (
    <div className="quiz-container">
      <div className="quiz">
        <div className="question-section">
          <div className="question-count">
            <span>Pitanje: {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {questions[currentQuestion].question}
          </div>
        </div>
        <div className="answer-section">
          {questions[currentQuestion].answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(answer.correct, answer)}
              style={{
                border: "5px solid",
                borderColor:
                  isAnsweredCorrectly !== null
                    ? answer.correct
                      ? "green"
                      : "red"
                    : "inherit",
              }}
              disabled={isAnsweredCorrectly !== null} // Disable the button after answering
            >
              {answer.text}
            </button>
          ))}
        </div>
        <button onClick={handleFinish} className="quiz-finish-button" >Završi kviz</button>
      </div>
    </div>
  ) : (
    <div className="quiz-container">
      <div className="result-section-container">
        <div className="result-section">
          <div>Tačnih odgovora: {correctAnswers}</div>
          <div>Netačnih odgovora {incorrectAnswers}</div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
