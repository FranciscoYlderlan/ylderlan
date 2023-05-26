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
    flex-wrap: wrap;
    gap: clamp(1rem, 0.7727rem + 0.7102vw, 1.5rem);
    height: fit-content;
    margin: 1.6rem 0;
    align-items: flex-end;
    @media ${({ theme }) => theme.DEVICES.laptop} {
        gap: 2rem;
    }
`;
