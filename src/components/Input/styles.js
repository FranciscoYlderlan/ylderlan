import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
`;

export const BoxInput = styled.div`
    display: flex;
    width: 100%;

    align-items: center;
    padding-left: 2rem;
    gap: 1.6rem;
    border-radius: 1rem;

    outline: 0.2rem solid ${({ theme }) => theme.COLORS.WHITE};
    outline-offset: -0.2rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};

    > label {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
        position: absolute;
        left: 10%;
    }

    > input {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

        color: ${({ theme }) => theme.COLORS.WHITE};
        border: none;
        padding: 1.5rem 0;
        padding-right: 2rem;
        width: 100%;

        border-radius: 1rem;

        font-style: normal;
        font-weight: 400;
        line-height: 2.1rem;

        outline: none;

        &:focus ~ label,
        &:valid ~ label {
            transform: translateY(-100%) scale(0.95);
            background-color: none;
            padding: 0 0.2em;
            color: ${({ theme }) => theme.COLORS.GREEN};
        }
        &:invalid:focus ~ label,
        &:invalid:focus ~ svg {
            color: ${({ theme }) => theme.COLORS.YELLOW};
        }
        &:valid:not(:focus) ~ label {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }

    &:focus-within > svg {
        color: ${({ theme }) => theme.COLORS.GREEN};
    }

    &:has(input:invalid:focus) > svg {
        color: ${({ theme }) => theme.COLORS.YELLOW};
    }

    &:focus-within {
        outline: 0.2rem solid ${({ theme }) => theme.COLORS.GREEN};
    }

    &:has(input:invalid:focus) {
        outline: 0.2rem solid ${({ theme }) => theme.COLORS.YELLOW};
        outline-offset: -0.2rem;
    }
    &:has(input:invalid:focus) + div {
        display: flex;
        width: 100%;

        align-items: center;
        padding-left: 2rem;
        gap: 1.6rem;
        border-radius: 1rem;

        color: ${({ theme }) => theme.COLORS.YELLOW};
    }
`;
