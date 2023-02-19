import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }
    body{
        font-family: 'Poppins', sans-serif;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    }
    body::before {
        position: absolute;
        
        content: "";
        /* border: solid 25px ${({theme}) => theme.COLORS.DARK_YELLOW}; */
        background: ${({theme}) => theme.COLORS.DARK_YELLOW};
        /* filter:drop-shadow(0px 0px 5px black); */
        
        /* box-shadow: 1px 0.5px 0px black; */
        
        /* transform: rotate(90deg) scale(1.5); */
        
        left: 40%;
        bottom: 5%;
        height: 88vh;
        width: 20%;
        z-index: -1;
        
    }
    button, a, input{
        font-family: 'Poppins', sans-serif;
    }
    button, a, li {
        cursor: pointer;
    }
`;