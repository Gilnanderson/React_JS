import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";

const links = [
{
  id: "1",
  label: "Inicio",
},
{
  id: "2",
  label: "Meio",
},
{
  id: "3",
  label: "Fim",
},

];


function App() {
  return (
    <div className="container">
      
        <Header listaLink={links}/>
        <Button label="Primeiro Botão" cor="azul"/>
        <Button label="Segundo Botão" cor="vermelho"/>
        {/* <MainNav />
        <Button label="Clica aqui 2" type="active"/> */}
    </div>
  );
}




// const Button = ({label, type}) =>{

  

//   return <button className={type}>{label}</button>
//   // <button className={props.type== "active" ? "active" : "inativo"}>{props.label}</button>;
// };

// const MainNav = () =>{
//   return(
//     <nav>
//       <a href>Link 1</a>
//       <Button label="Login" type="inativo"/>
//     </nav>
//   );
// };

export default App;
