import styled from "styled-components";

export const Container = styled.div`
    .CardContent[data-side='top'] {
        transform: translateY(110px);
    }
    .CardContent[data-side='bottom'] {
        transform: translateY(-100px);
    }

  .HoverCardArrow {
    fill: ${({theme}) => theme.COLORS.BACKGROUND_700};

  }
`;

export const HoverCardContent = styled.div`   
    height: 400px;
    width: 600px;
    display: grid;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    border-radius: 6px;


`;


export const Tags = styled.div`
    display: flex;
`;

export const Description = styled.div`
    display: flex;
`;

export const ButtonLink = styled.a`
     display: flex;
`;


