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
    body{
        font-family: 'Poppins', sans-serif;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    }

`;