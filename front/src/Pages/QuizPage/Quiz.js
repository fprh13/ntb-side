import React, { useState } from 'react'
import Card from '../../UI/Card'
import "./Quiz.scss";
import { useNavigate } from 'react-router-dom';
import questions from '../../Components/Questions';

function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0); // 맞은 개수 상태 추가
    const currentQuestion = questions[currentQuestionIndex];
    const navigate = useNavigate();

    const handleAnswerClick = (selectedAnswer) => {
        setCorrectAnswers(prevCorrectAnswers => {
            if (selectedAnswer === currentQuestion.answer) {
                return prevCorrectAnswers + 1; // 맞은 개수 증가
            }
            return prevCorrectAnswers; // 정답이 아닐 경우 그대로 반환
        });
        
        // 다음 문제로 이동하거나 퀴즈 종료 처리를 해줄 수 있습니다.
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);

        } else if (currentQuestionIndex === questions.length - 1 ) {
            const score = (correctAnswers + (selectedAnswer === currentQuestion.answer ? 1 : 0)) * 4;
            navigate('/result', { state: { score } });
        }
    };

    return (
    <div>
        <Card>
            <div className='quiz-card-header'>
                <p className='question-order'>{`Q ${currentQuestionIndex + 1}`} / 25</p>
                <p className='question'>{currentQuestion.question}</p>
            </div>
            <div className='quiz-card-body'>
                <button className='o-button' onClick={() => handleAnswerClick('O')}>O</button>
                <button className='x-button' onClick={() => handleAnswerClick('X')}>X</button>
            </div>
            
        </Card>
    </div>
  )
}

export default Quiz
