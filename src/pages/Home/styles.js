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

export const Tools = styled.div`
    display: grid;

    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    gap: 2rem;

    align-content: start;

    height: 85%;

    margin-top: 2rem;
    padding: 1rem 0rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border-radius: 0.4rem;

    overflow-y: overlay;
    overflow-x: hidden;

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
