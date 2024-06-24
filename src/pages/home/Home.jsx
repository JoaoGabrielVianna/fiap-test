// Home.jsx
import React, { useEffect, useState } from 'react';

// Componentes importados
import Header from '../../components/header/Header';
import Intro from '../../assets/imgs/intro.png';
import Marquee from '../../components/marquee/Marquee';
import WaterScrollImages from '../../components/water-scroll-images/WaterScrollImages';
import CoursesSection from '../../components/courses-section/CoursesSection ';
import FaqSection from '../../components/faq-section/FaqSection';

import './Home.scss';
import Footer from '../../components/footer/Footer';
import TextTyper from '../../components/text-typer/TextTyper';

function Home() {

  const [scrollPosition, setScrollPosition] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = `${(scrollPosition / windowHeight) * 100}`;
      setScrollPosition(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='home-container'>
      <Header />

      {/* Seção 1 - Título: A Melhor Faculdade de Tecnologia */}
      <section>
        <div className="section-wrapper">
          <div className='title'>
            <div className="title-wrapper">
              <TextTyper text='A Melhor Faculdade' className='first' />
              <TextTyper text='de Tecnologia' delay={2000} className='second' />
            </div>
            {/* <h1 className='a-melhor-faculdade typing'>A Melhor Faculdade <div>de Tecnologia</div></h1> */}
            {/* <h1 className='typing'>de Tecnologia</h1> */}

            <div className="about">
              <h1>SOB<br />RE</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2 - Marquee (letreiro) com duas mensagens diferentes */}
      <section>
        <Marquee text='CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO.' />
        <Marquee text='TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.' direction='ltr' />
      </section>

      {/* Seção 3 - Imagem de introdução */}
      <section className={`${scrollPosition > 14 ? 'is-visible' : ''}`}>
        <img src={Intro} alt="Imagem de Introdução" />
      </section>

      {/* Seção 4 - Marquee (letreiro) com duas mensagens diferentes no modo 2 */}
      <section>
        <Marquee mode={2} text='SKILLS &bull; CONHECIMENTO &bull; SKILLS' />
        <Marquee mode={2} text='MUITO. MUITO ALÉM DOS TUTORIAIS' direction='ltr' />
      </section>

      {/* Seção 5 - Animação de Imagens com Scroll de Água */}
      <section>
        <WaterScrollImages className='water' />
      </section>

      {/* Seção 6 - Cursos */}
      <section>
        <CoursesSection />
      </section>

      {/* Seção 7 - FAQ */}
      <section>
        <FaqSection />
      </section>

      <section>
        <Footer />
      </section>

    </div>
  );
}

export default Home;
