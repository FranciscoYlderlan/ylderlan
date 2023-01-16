import styled from "styled-components";

export const Container = styled.div` 
    display: grid;
    grid-template-rows: 105px auto;
    width: 250px;
    
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_700};

`;
export const Logotipo = styled.button`
    border: none;
    background-color: none;
    
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;

`;
export const Options = styled.ul`
    place-self: center;
    
    display: grid;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

`;
