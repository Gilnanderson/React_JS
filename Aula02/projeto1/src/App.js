import './App.css';
import Header from "./components/header/header";


const links = [
  {
    id: "1",
    label: "Main",
  },
  {
    id: "2",
    label: "Main 2",
  },
  {
    id: "3",
    label: "Main 3",
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
