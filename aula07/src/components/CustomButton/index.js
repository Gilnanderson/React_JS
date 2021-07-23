import React from 'react';
import { NavLink } from 'react-router-dom';
import { ContainerButton } from './styled';

// import { Container } from './styles';

function CustomButton({children, link, route, ...props}) {
  return (
    
      

      <>
      {link ?(
        <ContainerButton>
          <NavLink to={route}>{children}</NavLink>
        </ContainerButton>
      )  :
    (<button {...props}>{children}</button>)}
  </>

    
    

  )
  
 
}

export default CustomButton;