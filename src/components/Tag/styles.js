import styled from "styled-components";

export const Container = styled.span`
    width: fit-content;
    padding: 8px 14px;
    border: 2.5px solid ${({theme, isActive}) => isActive ? theme.COLORS.BACKGROUND_700 : theme.COLORS.WHITE};
    border-radius: 7px;
    color: ${({theme, isActive}) => isActive ? theme.COLORS.BACKGROUND_700 : theme.COLORS.WHITE};
    background-color: ${({theme, isActive}) => isActive ? theme.COLORS.WHITE : theme.COLORS.BACKGROUND_700};
    transform: all .3s;

    &:hover{
        cursor: pointer;
        background-color: ${({theme}) => theme.COLORS.WHITE};
        color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    }
`;