import styled from "styled-components";

export const Container = styled.div`
    display: grid;

    width: 100%;
    height: 100vh;
    grid-template-rows: 105px auto;
    grid-template-columns: 250px 500px 500px 100px;
    grid-template-areas: "menu header header header"
                         "menu description content margin";
`;
