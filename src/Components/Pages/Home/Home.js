import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="home-content center text-center custom-content-padding margin-top-auto view-height-100">
        <div>
          <h1>Advocacia inteligente e eficiente.</h1>
          <h2>Entre em <Link to="/contato" className="custom-link">contato</Link>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Home;
