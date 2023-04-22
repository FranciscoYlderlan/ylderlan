import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;     
`;

export const Tools = styled.div`
        
    display: grid;

    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    gap: 2.0rem;

    align-content: start;

    height: 85%;

    margin-top: 2.0rem;
    padding: 2.0rem 1rem;
    
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    border-radius: 0.4rem;
        
    overflow-y: overlay;
    overflow-x: hidden;
    
    &::-webkit-scrollbar {
        width: 2.4rem;
        border-radius: 3.2rem; 
    }
    
    &::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 2.6rem 2.6rem ${({theme}) => theme.COLORS.BACKGROUND_900};
        border: .4rem transparent solid;
        border-radius: 3.2rem; 
        background-clip: padding-box;
    }

`;