// import {useEffect, useState} from "react";
// import './App.css';

// function App() {

  // const [contar, setContar] = useState(0);
  // const [data, setData] = useState(false);

  // useEffect(() => {

  //   console.log("Executando!! ");
  // });

  // useEffect(() => {

  //   console.log("Executa no iniciar!! ");
  // },[]);

  // useEffect(() => {

  //   console.log("Executa no data!! ", data);
  // },[data]);

//   return (
//     <div className="App">
//       <h1>Use Effect</h1>
//       <button onClick={() => setContar(contar + 1)}>{contar}</button>
//       <button onClick={() => setData(!data)}>Ativar</button>
//     </div>
//   );
// }

// export default App;


// import './App.css';
// import {useState} from "react";

// function App() {

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function handleSubmit (event){
//     event.preventDefault()

//     const data ={
//       name: name,
//       email: email,
//       password: password
//     };

//     window.localStorage.setItem('dados', JSON.stringify(data))
//     console.log("dados para enviar", data);
//   }

//   return (
//     <div className="App">
//       <h1>Input</h1>
//       <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "columm"}}>
//         <label htmlFor="name">Nome</label>
//         <input
//         id="name"
//         type="text"
//         name="name"
//         value={name}
//         onChange={(event)=> setName(event.target.value)}
//         />
//         <label htmlFor="email">Email</label>
//         <input
//         id="email"
//         placeholder="Email"
//         type="email"
//         name="email"
//         value={email}
//         onChange={(event)=> setEmail(event.target.value)}
//         />
//         <label htmlFor="password">Senha</label>
//         <input
//         id="password"
//         type="password"
//         name="password"
//         value={password}
//         onChange={(event)=> setPassword(event.target.value)}
//         />
//         {name}
//         <button>ENVIAR</button>
//       </form>
      
//     </div>
//   );
// }

// export default App;

import './App.css';
import {useState} from "react";

function App() {

  const[form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmit (event){
    event.preventDefault()

  

    window.localStorage.setItem('dados', JSON.stringify(form))
    console.log("dados para enviar", form);
  }

  function handleChange ({target}){
    console.log(target);
    const{id, value} = target
    setForm({...form, [id]: value})
  }

  return (
    <div className="App">
      <h1>Input</h1>
      <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
        <label htmlFor="name">Nome</label>
        <input
        id="name"
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
        id="email"
        placeholder="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        />
        <label htmlFor="password">Senha</label>
        <input
        id="password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        />
        
        <button>ENVIAR</button>
      </form>
      
    </div>
  );
}

export default App;

