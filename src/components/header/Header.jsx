import React, { useEffect, useState } from 'react';
import FiapLogo from '../../assets/svgs/logo-fiap.svg';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = `${(scrollPosition / windowHeight) * 100}%`;
      setScrollPosition(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const borderStyle = {
    width: scrollPosition,
  };

  return (
    <header className="header-container">
      <div className="header-wrapper">
        <img src={FiapLogo} alt="Logo FIAP" />
      </div>
      <div className="border" style={borderStyle}></div>
    </header>
  );
};

export default Header;
