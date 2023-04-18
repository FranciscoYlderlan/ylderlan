import styled from 'styled-components'

export const Container = styled.a`

    
    perspective:600;

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
    &::after{
        position: absolute;
        content: "";
        width: 0;
        height: 2.7px;
        bottom: -20%;
        left: 30%;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        transition: width .3s;
    }

    &:hover::after{
        width: 70%;
    }
    
`;