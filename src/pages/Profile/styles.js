import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 25rem auto;
    width: 100vw;
    height: 100vh;

    @media ${({ theme }) => theme.DEVICES.laptop} {
        display: flex;
    }
`;

export const Tags = styled.div`
    display: flex;
    gap: 2rem;
    height: fit-content;
    margin: 1.6rem 0;
    align-items: flex-end;
`;
