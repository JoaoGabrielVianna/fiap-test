// WaterScrollImages.jsx
import React, { useState, useEffect } from 'react';
import images from '../../assets/imgs/water';

const WaterScrollImages = ({ className = '' }) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = ((scrollTop - (maxScrollTop / 2)) / (maxScrollTop / 2)) * 2;
    const newImageIndex = Math.min(
      images.length - 1,
      Math.floor(scrollFraction * images.length)
    );
    setCurrentImageIndex(newImageIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <img src={images[currentImageIndex]} className={className} />
    </div>
  );
};

export default WaterScrollImages;