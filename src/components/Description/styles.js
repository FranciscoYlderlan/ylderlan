import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    position: absolute;

    display: grid;
    gap: 2.5rem;

    align-content: start;
    justify-items: start;

    text-align: justify;

    padding: 2rem;
    margin: 0 1rem;

    width: fit-content;
    height: fit-content;
    left: 0%;
    top: 20%;

    align-self: start;

    border-radius: 6px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    background: ${({ theme }) => theme.COLORS.WHITE};
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
        rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    @media ${({ theme }) => theme.DEVICES.laptop} {
        left: 10%;
        top: 10%;
        padding: 2rem 5.5rem 2rem 2rem;
    }
`;
