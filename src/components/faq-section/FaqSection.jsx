import React from 'react';

const FaqSection = () => {
  return (
    <div className='faq-section-container'>
      <header>
        <div>
          <h1>FAQ</h1>
          <p>Dúvidas Frequentes</p>
        </div>
      </header>
      <div className="faq-section-content">
        {faqItems.map((item, index) => (
          <div key={index} className='card'>
            <h1>{item.question}</h1>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const faqItems = [
  {
    question: 'QUANDO POSSO ME MATRICULAR?',
    answer: 'Você pode se matricular em qualquer dia e hora, basta acessar a página do curso e se inscrever.',
  },
  {
    question: 'POSSO FAZER DOIS OU MAIS CURSOS AO MESMO TEMPO?',
    answer: 'Sim. Apenas atente-se às datas, elas devem ser diferentes, porque cada curso tem sua dinâmica.',
  },
  {
    question: 'QUAIS OS PRÉ-REQUISITOS?',
    answer: 'Cada curso tem seus pré-requisitos descritos na própria página. Identifique-os, para que você obtenha um melhor aproveitamento do seu SHIFT.',
  },
  {
    question: 'QUAL A DURAÇÃO DOS CURSOS?',
    answer: 'De 6 a 42 horas.',
  },
  {
    question: 'PRECISO LEVAR ALGUM MATERIAL PARA AS AULAS?',
    answer: 'Não. Os materiais utilizados em sala de aula são fornecidos pela FIAP e as aulas mais técnicas são realizadas em nossos próprios laboratórios. Sugerimos somente que traga o que preferir para suas anotações.',
  },
  {
    question: 'VOU RECEBER CERTIFICADO DE CONCLUSÃO DE CURSO?',
    answer: 'Sim. Ao cumprir pelo menos 75% da carga horária do curso, você receberá um Certificado Digital, que poderá ser acessado na plataforma.',
  },
];

export default FaqSection;
