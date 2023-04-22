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
    button,
    textarea {
        font-size: 1.6rem;
        font-family: 'Poppins', sans-serif;
    
    }
    body{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    }
    
    body,
    input,
    button,
    textarea {
        
        font-size: clamp(.4rem,-0.1rem + 1vw, 1.6rem);
        font-family: 'Poppins', sans-serif;
    
    }


    /* @media (min-width: 1200px) { 
        body,input, button {
            font-size: 1.2rem;
        };
    }


    @media (min-width: 1400px) { 
        body,input, button {
            font-size: 1.4rem;
        };
    }


    @media (min-width: 1600px) { 
        body,input, button {
            font-size: 1.6rem;
        };
    }

    @media (min-width: 2000px) { 
        body,input, button {
            font-size: 2rem;
        };
    }

    @media (min-width: 2600px) { 
        body,input, button {
            font-size: 2.4rem;
        };
    } */

`;