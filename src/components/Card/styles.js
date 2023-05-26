import styled, { keyframes } from 'styled-components';

import { motion } from 'framer-motion';

const animationInLeft = keyframes`
  0% {

    transform: scale(0);
    -webkit-transform-origin: 0% 50%;
    transform-origin: 0% 50%;
    opacity: 1;
  }
  100% {
    transform: scale(1);
    transform-origin: 0% 50%;
    opacity: 1;
  }
`;

export const Container = styled(motion.div)`
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
    gap: 0.8rem;
    color: black;
    font-style: normal;
    font-weight: 400;
    font-size: clamp(0.3rem, -0.3rem + 1vw, 1.4rem);
    line-height: 1.6rem;

    span {
        background: ${({ theme }) => theme.COLORS.WHITE} !important;
        border: ${({ theme }) => theme.COLORS.WHITE} !important;
    }
    span::after {
        display: none;
    }
`;

export const View = styled.div`
    display: grid;
    gap: 1.4rem;

    justify-items: center;
    align-items: center;

    width: 100%;
    height: 100%;
    min-height: 25rem;
    max-height: fit-content;

    border-radius: 0.4rem;
    padding: 5rem 0.3rem 0;

    &::after {
        position: absolute;
        content: '';
        width: clamp(4rem, 2.6364rem + 4.2614vw, 7rem);
        height: clamp(4rem, 2.6364rem + 4.2614vw, 7rem);
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme, uploaded }) => (uploaded ? theme.COLORS.WHITE : 'black')};
        background-color: ${({ theme, uploaded }) =>
            uploaded ? theme.COLORS.GREEN : theme.COLORS.DARK_YELLOW};
        filter: brightness(1.2);
        z-index: 9999;
        transition: all 0.5s;
    }

    &::after {
        top: 0;
        right: 0;
        border-radius: 0 0.4rem 0 100%;
    }

    &:hover:after {
        width: 100%;
        height: 100%;
        border-radius: 0.4rem;
        transition: all 0.5s;
    }

    > h2 {
        position: absolute;
        font-size: clamp(1rem, 0.7273rem + 0.8523vw, 1.6rem);
        top: 0%;
        right: 4%;
        z-index: 99999;
        align-self: flex-end;
        transition: all 0.5s;
    }

    &:hover h2 {
        top: 40%;
        right: 50%;
        transform: translateX(50%);
    }

    font-style: normal;
    font-weight: 700;
    font-size: clamp(0.6rem, -0.2rem + 1vw, 2.4rem);
    line-height: 3.2rem;

    background-color: ${({ theme, uploaded }) =>
        uploaded ? theme.COLORS.GREEN : theme.COLORS.DARK_YELLOW};
    color: ${({ theme, uploaded }) => (uploaded ? theme.COLORS.WHITE : 'black')};

    @media ${({ theme }) => theme.DEVICES.laptop} {
        > h2 {
            top: 3%;
        }
    }
`;

export const AcessLink = styled.a`
    position: absolute;

    animation: ${animationInLeft} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    > button {
        font-size: 1rem;
        padding: 1rem;
        background-color: transparent;
        svg {
            transform: translateX(-5px);
            transition: all 0.3s ease;
        }
        &:hover svg {
            transform: translateX(0);
        }
    }

    button:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        border-radius: 5rem;
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        width: 45px;
        height: 45px;
        transition: all 0.3s ease;
        z-index: -1;
    }
    button:hover:before {
        border-radius: 1rem;
        width: 100%;
        background: ${({ theme }) => theme.COLORS.WHITE};
    }
    bottom: 1rem;
    z-index: 99999;
    &:hover {
        cursor: pointer;
    }
`;
