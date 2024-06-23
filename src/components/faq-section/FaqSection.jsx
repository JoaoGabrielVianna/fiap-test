// FaqSection.jsx
import React from 'react'

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
        <div className='card'>
          <h1>QUANDO POSSO ME MATRICULAR?</h1>
          <p>Você pode se matricular em qualquer dia e hora, basta acessar a página do curso e se inscrever.</p>
        </div>
        <div className='card'>
          <h1>POSSO FAZER DOIS OU MAIS CURSOS AO MESMO TEMPO?</h1>
          <p>Sim. Apenas atente-se às datas, elas devem ser diferentes, porque cada curso tem sua dinâmica.</p>
        </div>
        <div className='card'>
          <h1>QUAIS OS PRÉ-REQUISITOS?</h1>
          <p>Cada curso tem seus pré-requisitos descritos na própria página. Identifique-os, para que você obtenha um melhor aproveitamento do seu SHIFT.</p>
        </div>
        <div className='card'>
          <h1>QUAL A DURAÇÃO DOS CURSOS?</h1>
          <p>De 6 a 42 horas.</p>
        </div>
        <div className='card'>
          <h1>PRECISO LEVAR ALGUM MATERIAL PARA AS AULAS?</h1>
          <p>Não. Os materiais utilizados em sala de aula são fornecidos pela FIAP e as aulas mais técnicas são realizadas em nossos próprios laboratórios. Sugerimos somente que traga o que preferir para suas anotações.</p>
        </div>
        <div className='card'>
          <h1>VOU RECEBER CERTIFICADO DE CONCLUSÃO DE CURSO?</h1>
          <p>Sim. Ao cumprir pelo menos 75% da carga horária do curso, você receberá um Certificado Digital, que poderá ser acessado na plataforma.</p>
        </div>
      </div>
    </div>
  )
}

export default FaqSection;