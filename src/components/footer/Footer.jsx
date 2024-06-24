import React from 'react'

import FiapLogo from '../../assets/svgs/logo-fiap.svg'

const Footer = () => {
  return (
    <footer>
      <header>
        <img src={FiapLogo} alt="" />
        <div>
          <h1>A FIAP</h1>
          <p>Fotos</p>
          <p>Vídeos</p>
          <p>Prêmios e reconhecimentos</p>
          <p>Parcerias estratégicas</p>
        </div>
        <div>
          <h1>LINKS ÚTEIS</h1>
          <p>Fale conosco</p>
          <p>Trabalhe conosco</p>
          <p>Política de privacidade</p>
          <p>Cerencie seus Cookies</p>
        </div>
        <div>
          <h1>UNIDADES</h1>
          <p>Aclimação</p>
          <p>Paulista</p>
        </div>
      </header>
      <div className="lets-rock-the-future">
        <h1>LET'S ROCK THE FUTURE</h1>
      </div>
      <div className="footer">
        <h1>FIAP 2024</h1>
        <p>Todos os direitos reservados</p>
      </div>
    </footer>
  )
}

export default Footer