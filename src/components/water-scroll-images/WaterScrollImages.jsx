import React, { useState, useEffect } from 'react';
import images from '../../assets/imgs/water';

const WaterScrollImages = ({ className = '', speed = 1.5 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollFraction, setScrollFraction] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
    const fraction = (scrollTop / maxScrollTop) * 100;
    setScrollFraction(fraction);
    const newImageIndex = Math.min(images.length - 1, Math.floor((fraction / 100) * images.length * speed));
    setCurrentImageIndex(newImageIndex);
  };

  useEffect(() => {
    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return (
    <img src={images[currentImageIndex]} className={className} alt="Scrolling Water Images" />
  );
};

export default WaterScrollImages;
