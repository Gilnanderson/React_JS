import styled from "styled-components"


export const Container = styled.div`


`;



export const Button = styled.button`
    width: 200px;
    height: 60px;
    font-size: 16px;
    background-color: #ccc;
    border-radius: 8px;
`;

export const TitleStatus = styled.h3`
    /* background-color: ${(props) => props.status ? "green" : "red"}; */
    background-color: ${({status}) => status ? "green" : "red"};
    color: ${({status}) => (status ? "#ccc" : "blue")};
    font-size: 24px;
`