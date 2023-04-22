import styled from "styled-components";

import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    position: absolute;
    height: 70vh;
    width: 50%;
    left: 40%;
    bottom: 10%;
    
    display: grid;
    
    grid-template-rows: auto 90%;
    
    grid-template-areas: "header"
                         "details";
    gap: .6rem;
    
    padding: 2rem;
    text-align: justify;
    align-content: start;
    
    
    > h2{
        grid-area: header;
    }
        
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.GRAY_300};
    box-shadow: 0rem .2rem .5rem ${({theme}) => theme.COLORS.SHADOW};

`;

export const Details = styled.div`
    grid-area: details;
`;
