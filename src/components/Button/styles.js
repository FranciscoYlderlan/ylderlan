import styled from 'styled-components'

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    
    width: 100%;
    
    color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    background-color: ${({theme}) => theme.COLORS.DARK_YELLOW};
    border: none;
    border-radius: .8rem;
    padding: 2rem 0;
    
    transition: filter .3s;
    font-style: normal;    
    font-weight: 700;
    /* font-size: 1.6rem; */
    line-height: 1.8rem;
    
    &:hover{
        filter: brightness(.8);
        cursor: pointer;
    }
    
    &:disabled {
        cursor:default;
        filter: brightness(.3);
    }
`;