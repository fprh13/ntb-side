import React, { useState } from 'react'
import Card from '../../UI/Card'
import './Result.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../../UI/Button';

function Result() {
    const location = useLocation();
    const score = location.state.score;
    const [ nickname, setNickname] = useState('');
    const navigate = useNavigate();

    const onNicknameHandler = (e) => {
        setNickname(e.currentTarget.value);
        
    }

    const onToGoRankHandler = () => {
        navigate('/rank');
    }

    const onToGoHomeHandler = () => {
        navigate('/');
    }

    const onToGoSolutionHandler = () => {
        navigate('/solution');
    }

    
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        

        if (!nickname) {
            alert('닉네임을 입력해주세요.');
            return; // 닉네임이 없으면 여기서 중단
        }
        const userData = {
            username: nickname,
            score: score
        };

        

        try {
            const response = await axios.post('http://118.67.128.212:3000/user/result', userData, {
                headers: {
                    'Content-Type': 'application/json'    
                }
            });

            if (response.status === 200) {
                const resultData = response.data;
                
                // 결과 데이터를 localStorage에 저장
                localStorage.setItem('resultData', JSON.stringify(resultData));

                // Rank 페이지로 이동
                navigate('/rank');
                
            } else {
                console.error('Failed to insert data:' );
                
            }
        } catch (error) {
            console.error('Error:', error);
            
        }
    }
    
    
    return (
        <div>
            <Card>
                <div className='result-card-header'>
                    <p className='result'>결 과</p>
                </div>
                <div className='result-card-body'>
                    {score >= 80 && <p>당신은~~ <span>디지털 고수!!!</span></p>}
                    {score >= 60 && score < 80 && <p>당신은~~ <span>디지털 중수!!!</span></p>}
                    {score >= 40 && score < 60 && <p>당신은~~ <span>디지털 하수!!!</span></p>}
                    {score <= 39 && <p>당신은~~ <span>디린이♥</span></p>}
                    <p>점수: <span>{score}</span> / 100</p>
                </div>
                <div className='result-card-footer'>
                    <p>※순위를 등록 하지 않으면 랭킹이 나타나지 않습니다.</p>
                    <form onSubmit={onSubmitHandler} >
                        <input
                        type='text'
                        placeholder='닉네임을 적어주세요'
                        value={nickname}
                        onChange={onNicknameHandler}
                        >
                        </input>
                        <button type='submit'>순위 등록</button>
                    </form>
                    <Button onClick={onToGoRankHandler}>랭킹 확인</Button>
                    <Button onClick={onToGoHomeHandler}>홈으로</Button>
                    <Button onClick={onToGoSolutionHandler}>해설 보기</Button>
                </div>
            </Card>
        </div>
    )
}

export default Result
