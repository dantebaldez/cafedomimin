import './Depoimentos.css';

const depoimentos = [
  {
    nome: 'Camila Queiroz',
    texto: 'O café aqui é incrível! O Mimin é um fofo, e o pai dele é muito lindo nossa senhora',
  },
  {
    nome: 'Cristiano Ronaldo',
    texto: 'Confesso que fui só para falar com o Dante e pedir algumas dicas de futebol, mas gostei muito do café.',
  },
  {
    nome: 'Ana Maria Braga',
    texto: 'Melhor cappuccino que já tomei na vida! Amanhã o Mimin e o Dante vão no Mais Você.',
  },
	{
    nome: 'Luiza Sonza',
    texto: 'Até escrevi uma música, e eu quero o Mimin comigo na capa do próximo álbum.',
  },
	{
    nome: 'Roberto Carlos',
    texto: 'O Mimin e o Dante irão pro meu próximo cruzeiro, eles merecem.',
  },
	{
    nome: 'Chico Moedas',
    texto: 'Se eu tivesse conhecido essa cafeteria antes, eu nunca teria ido naquele bar...',
  },
];

const Depoimentos = () => {
  return (
    <section className="depoimentos">
      <h2>O que nossos clientes dizem</h2>
      <div className="depoimentos-list">
        {depoimentos.map((depoimento, index) => (
          <div className="depoimento-card" key={index}>
            <h3>{depoimento.nome}</h3>
            <p>{depoimento.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Depoimentos;
