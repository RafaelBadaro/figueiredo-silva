import './Contato.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contato() {
  return (
    <div className="custom-content-padding margin-top-auto view-height-100">
      <h1>Entre em Contato</h1>
      <div className="contact-container">
        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <h2>Telefone</h2>
          <p>(31) 99982-4806</p>
        </div>
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h2>Email</h2>
          <p>contato@exemplo.com</p>
        </div>
        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h2>Endereço</h2>
          <p>Rua Exemplo, 123</p>
          <p>Belo Horizonte - Minas Gerais</p>
        </div>
      </div>
    </div>
  );
}

export default Contato;
