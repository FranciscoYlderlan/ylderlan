import styled from 'styled-components'

export const Container = styled.a`
    
    display: flex;
    gap: 8px;
    
    color: ${({theme}) => theme.COLORS.BACKGROUND_700 };
    
    border: none;
    justify-content: flex-start;
    align-items: center;

    width: 100%;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    
    
`;