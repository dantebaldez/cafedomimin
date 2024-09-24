import './About.css';
import mimin1 from '../assets/mimin1.jpg';

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2>Sobre a Cafeteria do Mimin</h2>
        <p>
          Bem-vindo à Cafeteria do Mimin, onde o café é tão bom que até o nosso chefe, o Mimin,
          um golden retriever de muito estilo, aprova! Aqui, a única coisa que pode ser mais
          gostosa do que nosso café é a quantidade de carinho que você vai receber. Venha se
          deliciar com nossos quitutes enquanto Mimin observa com seu olhar pedindo um pedacinho.
          Afinal, aqui o cliente é sempre o cachorro!
        </p>
      </div>
      <img src={mimin1} alt="Mimin, o Golden Retriever" className="about-image" />
    </section>
  );
};

export default About;
