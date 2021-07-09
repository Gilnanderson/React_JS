import './App.css';
import Header from "./components/header/header";


const links = [
  {
    id: "1",
    label: "Hotéis",
  },
  {
    id: "2",
    label: "Reservas",
  },
  {
    id: "3",
    label: "Combos",
  },
  {
    id: "4",
    label: "Main 4",
  },
  {
    id: "5",
    label: "Main 5",
  },
  
  ];

function App() {
  return (
    <div className="container">
      <Header listaLink={links}/>
      <input type="text" className="inputCentral"></input>
      
    </div>
  );
}

export default App;
