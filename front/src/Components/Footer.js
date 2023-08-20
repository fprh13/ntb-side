import React from 'react';
import '../Scss/Footer.scss';

const Footer = () => {
    const thisYear = () => {
        const year = new Date().getFullYear();
        return year
    };

    return (
        <div className='footer-total-wrapper'>
            
            <div className='footer-wrapper'>
                <img className="footer-logo-image" alt="logo"src="/img/mainlogo.png" />
                <div className='footer-content'>
                    <div className='footer-high-content'><p>멋쟁이 사자처럼 중부대학교 Nice Team Bro 팀 NTB</p></div>
                    <div className='footer-middle-content'>
                        <p>팀명: NTB | 광고문의: 010-1234-5678 | Email: pycandyq@naver.com</p>
                    </div>
                    <div className='footer-low-content'><p>주소: 28912 경기도 고양시 덕양구 대자동 중부대학교 </p></div>
                    <p>Copyright &copy; <span>{thisYear()}</span></p>
                </div>
            </div>
        </div>
    )
};

export default Footer;