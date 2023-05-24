import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const scaleUp = keyframes`
        0% {
         transform: scale(1);
        }
    
        50% {
         transform: scale(0.95);
        }
    
        100% {
         transform: scale(1);
        }
`;

export const Container = styled(motion.span)`
    font-size: 1.2rem;
    position: relative;
    display: flex;

    justify-content: center;
    align-items: center;

    border-radius: 5px;
    border: solid ${({ theme }) => theme.COLORS.YELLOW} 3px;

    width: fit-content;
    height: fit-content;
    padding: 0.8rem 1.4rem;

    border: 0.25rem solid ${({ theme, isActive }) => (isActive ? 'none' : theme.COLORS.YELLOW)}
        inset;
    border-radius: 0.7rem;
    color: ${({ theme, isActive }) =>
        isActive ? theme.COLORS.BACKGROUND_700 : theme.COLORS.WHITE};
    background-color: ${({ theme, isActive }) =>
        isActive ? theme.COLORS.YELLOW : theme.COLORS.BACKGROUND_700};
    transition: all 0.4s;

    &:after {
        content: '';
        width: 0%;
        height: 100%;
        background: ${({ theme }) => theme.COLORS.YELLOW};
        position: absolute;
        transition: all 0.4s ease-in-out;
        right: 0;
    }

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.COLORS.YELLOW};
        color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        animation: ${scaleUp} 0.3s ease-in-out;
    }
    strong {
        z-index: 20;
    }
    &:hover::after {
        right: auto;
        left: 0;
        width: 100%;
    }
    &:hover strong {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        animation: scaleUp 0.3s ease-in-out;
    }
`;
