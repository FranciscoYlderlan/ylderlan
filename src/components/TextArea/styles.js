import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    > label {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
        position: absolute;
        pointer-events: none;
        left: 5%;
        top: 9%;
    }
`;

export const BoxTextArea = styled.textarea`
    height: 15rem;
    width: 100%;
    outline: 0.2rem solid ${({ theme }) => theme.COLORS.GRAY_300};
    outline-offset: -0.2rem;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-style: normal;
    font-weight: 400;
    line-height: 1.9rem;
    border: none;
    border-radius: 1rem;
    padding: 2rem;
    &::placeholder {
        color: transparent;
    }

    resize: none;

    &:focus ~ label,
    &:valid ~ label {
        transform: translateY(-100%) scale(0.95);
        background-color: none;
        padding: 0 0.2em;
        color: ${({ theme }) => theme.COLORS.GREEN};
    }
    &:invalid:focus ~ label,
    &:invalid:not(:placeholder-shown) ~ label {
        transform: translateY(-100%) scale(0.95);
        background-color: none;
        padding: 0 0.2em;
        color: ${({ theme }) => theme.COLORS.YELLOW};
    }
    &:valid:not(:focus) ~ label {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    &:focus-within {
        outline: 0.3rem solid ${({ theme }) => theme.COLORS.GREEN};
        outline-offset: -0.3rem;
    }

    &:invalid:focus,
    &:has(input:invalid:not(:placeholder-shown)) {
        outline: 0.3rem solid ${({ theme }) => theme.COLORS.YELLOW};
        outline-offset: -0.3rem;
    }
    &:invalid:focus + div {
        display: flex;
        width: 100%;

        align-items: center;
        padding-left: 2rem;
        gap: 1.6rem;
        border-radius: 1rem;

        color: ${({ theme }) => theme.COLORS.YELLOW};
    }
`;
