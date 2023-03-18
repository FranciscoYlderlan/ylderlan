import styled, {keyframes} from "styled-components";

const breatheAnimation = keyframes`
 0% { opacity: .1; }
 30% { opacity: .3; }
 40% { opacity: .6; }
 100% { opacity: 1; }
`;

const shownUp = keyframes`
0% { transform: translateY(95px); }
35% { transform: translateY(100px); }
70% { transform: translateY(105px); }
100% { transform: translateY(110px); }
`;


const shownDown = keyframes`
 0% { transform: translateY(-85px); }
 35% { transform: translateY(-90px); }
 75% { transform: translateY(-95px); }
 100% { transform: translateY(-100px); }
`;

export const Container = styled.div`
    
    .CardContent[data-side='top'] {
        transform: translateY(110px);
        animation: ${breatheAnimation} .3s ease-in, ${shownUp} .3s ease-in-out;

    }
    .CardContent[data-side='bottom'] {
        transform: translateY(-100px);
        animation: ${breatheAnimation} .3s ease-in, ${shownDown} .3s ease-in-out;
        
    }

  .HoverCardArrow {
    fill: ${({theme}) => theme.COLORS.BACKGROUND_700};

  }
`;

export const HoverCardContent = styled.div`   
    height: 400px;
    width: 600px;
    display: grid;
    gap: 8px;
    grid-template-rows: 1fr 5fr 3fr 1fr;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    border-radius: 6px;
    color: ${({theme}) => theme.COLORS.WHITE};
    text-align: center;
    padding: 20px 10px;

`;


export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
`;

export const Description = styled.div`
    display: flex;
    text-align: justify;
    align-items: center;
    padding: 0 20px;
    
`;

export const AcessLink = styled.a`
     width: 40%;
     justify-self: center;
     &:hover {
        cursor: pointer;
     }
`;


