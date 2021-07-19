import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import "./style.css"

// import { Container } from './styles';

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

function Home() {
  return (
    <Header listaLink={links}/>,
    <div>
        <Banner />
    </div>
        
  )
}

export default Home;