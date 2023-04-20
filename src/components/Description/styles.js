import styled from "styled-components";

import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    text-align: justify;
    
    display: grid;
    gap: 2.5rem;
    align-content: start;
    justify-items: start;  

    position: absolute;

    padding: 2rem 8.5rem 2rem 2rem;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    
    width: 35%;
    height: 45vh;
    left: 10%;
    top: 10%;

   

    align-self: start;
    
    box-shadow: 0rem .2rem .5rem ${({theme}) => theme.COLORS.SHADOW};
   
`;