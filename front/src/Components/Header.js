import React from 'react'
import { Link } from 'react-router-dom'
import '../Scss/Header.scss';

function Header() {
  return (
    <div>
        <div className="menu-bar">
            <Link to='/'><p className='title'>Dizzy Digi</p></Link>
            <Link to="/explain"><p></p></Link>
            <Link to="/rank"><p>랭킹 목록</p></Link>
        </div>
            
    </div>
     
  )
}

export default Header
