import styled from "styled-components";

import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    text-align: justify;
    
    display: grid;
    align-content: start;
    
    position: absolute;
    
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    height: 70vh;
    width: 50%;
    left: 40%;
    bottom: 10%;
    box-shadow: 0px 2px 5px ${({theme}) => theme.COLORS.SHADOW};

    color: ${({theme}) => theme.COLORS.GRAY_300};

    padding: 30px;
    
`;

