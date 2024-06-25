// Home.jsx
import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import IntroImage from '../../assets/imgs/intro.png';
import Marquee from '../../components/marquee/Marquee';
import WaterScrollImages from '../../components/water-scroll-images/WaterScrollImages';
import CoursesSection from '../../components/courses-section/CoursesSection';
import FaqSection from '../../components/faq-section/FaqSection';
import Footer from '../../components/footer/Footer';
import TextTyper from '../../components/text-typer/TextTyper';
import './Home.scss';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollY = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollY / windowHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div className='home-container'>
      <Header />
      <Navbar/>

      <section id='home'>
        <TitleSection />
      </section>

      <section id='intro'>
        <Marquee text='CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO.' />
        <Marquee text='TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.' direction='ltr' />
      </section >

      <section  className={scrollProgress > 14 ? 'is-visible' : ''}>
        <img src={IntroImage} alt="Imagem de Introdução" />
      </section>

      <section>
        <Marquee mode={2} text='SKILLS &bull; CONHECIMENTO &bull; SKILLS' />
        <Marquee mode={2} text='MUITO. MUITO ALÉM DOS TUTORIAIS' direction='ltr' />
      </section>

      <section>
        <WaterScrollImages className='water' />
      </section>

      <section id='cursos'>
        <CoursesSection />
      </section>

      <section id='faq'>
        <FaqSection />
      </section>

      <section id='footer'>
        <Footer />
      </section>
    </div>
  );
};

const TitleSection = () => (
  <div className="section-wrapper">
    <div className='title'>
      <div className="title-wrapper">
        <TextTyper text='A Melhor Faculdade' className='first' space />
        <TextTyper text='de Tecnologia' delay={2000} className='second' />
      </div>
      <div className="about">
        <h1>SOB<br />RE</h1>
      </div>
    </div>
  </div>
);

export default Home;
