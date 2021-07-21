import React, { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import Input from '../../components/Input';

import {Container} from "./styled";



// import { Container } from './styles';

function Filmes() {
  const [name, setname] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
      <Input id="name" setValue={setname} placeholder="Digite o nome do filme" type="text" value={name}/>
      <CustomButton>Buscar</CustomButton>
      </form>
        
      
  </Container>
  )
  
  
}

export default Filmes;