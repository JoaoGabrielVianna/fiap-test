import React, { useState, useEffect } from 'react';

const CoursesSection = () => {
  const [isActive, setActiveState] = useState(0); // Estado inicial para o primeiro item
  const [activeCategory, setActiveCategory] = useState(null); // Estado inicial para nenhum item ativo

  const handleItemClick = (e) => {
    setActiveState(e)
  }

  const toggleAccordion = (index) => {
    if (activeCategory === index) {
      setActiveCategory(null); // Fecha o accordion se já estiver aberto
    } else {
      setActiveCategory(index); // Abre o accordion correspondente ao index
    }
  };

  const categories = [
    {
      id: 0,
      title: 'Tecnologia',
      descriptions: [
        { id: 0, text: 'Big Data Ecosystem', modos: ['REMOTO', 'LIVE'] },
        { id: 1, text: 'Creating Dashboards for BI', modos: ['REMOTO', 'LIVE'] },
        { id: 2, text: 'Big Data Science - Machine Learning & Data Mining', modos: ['REMOTO', 'LIVE', 'MULTIMÍDIA'] },
        { id: 3, text: 'Storytelling', modos: ['REMOTO', 'LIVE'] },
      ]
    },
    {
      id: 1,
      title: 'Inovação',
      descriptions: [
        { id: 0, text: 'UX', modos: ['DIGITAL'] },
        { id: 1, text: 'UX Writing', modos: ['LIVE'] },
        { id: 2, text: 'Storytelling para Negócios', modos: ['LIVE'] },
        { id: 3, text: 'Chatbots', modos: ['LIVE'] },
      ]
    },
    {
      id: 2,
      title: 'Negócios',
      descriptions: [
        { id: 0, text: 'Agile Culture', modos: ['DIGITAL'] },
        { id: 1, text: 'DPO Data Protection Officer', modos: ['LIVE'] },
        { id: 2, text: 'IT Business Partner', modos: ['LIVE'] },
        { id: 3, text: 'Perícia Forense Computacional', modos: ['LIVE'] },
      ]
    }
  ];


  return (
    <div className='courses-section-container'>
      <header>
        <div>
          <h1>Cursos</h1>
          <p>Cursos de Curta Duração</p>
        </div>
        <nav>
          <ul>
            <li className={isActive === 0 ? 'is-active' : ''} onClick={() => handleItemClick(0)}>
              Tecnologia
            </li>

            <li className={isActive === 1 ? 'is-active' : ''} onClick={() => handleItemClick(1)}>
              Inovação
            </li>
            <li className={isActive === 2 ? 'is-active' : ''} onClick={() => handleItemClick(2)}>
              Negócios
            </li>
          </ul>
        </nav>
      </header>
      <div className="courses-section-content">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className={`categories ${isActive === index ? 'visible' : ''}`}
          >
            <h1>{category.title}</h1>
            {category.descriptions.map((desc) => (
              <div key={desc.id}>
                <p>{desc.text}</p>
                <p>{desc.modos.join(' \u2022 ')}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="accordion-mobile">
        {categories.map((category, index) => (
          <div key={category.id} className="accordion-item">
            <header>
              <h1>{category.title}</h1>
              <button onClick={() => toggleAccordion(index)} className={activeCategory === index ? 'minus' : 'plus'}>

              </button>
            </header>
            {activeCategory === index && (
              <div className="accordion-content">
                {category.descriptions.map((desc) => (
                  <div key={desc.id} className="accordion-description">
                    <p>{desc.modos.join(' \u2022 ')}</p>
                    <p>{desc.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
