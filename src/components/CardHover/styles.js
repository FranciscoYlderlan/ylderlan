import styled, { keyframes } from 'styled-components';

const breatheAnimation = keyframes`
 0% { opacity: .1; }
 30% { opacity: .3; }
 40% { opacity: .6; }
 100% { opacity: 1; }
`;

const shownUp = keyframes`
0% { transform: translateY(9.5rem); }
35% { transform: translateY(10rem); }
70% { transform: translateY(10.5rem); }
100% { transform: translateY(11rem); }
`;

const shownDown = keyframes`
 0% { transform: translateY(-8.5rem); }
 35% { transform: translateY(-9rem); }
 75% { transform: translateY(-9.5rem); }
 100% { transform: translateY(-10rem); }
`;

export const Container = styled.div`
    .CardContent[data-side='top'] {
        transform: translateY(11rem);
        animation: ${breatheAnimation} 0.3s ease-in, ${shownUp} 0.3s ease-in-out;
    }
    .CardContent[data-side='bottom'] {
        transform: translateY(-10rem);
        animation: ${breatheAnimation} 0.3s ease-in, ${shownDown} 0.3s ease-in-out;
    }

    .HoverCardArrow {
        fill: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
`;

export const HoverCardContent = styled.div`
    
    max-width: 32vw;
    display: grid;
    align-content: center;
    gap: 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    border-radius: 0.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
    padding: 2rem 1rem;

`;

export const Description = styled.div`
    display: flex;
    text-align: justify;
    align-items: center;
    font-size: clamp(1.4rem, 0.6rem + 0.0781vw, 1.6rem);
    padding: 0 2rem;
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    strong {
        font-size: clamp(1.2rem, -0.4rem + 0.1563vw, 1.6rem);
    }
    gap: 0.8rem;
`;



export const AcessLink = styled.a`
    > button {
        font-size: clamp(1.4rem, 0.6rem + 0.0781vw, 1.6rem);
        padding: 1rem;
    }

    justify-self: center;
    &:hover {
        cursor: pointer;
    }
`;
