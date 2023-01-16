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
    button, a, input{
        font-family: 'Poppins', sans-serif;
    }
    button, a, li {
        cursor: pointer;
    }
`;