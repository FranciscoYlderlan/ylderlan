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

export const View = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 4px;

    display: grid;
    place-content: center;

    background-color: ${({theme,uploaded}) => uploaded? theme.COLORS.GREEN : theme.COLORS.DARK_YELLOW};
    color: ${({theme,uploaded}) => uploaded? theme.COLORS.WHITE : theme.COLORS.BACKGROUND_700};


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