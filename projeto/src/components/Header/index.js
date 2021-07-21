import React from 'react';
import "./header.css"

// import { Container } from './styles';

function Header({listaLink}){
  console.log("Chegou!", listaLink);
  return (
    <div className="container-header">
        <a id="logo" href="/"><i className="fas fa-jedi"></i> Cinemateca</a>
    
    
        <div className="estilo-links">
        
            {listaLink.map((links)=> {
              console.log("AQUI", links.label);
            return (<button key={links.id} className="botao"><a href={links.id}  className={links.label}>{links.label}</a></button>
            )})} 
        
        </div>
    </div>
  );
}

export default Header;