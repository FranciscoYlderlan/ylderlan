import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        list-style: none;
        text-decoration: none;
        
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }
    :root {
        font-size: 62.5%;
    }
    body,
    input,
    button {
        font-size: 1.6rem;
        font-family: 'Poppins', sans-serif;
    
    }
    body{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    }

`;