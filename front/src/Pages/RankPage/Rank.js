import React, { useState, useEffect } from 'react';
import './Rank.scss';
import axios from 'axios';

function Rank() {
    

    const [posts, setPosts] = useState([]);
    const [getData, setGetData] = useState([]);

    useEffect(() => {
        // GET 요청을 통해 user_entity 테이블의 데이터를 가져오는 함수
        const getUserData = async () => {
            try {
                const response = await axios.get('http://118.67.128.212:3000/user/list'); // 여기에 실제 API 엔드포인트를 사용하세요
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    

        getUserData();
    
    }, []);

    useEffect(() => {
        // localStorage에서 결과 데이터 불러오기
        const resultData = JSON.parse(localStorage.getItem('resultData'));

        if (resultData) {
            // 불러온 결과 데이터를 posts 상태로 설정
            setGetData([
                {
                    totalRank: resultData.rankResponse,
                    percentile: resultData.percentile
                },
               
            ]);
        }
    }, []);

    return (
        <div>
            <div className='result-data-wrapper'>
                    {getData.length > 0 && (
                        <div className='result-data'>
                            <p>전체 등수: {getData[0].totalRank}</p>
                            <p>전체 상위 퍼센트: {getData[0].percentile}%</p>
                        </div>
                    )}
            </div>
            <div className='rank-wrapper'>
            <div className='rank-wrapper-header'>
                <p>순위</p>
                <p>닉네임</p>
                <p>점수</p>
            </div>
            <div className='rank-wrapper-body'>
                {posts.map((post) => (
                    <div className='rank-row' key={post.id}>
                        <span>{post.rank}</span>
                        <span>{post.username}</span>
                        <span>{post.score}</span>
                    </div>
                ))}
            </div>
        </div>
        </div>
        
    );
}

export default Rank;