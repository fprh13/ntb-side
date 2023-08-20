import React, { useState } from 'react';

function Button({ children, onClick }) {
    const [isHovered, setIsHovered] = useState(false);

    const style = {
        border: 'transparent',
        width: '200px',
        height: '100px',
        color: isHovered ? 'white' : 'black',
        borderRadius: '30px',
        padding: '10px 25px',
        fontFamily: 'SBAggroB',
        fontWeight: 500,
        background: isHovered ? 'linear-gradient(to right, #f83600 0%, #f9d423 100%)' : 'white',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',  
        boxShadow: '0 0 11px 0 rgba(0, 0, 0, 0.3)',
        fontSize: '20px'
    };
    
    return (
        <div
            style={style}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </div>
    );
}

export default Button;