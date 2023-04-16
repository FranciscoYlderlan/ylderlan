import styled from "styled-components";

import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    text-align: justify;
    
    display: grid;
    gap: 25px;
    align-content: start;
    justify-items: start;  

    position: absolute;

    padding: 20px 85px 20px 20px;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    
    width: 35%;
    height: 45vh;
    left: 10%;
    top: 10%;

   

    align-self: start;
    
    box-shadow: 0px 2px 5px ${({theme}) => theme.COLORS.SHADOW};
   
`;