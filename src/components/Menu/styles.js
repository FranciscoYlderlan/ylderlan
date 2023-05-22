import styled, { keyframes } from 'styled-components';

const rollout = keyframes`
    0% {
        opacity: 0;
        height:0;
        transform: translateY(-7rem);
  }
  100% {
    scale: 1;
    opacity: 1;
    transform: translateY(0rem);
  }
`;

export const Container = styled.div`
    font-size: clamp(1.2rem, 0.9273rem + 0.8523vw, 1.8rem);

    display: grid;

    grid-template-rows: 7rem auto;

    align-content: center;

    width: 100%;
    height: fit-content;
    padding: 1rem 0.5rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    @media ${({ theme }) => theme.DEVICES.laptop} {
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 25rem;
        gap: 1.2rem;
        align-content: stretch;
        align-items: start;
        width: fit-content;
        height: 100%;
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

    @media ${({ theme }) => theme.DEVICES.laptop} {
        display: grid;
        justify-items: center;
        align-content: center;

        img {
            width: 25rem;
            object-fit: cover;
        }
    }
`;

export const Options = styled.ul`
    display: grid;
    align-content: center;
    align-items: flex-start;

    animation: 0.5s ${rollout} ease-out;

    @media ${({ theme }) => theme.DEVICES.laptop} {
        animation: none;
    }
`;
