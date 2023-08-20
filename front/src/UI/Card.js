import React from 'react';

function Card({ children }) {
  const style = {
    borderRadius: '10px',
    height: '500px',
    padding: '2rem 2rem',
    border: '0.0625rem solid #f2f2f2',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 1)',
  };

  return <div style={style}>{children}</div>;
}

export default Card;