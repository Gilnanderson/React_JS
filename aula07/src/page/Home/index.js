import React, { useState } from 'react';

import {Container, Title1, Button, TitleStatus} from "./styled";

// import { Container } from './styles';

function Home() {
    const [status, setStatus] = useState(false);
  return (
    <Container>
        <h2 className="texto2">Texto com class</h2>
      <Title1> Styled-Components Home</Title1>
      <TitleStatus status={status}> Mudando Style</TitleStatus>
      <Button onClick={()=> setStatus(!status)}>Trocar</Button>
  </Container>
  )
  
  
}

export default Home;