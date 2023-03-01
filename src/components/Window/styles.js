import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 220px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
        transition: all 200ms ease-out; 

        filter: brightness(0.7);
    }


    img:hover { 
        /* transform: scale(1.1); */
        opacity: 0.4;
        filter: saturate(1.1);
    }


    &:hover {
        cursor: pointer;
    }
`;