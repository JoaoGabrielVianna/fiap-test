import React, { useState } from 'react';

const CoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const categories = [
    {
      id: 0,
      title: 'Tecnologia',
      descriptions: [
        { id: 0, text: 'Big Data Ecosystem', modos: ['REMOTO', 'LIVE'] },
        { id: 1, text: 'Creating Dashboards for BI', modos: ['REMOTO', 'LIVE'] },
        { id: 2, text: 'Big Data Science - Machine Learning & Data Mining', modos: ['REMOTO', 'LIVE', 'MULTIMÍDIA'] },
        { id: 3, text: 'Storytelling', modos: ['REMOTO', 'LIVE'] },
      ],
    },
    {
      id: 1,
      title: 'Inovação',
      descriptions: [
        { id: 0, text: 'UX', modos: ['DIGITAL'] },
        { id: 1, text: 'UX Writing', modos: ['LIVE'] },
        { id: 2, text: 'Storytelling para Negócios', modos: ['LIVE'] },
        { id: 3, text: 'Chatbots', modos: ['LIVE'] },
      ],
    },
    {
      id: 2,
      title: 'Negócios',
      descriptions: [
        { id: 0, text: 'Agile Culture', modos: ['DIGITAL'] },
        { id: 1, text: 'DPO Data Protection Officer', modos: ['LIVE'] },
        { id: 2, text: 'IT Business Partner', modos: ['LIVE'] },
        { id: 3, text: 'Perícia Forense Computacional', modos: ['LIVE'] },
      ],
    },
  ];

  const handleCategoryClick = (categoryIndex) => {
    setActiveCategory(categoryIndex);
  };

  const handleAccordionToggle = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="courses-section-container">
      <header>
        <div>
          <h1>Cursos</h1>
          <p>Cursos de Curta Duração</p>
        </div>
        <nav>
          <ul>
            {categories.map((category, index) => (
              <li
                key={category.id}
                className={activeCategory === index ? 'is-active' : ''}
                onClick={() => handleCategoryClick(index)}
              >
                {category.title}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="courses-section-content">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className={`categories ${activeCategory === index ? 'visible' : ''}`}
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
              <button
                onClick={() => handleAccordionToggle(index)}
                className={activeAccordion === index ? 'minus' : 'plus'}
              />
            </header>
            {activeAccordion === index && (
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
