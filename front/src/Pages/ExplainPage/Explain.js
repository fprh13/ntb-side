import React from 'react';
import './Explain.scss';

function Explain() {
  return (
    <div className="web-introduce-frame">
      <h1 className="service-introduce-title">DIZZY DIGI</h1>
      <div className="introduce-box">
        <div className="grid-container">
          <div className="grid-item">
            <h2 className="grid-item-title">LOGO</h2>
            <img className='logo-img' src="/img/mainlogo.png" alt="Logo" />
            <p>
               "Dizzy Digi"은 디지털 세상이 확장되면서 어지러움을 느끼는 사람들에
              대한 표현입니다. 
            </p>
          </div>
          <div className="grid-item">
            <h2 className="grid-item-title"> Service</h2>
            <p>
               "Dizzy Digi"은 디지털 시대에 대한 열린 마음과 동시에 혼란스러움을
              표현하며, 디지털 기술의 보급과 활용이 빠르게 이루어질 때 발생하는
              어려움과 불편함을 담고 있습니다. 이에 따라 디지털 시대로의 전환에
              어려움을 겪는 사람들이 느끼는 "어지러움(Dizzy)" 이라는 개념과
              디지털 격차의 문제를 연결해서 생각해볼 수 있습니다. 이 사이트는
              디지털 격차의 중요성을 인식하고, 이를 해소하기 위한 노력을
              지원하는 목적으로 개발되었습니다.
           </p>
          </div>
          <div className="grid-item">
            <h2 className="grid-item-title">Purpose </h2>
            <p>
               다양한 사람들 사이의 디지털 격차를 완화하고, 디지털 기술에 대한
              평등한 접근을 촉진하기 위해 다음과 같은 정보와 기능을 제공합니다:
              퀴즈 및 상호 작용: 다양한 퀴즈와 상호 작용을 통해 사용자들의
              디지털 기술에 대한 이해도를 향상시키고, 디지털 격차 관련주제에
              대한 흥미를 유발합니다. 지속적인 업데이트: Dizzy Digi는 지속적으로
              새로운 정보와 리소스를 업데이트하여 디지털 격차를 해소하기 위한
              최신 정보를 제공합니다.
            </p>
          </div>
          <div className="grid-item">
            <h2 className="grid-item-title">Contributor </h2>
              <h3>팀이름:NiceTeamBro(NTB)</h3>
              <p>팀장:유현상 (FrontEnd)</p>
              <p>팀원:성연준 (Backend) </p>
              <p>팀원:조영무 (Backend) </p>
              <p>팀원:이두리 (FrontEnd)</p>
              <p>팀원:박주형 (Backend)</p>
              <p>팀원:변정현 (Backend)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explain;
