import styled from "styled-components";

export const Container = styled.div` 
    display: grid;
    grid-template-rows: 1fr 2fr;
    width: 16vw;
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_700};
    
`;
export const Logotipo = styled.div`
    display: grid;
    align-content: center;
    justify-items: center;
    height: fit-content;
    img{
        width: 100%;
        object-fit: cover;
    }
    p{
        width: 100%;
        text-align: center;
        padding: 10px;
        background-color: ${({theme})=> theme.COLORS.GRAY_300};
    }
`;
 
export const Options = styled.ul`
    margin-top: 100px;

    display: grid;
    gap: 24px;

    height: fit-content;

    font-style: normal;
    justify-items: center;
    color: ${({theme}) => theme.COLORS.GRAY_300};

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;


`;
