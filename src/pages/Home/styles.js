import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;     
`;

export const Tools = styled.div`

        margin-top: 2.0rem;

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
        align-items: center;
        gap: 2.0rem;
`;