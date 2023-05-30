import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.main)`
    display: grid;

    align-items: stretch;
    gap: 5rem;
    width: 100%;

    &::before {
        position: absolute;

        content: '';

        background: ${({ theme }) => theme.COLORS.DARK_YELLOW};

        left: 30%;
        bottom: 0%;
        height: 60vh;
        width: 20%;
        z-index: -9999;
    }
    button,
    a,
    input {
        font-family: 'Poppins', sans-serif;
    }
    button,
    a,
    li {
        cursor: pointer;
    }

    @media ${({ theme }) => theme.DEVICES.laptop} {
        position: relative;
        &::before {
            bottom: 5%;
            height: 88vh;
        }
    }
`;
