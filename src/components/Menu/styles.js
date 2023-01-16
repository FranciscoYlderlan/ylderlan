import styled from "styled-components";

export const Container = styled.div` 
    display: grid;
    grid-template-rows: 105px auto;
    width: 250px;
    
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_700};

`;
export const Logotipo = styled.button`
    border: none;
    border-bottom: 2px solid ${({theme})=> theme.COLORS.BACKGROUND_900};
    background-color: transparent;
    color: ${({theme})=> theme.COLORS.BLUE_500};
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;

`;
export const Options = styled.ul`
    place-self: center;
    
    display: grid;
    gap: 24px;
    font-style: normal;
    justify-items: center;
    color: ${({theme}) => theme.COLORS.GRAY_300};

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;

    margin-bottom: 200px;

`;
