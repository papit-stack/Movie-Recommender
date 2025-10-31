import React, { useState } from 'react';
import './Quiz.css';
import happyImg from '../../assets/happy.png';
import neutralImg from '../../assets/neutral.png';
import sadImg from '../../assets/sad.png';
import Result from '../Result/Result';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
   const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (optionText) => {
    const isGenreQuestion = currentQuestionIndex === 2;
    if(isGenreQuestion){
      const currentGenre=answers[currentQuestionIndex]||[];
      const updatedGenre=currentGenre.includes(optionText)?currentGenre.filter((g)=>g!==optionText):[...currentGenre,optionText];
    
      setAnswers({
        ...answers,
        [currentQuestionIndex]: updatedGenre,
      });
    }else{
        setAnswers({
        ...answers,
        [currentQuestionIndex]: optionText,
      });
    } 
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleShowResult = () => {
    setShowResult(true);
    alert(`You selected:\n${Object.values(answers).join(', ')}`);
  };
    if (showResult) {
    return <Result answers={answers} />;
   }

  const questions = [
    {
      id: 1,
      question: 'How are you today?',
      option: [
        { text: 'Happy', image: happyImg },
        { text: 'Neutral', image: neutralImg },
        { text: 'Sad', image: sadImg },
      ],
    },
    {
      id: 2,
      question: 'What comes closest to your occasion?',
      option: [
        { text: 'Just watching a movie by myself' },
        { text: 'Movie Date' },
        { text: 'Watching with friends' },
      ],
    },
    {
      id: 3,
      question: 'Choose any genre you are interested in:',
      option: [
        { text: 'Action' },
        { text: 'Comedy' },
        { text: 'Romance' },
        { text: 'Thriller' },
        { text: 'Horror' },
        { text: 'Sci-Fi' },
      ],
    },
    {
      id: 4,
      question: 'How old would you like the movie to be?',
      option: [
        { text: 'Doesn’t matter' },
        { text: 'Published in the last 5 years' },
        { text: 'Published in the last 10 years' },
        { text: 'Published in the last 15 years' },
      ],
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h2 className="quiz_question">{currentQuestion.question}</h2>

      <div className="quiz_options">
        {currentQuestion.option.map((opt, index) => {
          const isSelected = Array.isArray(answers[currentQuestionIndex])
        ? answers[currentQuestionIndex].includes(opt.text)
        : answers[currentQuestionIndex] === opt.text;

          return (
            <button
              key={index}
              className={`quiz_option ${isSelected ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(opt.text)}
            >
              {opt.image && <img src={opt.image} alt={opt.text} className="option_image" />}
              <span>{opt.text}</span>
            </button>
          );
        })}
      </div>

      <div className="quiz-pagination">
        <button
          className="nav-btn"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          ⬅ Prev
        </button>

        {currentQuestionIndex === questions.length - 1 ? (
          <button className="nav-btn show-result" onClick={handleShowResult}>
            Show Result
          </button>
        ) : (
          <button className="nav-btn" onClick={handleNext}>
            Next ➡
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
