import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    display: grid;
    gap: 2.5rem;

    align-content: start;
    justify-items: start;

    text-align: justify;

    padding: 2rem;
    margin: 0 2rem;

    max-width: fit-content;
    height: fit-content;

    top: 22rem;

    align-self: start;

    border-radius: 6px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    background: ${({ theme }) => theme.COLORS.WHITE};
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
        rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    @media ${({ theme }) => theme.DEVICES.laptop} {
        font-size: clamp(1rem, -0.9692rem + 1.9231vw, 1.6rem);

        position: absolute;
        width: 30vw;

        left: 10%;
        top: 10%;

        padding: 2rem 5.5rem 2rem 2rem;
    }
`;
