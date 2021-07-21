import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Input from '../../components/Form/Input';
import "./style.css"
import Button from '../../components/Form/Button';

// import { Container } from './styles';


function Home() {
  return (
    
    <div>
      
      <Banner />
      <form className="search">
        <Input />
        <Button />
      </form>
    </div>
    
        
  )
}

export default Home;