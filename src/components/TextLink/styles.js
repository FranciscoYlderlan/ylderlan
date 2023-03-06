import styled from 'styled-components'
import { Link } from 'react-router-dom';
export const Container = styled(Link)`
    
    position:relative;
    
    display: flex;
    gap: 8px;
    background-color: transparent;
    border: none;
    align-items: center;


    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    
    &::after{
        position: absolute;        
        content:  '${({title}) => title }';
        overflow: hidden;
        color: ${({theme}) => theme.COLORS.BACKGROUND_700};

        text-align: center;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;

        background: ${({theme}) => theme.COLORS.DARK_YELLOW};
        width: 0;
        
        bottom: 0%;
        height: 100%;
        transition: width .3s;   
        z-index: 2;
    }

    &:hover::after {
        width: 100%;
    }
`;