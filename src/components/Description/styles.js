import styled from "styled-components";

import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    text-align: justify;
    
    display: grid;
    gap: 25px;
    align-content: start;
    justify-items: start;  

    padding: 30px 85px 30px 30px;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    
    width: 35%;
    height: 45vh;
    margin: 100px 0px 0px 150px;
   

    align-self: start;
    
    box-shadow: 0px 2px 5px ${({theme}) => theme.COLORS.SHADOW};
   
`;