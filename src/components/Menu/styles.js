import styled, { keyframes } from 'styled-components';

const rollout = keyframes`
    0% {
        opacity: 0;
        transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Container = styled.div`
    font-size: 1.2rem;

    display: grid;

    grid-template-rows: 7rem auto;

    align-content: center;

    width: 100%;
    height: fit-content;
    padding: 1rem 0.5rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    @media ${({ theme }) => theme.DEVICES.mobileS} {
    }
`;

export const Logotipo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    img {
        width: 4rem;
        object-fit: cover;
    }

    span {
        text-align: center;
        font-weight: 500;

        padding: 0.7em 1.4em;
        border: none;
        border-radius: 0.5em;

        background-color: ${({ theme }) => theme.COLORS.GRAY_300};
        box-shadow: 0.5em 0.5em 0.5em rgba(0, 0, 0, 0.3);
    }
`;

export const Options = styled.ul`
    display: grid;
    /* animation: 0.7s ${rollout} ease-in-out; */
`;
