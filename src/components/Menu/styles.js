import styled from "styled-components";

export const Container = styled.div` 
    grid-area: 'menu';
    display: grid;
    height: 100vh;
    grid-template-rows: 300px auto;
    
    
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_700};

`;
export const Logotipo = styled.div`
    display: grid;

    img{
        width: 150px;
        place-self: center;
        object-fit: cover;
    }


    border-bottom: 2px solid ${({theme})=> theme.COLORS.BACKGROUND_900};
    background-color: transparent;
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
