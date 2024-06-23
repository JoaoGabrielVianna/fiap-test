// Home.jsx
import React from 'react';

// Componentes importados
import Header from '../../components/header/Header';
import Intro from '../../assets/imgs/intro.png';
import Marquee from '../../components/marquee/Marquee';
import WaterScrollImages from '../../components/water-scroll-images/WaterScrollImages';
import CoursesSection from '../../components/courses-section/CoursesSection ';
import FaqSection from '../../components/faq-section/FaqSection';

import './Home.scss';

function Home() {
  return (
    <div className='home-container'>
      <Header />

      {/* Seção 1 - Título: A Melhor Faculdade de Tecnologia */}
      <section>
        <div className="section-wrapper">
          <div className='title'>
            <h1 className='a-melhor-faculdade typing'>A Melhor Faculdade</h1>
            <h1 className='typing'>de Tecnologia</h1>
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
      <section>
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

      <section>
        <FaqSection />
      </section>

    </div>
  );
}

export default Home;
