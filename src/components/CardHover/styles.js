import styled from "styled-components";

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