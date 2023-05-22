import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    transform: scale(0.8);
    background-color: transparent;
    border: none;
    input {
        display: none;
    }

    label {
        width: 4rem;
        min-height: 4rem;
        display: block;
        cursor: pointer;
        transition: all 0.6s;
    }

    label div {
        width: 4rem;
        height: 5px;
        background-color: ${({ theme }) => theme.COLORS.DARK_YELLOW};
        position: absolute;
    }

    label {
        div:first-child {
            transition: all 0.3s;
        }
        div:nth-child(2) {
            margin: 1.8rem 0 0 0;
            transition: 0.3s;
        }

        div:last-child {
            margin: 3.6rem 0 0 0;
            transition: 0.3s;
        }
    }

    /* input:checked + label div:first-child, */
    .open-1 {
        transform: rotate(35deg) scaleX(0.6) translate(4.6rem, -5px);
        border-radius: 5rem 5rem 5rem 0;
    }

    /* input:checked + label div:last-child, */
    .open-3 {
        transform: rotate(-35deg) scaleX(0.6) translate(4.6rem, 5px);
        border-radius: 0 5rem 5rem 5rem;
    }

    /* input:checked + label div:nth-child(2), */
    .open-2 {
        border-top-right-radius: 5rem;
        border-bottom-right-radius: 5rem;

        margin-left: 0;
    }

    /* input + div, */
    .open {
        transform: rotate(130deg) scaleX(0.7) translate(0px, 8.5px);
        border-radius: 0 5rem 5rem 5rem;
    }
`;

export const Closed = styled.button`
    display: flex;
    background-color: transparent;
    border: none;
    input {
        display: none;
    }

    label {
        width: 4rem;
        min-height: 4rem;
        display: block;
        cursor: pointer;
        transition: all 0.6s;
    }

    label div {
        width: 4rem;
        height: 5px;
        background-color: ${({ theme }) => theme.COLORS.DARK_YELLOW};
        position: absolute;
    }

    label {
        div:first-child {
            transition: all 0.3s;
        }
        div:nth-child(2) {
            margin: 1.8rem 0 0 0;
            transition: 0.3s;
        }

        div:last-child {
            margin: 3.6rem 0 0 0;
            transition: 0.3s;
        }
    }
`;

export const Open = styled.button`
    display: flex;
    transform: scale(0.8);
    background-color: transparent;
    border: none;
`;

export const Options = styled.ul`
    display: grid;
`;
