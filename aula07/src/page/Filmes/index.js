import React, { useState, useEffect } from 'react';
import CustomButton from '../../components/CustomButton';
import Input from '../../components/Input';
import GetMovies from '../../service/movie/GetMovies';
import { NavLink } from 'react-router-dom';

import {Container} from "./styled";
import Card from '../../components/Card';



// import { Container } from './styles';

function Filmes() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const getMovieName = async (name = "hulk") =>{
    const response = await GetMovies(name);

    setData(response);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovieName(name);
  }

  useEffect(()=>{

    getMovieName();

}, [])

    // const GetDataMovies = async() =>{
    //     const response = await GetMovies(name)
    //     console.log("CHEGOU!", response);
    //     setData(response)
    // }

    
    
  return (
    <Container>
      <form onSubmit={handleSubmit}>
      <Input id="name" setValue={setName} 
      placeholder="Digite o nome do filme" 
      type="text" 
      value={name}/>
      <CustomButton>Buscar</CustomButton>
      </form>
     
      
      <div>{data.map((item, index) =>{
        console.log("Aqui tb", item.Title);
          return(
          <div key={index}>
            <Card data={item}/>
              <h1>{item.Title}</h1>
              <NavLink to={`/Sobre/${item.imdbID}`}>Saiba mais</NavLink>

          </div>
          )
      })}</div>
      
  </Container>
  )
  
  
}

export default Filmes;