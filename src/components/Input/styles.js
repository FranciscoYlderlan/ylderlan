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

    outline: 0.2rem solid ${({ theme }) => theme.COLORS.GRAY_300};
    outline-offset: -0.2rem;

    color: ${({ theme }) => theme.COLORS.GRAY_300};

    > label {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
        position: absolute;
        pointer-events: none;
        left: 15%;
    }

    > input {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

        color: ${({ theme }) => theme.COLORS.WHITE};
        border: none;
        padding: 1.5rem 0;
        padding-right: 2rem;
        width: 100%;

        border-radius: 1rem;

        &::placeholder {
            color: transparent;
        }

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
        &:invalid:not(:placeholder-shown) ~ label {
            transform: translateY(-100%) scale(0.95);
            background-color: none;
            padding: 0 0.2em;
            color: ${({ theme }) => theme.COLORS.YELLOW};
        }
        &:valid:not(:focus) ~ label {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }

    &:focus-within > svg {
        color: ${({ theme }) => theme.COLORS.GREEN};
    }

    &:has(input:invalid:focus) > svg,
    &:has(input:invalid:not(:placeholder-shown)) > svg {
        color: ${({ theme }) => theme.COLORS.YELLOW};
    }

    &:focus-within {
        outline: 0.2rem solid ${({ theme }) => theme.COLORS.GREEN};
    }

    &:has(input:invalid:focus),
    &:has(input:invalid:not(:placeholder-shown)) {
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
    @media ${({ theme }) => theme.DEVICES.laptop} {
        > label {
            left: 10%;
        }
    }
`;
