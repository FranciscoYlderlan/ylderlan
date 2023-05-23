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

export const ListLinks = styled.ul`
    display: grid;
    gap: 0.8rem;
`;

export const Form = styled.form`
    display: grid;
    align-content: space-between;

    margin-top: 1rem;
    padding-right: 0.5rem;

    height: 100%;

    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 2.4rem;
        border-radius: 3.2rem;
    }

    &::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 2.6rem 2.6rem ${({ theme }) => theme.COLORS.BACKGROUND_900};
        border: 0.4rem transparent solid;
        border-radius: 3.2rem;
        background-clip: padding-box;
    }
`;

export const Inputs = styled.div`
    display: grid;
    gap: 2rem;
    margin-bottom: 2rem;
`;
