import styled from "styled-components";

import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    width: 100%;
    height: 250px;
    position: relative;

    &:hover {
        cursor: pointer;
    }
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    gap: 8px;
    color: black;
    font-style: normal;    
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
`;

export const View = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 4px;

    display: grid;
    gap: 14px;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    

    >h2 {
        align-self: flex-end;    
    }
    > ${Tags} {

    }
    font-style: normal;    
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;

    background-color: ${({theme,uploaded}) => uploaded? theme.COLORS.GREEN : theme.COLORS.DARK_YELLOW};
    color: ${({theme,uploaded}) => uploaded? theme.COLORS.WHITE : "black"};


`;


