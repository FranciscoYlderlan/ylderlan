import { createGlobalStyle } from 'styled-components';

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
        font-size: 1.6rem;//clamp(.4rem,-0.1rem + 1vw, 1.6rem)
        
        font-family: 'Poppins', sans-serif;
    
    }
    body{
        background: linear-gradient(180deg, rgba(35,40,43,1) 30%, rgba(19,22,28,1) 100%);

    }
    
    body,
    input,
    button,
    textarea {
        
        font-size: 1.6rem;
        font-family: 'Poppins', sans-serif;
    
    }


    @media ${({ theme }) => theme.DEVICES.laptop} {
       body {
            background: linear-gradient(90deg, rgba(35,40,43,1) 30%, rgba(19,22,28,1) 100%);
       }
    }

`;
