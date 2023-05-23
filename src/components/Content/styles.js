import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    position: absolute;
    height: 70vh;
    width: 50%;
    left: 40%;
    bottom: 10%;

    display: grid;

    grid-template-rows: auto 90%;

    grid-template-areas:
        'header'
        'details';
    gap: 0.6rem;

    padding: 2rem;
    text-align: justify;
    align-content: start;

    > h2 {
        grid-area: header;
    }

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
        rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const Details = styled.div`
    grid-area: details;
`;
