import React, { useState } from 'react';
import './App.css';

const App = () => {
  const questions = [
    {
      question: 'What describes the ReactJS?',
      options: ['Server Side Framework', 'Client Side Framework', 'Both A & B', 'None of these'],
      correctAnswer: 'Client Side Framework',
    },
    {
      question: ' ReactJS written in which language?',
      options: ['Java', 'PHP', 'Javascript', 'None of these'],
      correctAnswer: 'Javascript',
    },
    {
      question: 'Which command is used to create the new react app?',
      options: ['npx create-react-app my-app', 'npx create-react-app -g my-app', 'npx create-new-react-app my-app', 'None of these'],
      correctAnswer: 'npx create-react-app my-app',
    },
    {
      question: ' Why react is mainly used for?',
      options: ['Database', 'User Interface', 'MVC', 'None of these'],
      correctAnswer: 'User Interface',
    },
    {
      question: ' JSX stands for?',
      options: ['Javscript Extension', 'Javascript XML', 'Javascript', 'None of these'],
      correctAnswer: 'Javascript XML',
    },
    {
      question: ' Why JSX used for?',
      options: ['To write HTML in React', 'To write jquery in React', 'To write SQL in React', 'None of these'],
      correctAnswer: 'To write HTML in React',
    },
    {
      question: ' What is the purpose of React state?',
      options: ['To store static data', 'To store styles', 'To store dynamic data', 'To store function'],
      correctAnswer: 'To store dynamic data',
    },
    {
      question: ' What is the use of React hooks?',
      options: ['To manage state and side effects in functional components', 'To manage styles in functional components', 'To manage state and side effects in class components', 'To manage styles in class components'],
      correctAnswer: 'To manage state in functional components',
    },
    {
      question: ' What is React component?',
      options: ['HTML document', 'A HTML element', 'A CSS stylesheet', 'A JavaScript function'],
      correctAnswer: 'A JavaScript function',
    },
    {
      question: ' What is the purpose of props in React?',
      options: ['To pass styles to the component', 'To pass data from parent to child component', 'To pass data from child to parent component', 'To pass data within the same component'],
      correctAnswer: 'To pass data from parent to child component',
    },

  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };
  const submit=(e)=>{
    e.preventDefault();

  }

  return (
    <div>
      {!showScore ? (
        <div>
          <h2 className="heading1">Quiz App</h2>
          <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
          <h3>{questions[currentQuestionIndex].question}</h3>
          <ul>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2>Quiz Result</h2>
          <p className='p1'>Your score: {score} out of {questions.length}</p>
          <button onClick={submit} className='b1'>submit</button>
          
          <button onClick={handleRestartQuiz} className='b1'>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default App;
