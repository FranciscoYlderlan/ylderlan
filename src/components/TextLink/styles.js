import styled from 'styled-components'

export const Container = styled.a`

    
    perspective:600;

    display: flex;
    gap: .8rem;
    
    color: ${({theme}) => theme.COLORS.BACKGROUND_700 };
    
    border: none;
    justify-content: flex-start;
    align-items: center;

    width: 100%;

    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2rem;
    &::after{
        position: absolute;
        content: "";
        width: 0;
        height: .27rem;
        bottom: -20%;
        left: 30%;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        transition: width .3s;
    }

    &:hover::after{
        width: 70%;
    }
    
`;