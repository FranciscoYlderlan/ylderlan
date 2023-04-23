import styled from 'styled-components'

export const Container = styled.a`
    display: flex;
    width: 100%;
    color: ${({theme}) => theme.COLORS.WHITE};
    
    justify-content: center;
    align-items: center;
    transition: transform .5s;
    
    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    } ;
    
`;