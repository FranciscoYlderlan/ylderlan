import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    position: relative;
    width: 100vw;
    height: 100vh;
    &::before {
        position: absolute;
        
        content: "";
        /* border: solid 25px ${({theme}) => theme.COLORS.DARK_YELLOW}; */
        background: ${({theme}) => theme.COLORS.DARK_YELLOW};
        /* filter:drop-shadow(0px 0px 5px black); */
        
        box-shadow: 1px 0.5px 0px black;
        
        /* transform: rotate(90deg) scale(1.5); */
        
        left: 40%;
        bottom: 0%;
        height: 100vh;
        width: 20%;
        z-index: -1;
    }
    
`;
