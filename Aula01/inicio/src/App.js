import "./App.css";


function App() {
  return (
    <div >
      
        
        <p>
          Gilnanderson Barrozo
        </p>
        <MainNav />
        <Button label="Clica aqui 2" type="active"/>
    </div>
  );
}

const Button = ({label, type}) =>{

  

  return <button className={type}>{label}</button>
  // <button className={props.type== "active" ? "active" : "inativo"}>{props.label}</button>;
};

const MainNav = () =>{
  return(
    <nav>
      <a href>Link 1</a>
      <Button label="Login" type="inativo"/>
    </nav>
  );
};

export default App;
