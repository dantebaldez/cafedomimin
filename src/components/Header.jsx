import './Header.css';
import logo1 from './../assets/logo1.png';
import dog1 from './../assets/dog1.png';

const Header = () => {
  return (
    <header className="header">
      <img src={dog1} className='inter-image' alt="Mimin" />
      <img src={logo1} alt="Cafeteria do Mimin" className="logo" />
      <button className="cta-button">Peça pro meu <br /> papai o seu<br /> cafezinho!</button>
    </header>
  );
};

export default Header;
