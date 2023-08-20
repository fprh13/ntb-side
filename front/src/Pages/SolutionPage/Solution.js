import React from 'react';
import './Solution.scss';
import questions from '../../Components/Questions';

function Solution() {
  return (
    <div>
      {questions.map((questionData, index) => (
        <div key={index} className="question-card">
          <div className='question-card-header'>
            <p><span>Q{index + 1}.</span> {questionData.question}</p>
          </div>
          <div className='question-card-body'>
            <p><span>답:</span> {questionData.answer}</p>
            <p><span>해설:</span>{questionData.Commentary}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Solution;