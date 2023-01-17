import styled from "styled-components";
import logo1 from "../../assets/logo.svg";

export const Container = styled.div` 
    grid-area: 'menu';
    display: grid;
    grid-template-rows: 105px auto;
    width: 250px;
    
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_700};

`;
export const Logotipo = styled.div`
    border-bottom: 2px solid ${({theme})=> theme.COLORS.BACKGROUND_900};
    background-color: transparent;
    padding: 0 10px;

`;
export const Logo = styled.button`
    height: 100%;
    width: 100%;
    border: none;
    background: url(${logo1}) no-repeat center center;
    background-size:contain;
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
