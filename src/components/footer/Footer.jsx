import React from 'react';
import FiapLogo from '../../assets/svgs/logo-fiap.svg';

const Footer = () => {
  return (
    <footer>
      <header>
        <img src={FiapLogo} alt="Logo FIAP" />
        <div>
          <h1>A FIAP</h1>
          <FooterLinkList
            links={[
              'Fotos',
              'Vídeos',
              'Prêmios e reconhecimentos',
              'Parcerias estratégicas',
            ]}
          />
        </div>
        <div>
          <h1>LINKS ÚTEIS</h1>
          <FooterLinkList
            links={[
              'Fale conosco',
              'Trabalhe conosco',
              'Política de privacidade',
              'Gerencie seus Cookies',
            ]}
          />
        </div>
        <div>
          <h1>UNIDADES</h1>
          <FooterLinkList links={['Aclimação', 'Paulista']} />
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
  );
};

const FooterLinkList = ({ links }) => (
  <>
    {links.map((link, index) => (
      <p key={index}>{link}</p>
    ))}
  </>
);

export default Footer;
