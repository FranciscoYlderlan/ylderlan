import styled from "styled-components";

import { motion } from "framer-motion";

export const Container = styled.div`
    width: 100%;
    height: 250px;
    position: relative;

    &:hover {
        cursor: pointer;
    }
`;

export const ScreenShot = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
    transition: all 200ms ease-out; 

    filter: brightness(0.7);

`;


export const Description = styled(motion.div)`
    position:absolute;
    text-align: justify;
    padding: 12px;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    color: white;
    background-color: ${({theme}) => theme.COLORS.SHADOW};
`;