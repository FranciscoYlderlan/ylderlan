import styled from "styled-components";

export const Container = styled.div`
    display: grid;

    width: 100%;
    height: 100vh;
    grid-template-rows: 300px auto;
    grid-template-columns: 300px auto auto ;
    grid-template-areas: "menu header header"
                         "menu description content";
`;
