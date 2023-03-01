import styled from "styled-components";

export const Container = styled.div`
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-right: 25px;
    gap: 10px;
    
    border-radius: 4px;
    
    width: 100%;
    height: 375px;
    margin-top: 25px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    overflow-y: overlay;
    
    &::-webkit-scrollbar {
        width: 24px; 
    }
    &::-webkit-scrollbar-track {
        background: transparent;    
    
    }
    &::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 16px 16px ${({theme}) => theme.COLORS.BACKGROUND_900};
        border: solid 7px transparent;
        border-radius: 32px; 
        background-clip: padding-box;
    }

`;