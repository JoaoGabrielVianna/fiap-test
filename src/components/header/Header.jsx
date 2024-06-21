import React, { useEffect, useState } from 'react'

// Svg
import FiapLogo from '../../assets/svgs/logo-fiap.svg'

import '../Styles.scss'

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const borderStyle = {
    width: scrollPosition
  }

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



  return (
    <div className='header-container'>
      <div className="header-wrapper">
        <img src={FiapLogo} alt="" />
      </div>
      <div className="border" style={borderStyle} />
    </div>
  )
}

export default Header;