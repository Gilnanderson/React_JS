import React from 'react';
import "./header.css"

// import { Container } from './styles';

function Header({listaLink}) {
  return (
    <div className="container-header">
        <a id="logo" href="/"><i className="fas fa-jedi"></i> Cinemateca</a>
    
    
        <div className="estilo-links">
        {
            listaLink.map((link)=> {
            return <button className="botao"><a href="{link.id}" key={link.id} className={link.label}>{link.label}</a></button>
            })
        }
        </div>
    </div>
  );
}

export default Header;