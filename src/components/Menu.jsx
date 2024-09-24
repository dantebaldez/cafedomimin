import './Menu.css';
import cappuccino from '../assets/capuccino.jpg';
import chai from '../assets/chai.jpg';
import expresso from '../assets/expresso.jpg';
import frappuccino from '../assets/frappuccino.jpg';
import matcha from '../assets/matcha.jpg';
import mocha from '../assets/mocha.jpg';

const drinks = [
  { name: 'Expresso', price: 'R$ 6,50', image: expresso },
  { name: 'Cappuccino', price: 'R$ 6,90', image: cappuccino },
  { name: 'Frappuccino', price: 'R$ 8,90', image: frappuccino },
  { name: 'Mocha', price: 'R$ 12,00', image: mocha },
  { name: 'Chai Latte', price: 'R$ 9,00', image: chai },
  { name: 'Matcha Latte', price: 'R$ 7,00', image: matcha },
];

const Menu = () => {
  return (
    <section className="menu">
      <h2>Nosso Menu</h2>
      <div className="menu-items">
        {drinks.map((drink, index) => (
          <div className="menu-card" key={index}>
            <img src={drink.image} alt={drink.name} className="menu-image" />
            <h3>{drink.name}</h3>
            <p>{drink.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
