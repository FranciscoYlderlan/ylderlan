import styled, {keyframes} from "styled-components";

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
        animation: ${breatheAnimation} .3s ease-in, ${shownUp} .3s ease-in-out;

    }
    .CardContent[data-side='bottom'] {
        transform: translateY(-10rem);
        animation: ${breatheAnimation} .3s ease-in, ${shownDown} .3s ease-in-out;
        
    }

  .HoverCardArrow {
    fill: ${({theme}) => theme.COLORS.BACKGROUND_700};

  }
`;

export const HoverCardContent = styled.div`   
    height: 50vh;
    width: 40vw;
    display: grid;
    gap: .8rem;
    grid-template-rows: 1fr 5fr 3fr 1fr;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    border-radius: .6rem;
    color: ${({theme}) => theme.COLORS.WHITE};
    text-align: center;
    padding: 2rem 1rem;

`;


export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: .8rem;
`;

export const Description = styled.div`
    display: flex;
    text-align: justify;
    align-items: center;
    padding: 0 2rem;
    
`;

export const AcessLink = styled.a`
     width: 40%;
     justify-self: center;
     &:hover {
        cursor: pointer;
     }
`;


