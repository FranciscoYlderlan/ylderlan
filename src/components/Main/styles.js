import styled from "styled-components";
import { motion } from "framer-motion";
export const Container = styled(motion.main)`
    width: 100%;
    position: relative;

    &::before {
        position: absolute;
        
        content: "";
        /* border: solid 25px ${({theme}) => theme.COLORS.DARK_YELLOW}; */
        background: ${({theme}) => theme.COLORS.DARK_YELLOW};
        /* filter:drop-shadow(0px 0px 5px black); */
        
        /* box-shadow: 1px 0.5px 0px black; */
        
        /* transform: rotate(90deg) scale(1.5); */
        
        left: 30%;
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