import styled from "styled-components";

export const Container = styled.div`

    /* border: solid 25px ${({theme}) => theme.COLORS.DARK_YELLOW}; */
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700} ;
    /* background-color: ${({theme}) => theme.COLORS.DARK_YELLOW}; */
    position: absolute;
    /* position: relative; */
    height: 60vh;
    width: 45%;
    left: 50%;
    bottom: 10%;

    align-self:center;
    box-shadow: 0px 2px 4px black;
    
`;

