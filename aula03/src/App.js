
import './App.css';
import {useState} from 'react';

function App() {

  const [data, setData] = useState([])
  const [details, setDetails] = useState({})


  function handleClick() {
    fetch("https://60e7662115387c00173e4aeb.mockapi.io/mostraDados", {
      method: "GET",
    }).then((response) => response.json()).then((data) => {
      setData(data);
    });
    
  }

  function handleDetails(id){
    fetch(`https://60e7662115387c00173e4aeb.mockapi.io/mostraDados/${id}`, {method: "GET"})
    .then((response) => response.json().then((details) => {
      setDetails(details);
    }))
  }

  return (
    <div className="App">
      {
        data.map((filme, index) =>{
          return(
            <div key={index}>
              <h5>{filme.name} {filme.lastname}</h5>
              <img src={filme.avatar} alt={filme.name}/>
              <button onClick={()=> handleDetails(filme.id)}>Buscar Detalhes</button>
            </div>
          )
        })
      }
      <button onClick={()=> handleClick()}>Carrega Dados</button>
    </div>
  );
}

export default App;
