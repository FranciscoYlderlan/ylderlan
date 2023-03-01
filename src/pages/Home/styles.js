import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
       
`;


export const Tools = styled.div`

        margin-top: 20px;

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        align-items: center;
        gap: 20px;
`;