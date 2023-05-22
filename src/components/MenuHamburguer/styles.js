import styled, { keyframes } from 'styled-components';

const animationOpen = keyframes`
    100% {        
        transform: rotate(130deg) scaleX(0.7) translate(0px, 8.5px);
        border-radius: 0 5rem 5rem 5rem;
    }
`;

const animationOpen1 = keyframes`
    100% {        
        transform: rotate(35deg) scaleX(0.6) translate(4.6rem, -5px);
        border-radius: 5rem 5rem 5rem 0
    }
`;

const animationOpen2 = keyframes`
    100% {        
        
        border-top-right-radius: 5rem;
        border-bottom-right-radius: 5rem;
        margin-left: 0;
    }
`;

const animationOpen3 = keyframes`
    100% {        
        transform: rotate(-35deg) scaleX(0.6) translate(4.6rem, 5px);
        border-radius: 0 5rem 5rem 5rem;
    }
`;

export const Container = styled.button`
    display: flex;
    transform: scale(0.8);
    background-color: transparent;
    border: none;
`;

export const Open = styled.div`
    display: flex;
    transform: scale(0.8);
    background-color: transparent;
    border: none;
    input {
        display: none;
    }

    label {
        width: 4rem;
        min-height: 4rem;
        display: block;
        cursor: pointer;
        animation: ${animationOpen} 0.6s forwards;
    }

    label div {
        width: 4rem;
        height: 5px;
        background-color: ${({ theme }) => theme.COLORS.DARK_YELLOW};
        position: absolute;
    }

    label {
        div:first-child {
            animation: ${animationOpen1} 0.3s ease-in-out forwards;
        }
        div:nth-child(2) {
            margin: 1.8rem 0 0 0;
            animation: ${animationOpen2} 0.3s ease-in-out forwards;
        }

        div:last-child {
            margin: 3.6rem 0 0 0;
            animation: ${animationOpen3} 0.3s ease-in-out forwards;
        }
    }
`;

export const Closed = styled.div`
    display: flex;
    background-color: transparent;
    border: none;
    input {
        display: none;
    }

    label {
        width: 4rem;
        min-height: 4rem;
        display: block;
        cursor: pointer;
        animation: ${animationOpen} 0.6s ease-in reverse !important;
    }

    label div {
        width: 4rem;
        height: 5px;
        background-color: ${({ theme }) => theme.COLORS.DARK_YELLOW};
        position: absolute;
    }

    label {
        div:first-child {
            animation: ${animationOpen1} 0.3s ease-in reverse;
        }
        div:nth-child(2) {
            margin: 1.8rem 0 0 0;
            animation: ${animationOpen2} 0.3s ease-in reverse;
        }

        div:last-child {
            margin: 3.6rem 0 0 0;
            animation: ${animationOpen3} 0.3s ease-in reverse;
        }
    }
`;

export const Options = styled.ul`
    display: grid;
`;


