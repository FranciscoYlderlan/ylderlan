import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
`;

export const BoxInput = styled.div`
    
    display: flex;
    width: 100%;
    
    align-items: center;
    padding-left: 2rem;
    gap: 1.6rem;
    border-radius: 1rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    color: ${({theme}) => theme.COLORS.GRAY_100};
    
    > input {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        color: ${({theme}) => theme.COLORS.WHITE};
        border: none;
        padding: 2rem 0;
        padding-right: 2rem;
        width: 100%;

        border-radius: 1rem;
        
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.1rem;
        
        outline: none;
    }
  
    &:focus-within {
        /* border: 1.7rem solid #9333ea ; */
        outline: .3rem solid ${({theme}) => theme.COLORS.GREEN};
        outline-offset: -0.3rem;
    }

    &:has(input:invalid:focus) {
        /* border: 1.7rem solid #fb7185 ; */
        outline: .3rem solid ${({theme}) => theme.COLORS.YELLOW};
        outline-offset: -0.3rem;
    }
    &:has(input:invalid:focus) + div {
        display: flex;
        width: 100%;
        
        align-items: center;
        padding-left: 2rem;
        gap: 1.6rem;
        border-radius: 1rem;

        color: ${({theme}) => theme.COLORS.YELLOW};
    }
`;