import styled from "styled-components";



export const Container = styled.div`
    width: 100%;
    height: 250px;
    position: relative;

    &:hover {
        cursor: pointer;
    }
`;

export const ScreenShot = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
    transition: all 200ms ease-out; 

    filter: brightness(0.7);

    &:hover { 
        opacity: 0.4;
        filter: saturate(1.1);
    }
`;


export const Description = styled.div`
    position:absolute;
    text-align: justify;
    margin: 10px;
    top: 0;
    left: 0;
    z-index: 1;
    color: white;
 
`;