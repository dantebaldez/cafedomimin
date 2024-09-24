import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h4>Contato</h4>
          <p>Endereço: Rua Exemplo, 123 - Cidade</p>
          <p>Telefone: (11) 1234-5678</p>
          <p>Email: contato@cafeteriadoMimin.com</p>
        </div>
        <div className="social-media">
          <h4>Redes Sociais</h4>
          <a href="#" className="social-link">Instagram</a>
          <a href="#" className="social-link">Facebook</a>
        </div>
        <div className="hours">
          <h4>Horário de Funcionamento</h4>
          <p>Segunda a Sexta: 8h - 18h</p>
          <p>Sábado e Domingo: 9h - 17h</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Cafeteria do Mimin. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
