import styled from "styled-components";

export const Container = styled.div`
    
    border: solid 25px  white;//${({theme}) => theme.COLORS.DARK_YELLOW};
    background-color: white;//${({theme}) => theme.COLORS.DARK_YELLOW};

    /* position: relative; */
    width: 30%;
    height: 40vh;
    margin: 100px 0px 0px 150px;
   

    align-self: start;
    
    box-shadow: 0px 2px 4px black;
    /* filter:drop-shadow(0px 2px 4px black);   */
    /* &::before {
        content: "";
        border: solid 25px ${({theme}) => theme.COLORS.DARK_YELLOW};
        background: ${({theme}) => theme.COLORS.DARK_YELLOW};
        //filter:drop-shadow(0px 0px 5px black);

        box-shadow: 0px 1px 2px black;
        
        position: absolute;
        left: 20%;
        top: 30%;
        width: 100%;
        height: 80%;
        z-index: -1;
    } */
`;