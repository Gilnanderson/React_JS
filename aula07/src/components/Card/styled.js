import styled from "styled-components";

export const Container = styled.div`
width: 300px;
height: 400px;
background: green;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
border-radius: 8px;
margin: 15px;
h1{
    color: #fff;
    white-space: nowrap;
    max-width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
}
`;
export const ContainerImage = styled.div`
max-width: 250px;
height: 350px;

`;

export const ContainerData = styled.div`
display: flex;
justify-content: space-between;
margin: 5px 0;
width: 100%;
`