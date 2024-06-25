import React from 'react';

const Marquee = ({ text = 'Texto Exemplo', direction = 'rtl', mode = 1 }) => {
  const Style = {
    borderBottom: '1px solid var(--color-white)',
    ...(mode === 2 && {
      borderBottom: '0px',
    }),
  };

  const h1Style = {
    animation: `move-${direction} 8000ms linear infinite`,
    ...(mode === 2 && {
      borderBottom: '0px',
      color: 'transparent',
      WebkitTextStrokeWidth: '1px',
      WebkitTextStrokeColor: '#fff',
    }),
  };

  return (
    <div className="marquee-container" style={Style}>
      <h1 style={h1Style}>{text}</h1>
      <h1 style={h1Style}>{text}</h1>
    </div>
  );
};

export default Marquee;
