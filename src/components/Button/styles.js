import styled from 'styled-components';

export const Container = styled.button`
    position: relative;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    color: ${({ theme }) => theme.COLORS.DARK_YELLOW};
    border: ${({ theme }) => theme.COLORS.DARK_YELLOW} 2px solid;
    border-radius: 0.8rem;
    padding: 2rem 0;

    transition: all 0.5s;
    font-style: normal;
    font-weight: 700;
    /* font-size: 1.6rem; */
    line-height: 1.8rem;

    &::after {
        content: '';
        position: absolute;
        width: 10rem;
        height: 120%;
        background-color: ${({ theme }) => theme.COLORS.DARK_YELLOW};
        top: 50%;
        transform: skewX(30deg) translate(-150%, -50%);
        transition: all 0.5s;
    }

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.COLORS.GREEN};
        color: ${({ theme }) => theme.COLORS.WHITE};
        border: 2px solid ${({ theme }) => theme.COLORS.WHITE};
        transition-delay: 0.1s;
    }
    &:hover::after {
        transform: skewX(30deg) translate(150%, -50%);
        background-color: ${({ theme }) => theme.COLORS.WHITE};
    }

    &:active {
        transform: scale(0.98);
    }

    &:disabled {
        cursor: default;
        filter: brightness(0.3);
    }
`;
