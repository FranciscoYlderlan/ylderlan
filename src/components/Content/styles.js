import styled from "styled-components";

export const Container = styled.div`
    text-align: justify;
    
    
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    position: absolute;
    height: 60vh;
    width: 50%;
    left: 40%;
    bottom: 10%;
    box-shadow: 0px 2px 4px black;

    color: ${({theme}) => theme.COLORS.GRAY_300};

    padding: 30px;
    
`;

