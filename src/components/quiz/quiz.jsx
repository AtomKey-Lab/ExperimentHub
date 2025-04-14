import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './quiz.css';

// Import your questions
import {
  gravitationalQuestions,
  chemistryQuestions,
  acidBaseQuestions,
  balloonStaticElectricityQuestions,
  molarityQuestions,
  waveStringQuestions,
  densityQuestions,
  energyChangeFormsQuestions,
  concentrationQuestions,
  phQuestions,
  electrolysisQuestions
} from "../../config/quizData";

// Map paths to question sets
const quizMap = {
  gravitation: gravitationalQuestions,
  chemistry: chemistryQuestions,
  acidbase: acidBaseQuestions,
  balloonelectricity: balloonStaticElectricityQuestions,
  molarity: molarityQuestions,
  wavestring: waveStringQuestions,
  density: densityQuestions,
  energyform: energyChangeFormsQuestions,
  concentration: concentrationQuestions,
  ph: phQuestions,
  electrolysis: electrolysisQuestions,
};

const Quiz = () => {
  const location = useLocation();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  
  useEffect(() => {
    const path = location.pathname.toLowerCase();
    const topicKey = Object.keys(quizMap).find(key => path.includes(key));

    if (topicKey) {
      setQuestions(quizMap[topicKey]);
    } else {
      setQuestions([]);  // Fallback in case the route does not match any quiz topic
    }
  }, [location]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : questions.length === 0 ? (
        <div className="score-section">
          No questions found for this topic.
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion]?.questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion]?.answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
