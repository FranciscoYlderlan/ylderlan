import styled from 'styled-components'
import { Link } from 'react-router-dom';
export const Container = styled(Link)`
    
    position:relative;
    
    display: flex;
    gap: 8px;
    
    color: ${({theme, active}) => active ? theme.COLORS.BACKGROUND_700 : theme.COLORS.WHITE} !important;
    background: ${({theme, active}) => active ? theme.COLORS.DARK_YELLOW : theme.COLORS.BACKGROUND_700};
    
    border: none;
    justify-content: center;
    align-items: center;

    width: 100%;

    font-style: normal;
    font-weight: ${({active}) => active ? 700 : 500};
    font-size: 16px;
    line-height: 44px;
    
    &::after{
        position: absolute;        
        content:  '${({title}) => title }';
        
        overflow: hidden;
        
        color: ${({theme}) => theme.COLORS.BACKGROUND_700};

        text-align: center;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 44px;

        background: ${({theme}) => theme.COLORS.DARK_YELLOW};
        width: 0;
        
        bottom: 0%;
        height: 100%;
        
        ${({active}) => active ? "transform: width;" : "transition: width .4s ease-in-out;"}

        z-index: 2;
    }

    &:hover::after {
        width: 100%;
    }
`;