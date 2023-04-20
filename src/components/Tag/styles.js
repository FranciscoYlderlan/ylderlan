import styled from "styled-components";
import { motion } from "framer-motion";
export const Container = styled(motion.span)`
    width: fit-content;
    height: fit-content;
    padding: .8rem 1.4rem;
    
    border: .25rem solid ${({theme, isActive}) => isActive ? 'none' : theme.COLORS.WHITE};
    border-radius: .7rem;
    color: ${({theme, isActive}) => isActive ? theme.COLORS.BACKGROUND_700 : theme.COLORS.WHITE};
    background-color: ${({theme, isActive}) => isActive ? theme.COLORS.WHITE : theme.COLORS.BACKGROUND_700};
    transition: all .4s;



    &:hover{
        cursor: pointer;
        background-color: ${({theme}) => theme.COLORS.GRAY_300};
        color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        margin-bottom: ${({isActive}) => isActive ? '.0rem' : '-0.7rem'};
    }
`;