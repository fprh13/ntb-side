import "./Home.scss";
import Button from "../../UI/Button";

import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();

  const navigateQuizHandler = () => {
    navigate('/quiz');
    localStorage.removeItem('resultData'); // 로컬 스토리지의 값을 제거
  }

  const navigateExplainHandler = () => {
    navigate('/explain');
  }
  return (
    <div>

      <div className="home-main-wrapper">
        <div className="home-main-wrapper-introduce">
          <div className='home-main-wrapper-header'>
            <p className='title'>퀴즈 도전!!</p>
            <p className='title'>디지털 세계의 길목에서 O , X 문제로 알아가보세요</p>
            <p className="side-title">'디지털 격차' 관련 25문제가 기다리고 있습니다.</p>
          </div>
          <div className='home-main-wrapper-body'>
              <Button onClick={navigateQuizHandler}>퀴즈 시작</Button>
              <Button onClick={navigateExplainHandler}>웹 개요</Button>
          </div>
        </div>
        <div className="home-main-wrapper-sidebar">
            <p className="sidebar-korean">광고</p>
            <p className="sidebar-english">Advertising</p>
        </div>
        
      </div>
      
     
      
       
      
    </div>
  )
}

export default Home
