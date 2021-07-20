import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Input from '../../components/Form/Input';
import "./style.css"
import Button from '../../components/Form/Button';

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
    
    <div>
      <Header listaLink={links}/>
      <Banner />
      <form className="search">
        <Input />
        <Button />
      </form>
    </div>
    
        
  )
}

export default Home;