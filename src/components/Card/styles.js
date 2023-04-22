import styled from "styled-components";

import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    width: 100%;
    height: 25rem;
    position: relative;
    transition: filter .6s;
    
    &:hover {
        cursor: pointer;
        filter:brightness(0.5); 
    }
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    gap: .8rem;
    color: black;
    font-style: normal;    
    font-weight: 400;
    font-size: clamp(.3, -.3rem + 1vw, 1.4rem); 
    line-height: 1.6rem;
`;

export const View = styled.div`
    width: 100%;
    height: 100%;
    border-radius: .4rem;

    display: grid;
    gap: 1.4rem;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
  
    padding: .5rem;

    >h2 {
        align-self: flex-end;    
    }
    > ${Tags} {

    }
    font-style: normal;    
    font-weight: 700;
    font-size: clamp(.6rem, -.2rem + 1vw, 2.4rem);
    line-height: 3.2rem;

    background-color: ${({theme,uploaded}) => uploaded? theme.COLORS.GREEN : theme.COLORS.DARK_YELLOW};
    color: ${({theme,uploaded}) => uploaded? theme.COLORS.WHITE : "black"};


`;


