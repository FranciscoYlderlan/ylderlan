import styled, { keyframes, css } from 'styled-components';

const rollout = keyframes`    
  0% {
    transform: translateZ(1);
    opacity: 1;
  }
  100% {
    transform: translateZ(600px);
    opacity: 0;
  }

`;

export const Container = styled.div`
    font-size: clamp(1.2rem, 0.9273rem + 0.8523vw, 1.8rem);

    display: grid;

    grid-template-rows: 7rem 0;

    align-content: center;

    width: 100%;
    height: fit-content;

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
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
            rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
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

export const OptionsIn = styled.ul`
    margin-top: 6.2rem;
    display: ${({ isOpen }) => (isOpen ? 'grid' : 'none')};
    align-content: center;
    align-items: flex-start;
    animation: 0.5s ${rollout} ease-out reverse;

    @media ${({ theme }) => theme.DEVICES.laptop} {
        animation: none;
    }
`;

export const OptionsOut = styled.ul`
    margin-top: 6.2rem;
    display: grid;
    align-content: center;
    align-items: flex-start;

    pointer-events: none;

    animation: 0.5s ${rollout} ease-out forwards;

    @media ${({ theme }) => theme.DEVICES.laptop} {
        animation: none;
    }
`;
