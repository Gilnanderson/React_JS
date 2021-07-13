import './App.css';
// import image from "./components/card/"
import Banner from "./components/banner/banner";
import Header from "./components/header/header";
import Search from "./components/input/input";
import Card from "./components/card/card";

const links = [
  {
    id: "1",
    label: "TOP Filmes",
  },
  {
    id: "2",
    label: "Filmes",
  },
  {
    id: "3",
    label: "Mais",
  },
  {
    id: "4",
    label: "Login",
  },
  
  ];

  const cards = [
    {
      id: "1",
      url: "./card/filme.jpg",
      nome: "Cidade de Deus",
      nota: "9.5",
      tempo: "2h10",
    },
    {
      id: "2",
      url: "card/filme.jpg",
      nome: "Cidade de Deus",
      nota: "9.5",
      tempo: "2h10",
    },
  ];

function App() {
  return (
    <div className="container">
      <Header listaLink={links}/>
      <Banner/>
      <Search/>
      <Card listaCard={cards}/>
      
    </div>
  );
}

export default App;
