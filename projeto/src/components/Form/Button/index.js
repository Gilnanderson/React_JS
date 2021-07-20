import React from 'react';
import "./style.css";

// import { Container } from './styles';

function Button(...props) {
  return <> <button className="buscar" {...props} className="buscar" type="submit"><i className="fa fa-search"></i></button> </>;
}

export default Button;