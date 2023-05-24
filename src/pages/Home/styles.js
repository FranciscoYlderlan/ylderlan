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

    margin-top: 2rem;
    padding: 3rem 0rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 20px inset, rgba(0, 0, 0, 0.3) 0px 7px 13px 0px inset,
        rgba(0, 0, 0, 0.2) 0px -3px 0px;

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

    @media ${({ theme }) => theme.DEVICES.laptop} {
        padding: 2rem 0rem;
        height: clamp(27rem, -60.5385rem + 60.9vw, 50rem);
    }
`;
