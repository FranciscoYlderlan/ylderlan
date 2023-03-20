import styled from 'styled-components'

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    
    width: 100%;
    
    color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    background-color: ${({theme}) => theme.COLORS.DARK_YELLOW};
    border: none;
    border-radius: 8px;
    padding: 16px 0;
    
    transition: filter .3s;
    font-style: normal;    
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    
    &:hover{
        filter: brightness(.8);
        cursor: pointer;
    }
    
    &:disabled {
        cursor:default;
        filter: brightness(.3);
    }
`;