import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme, active }) =>
        active ? theme.COLORS.DARK_YELLOW : theme.COLORS.BACKGROUND_700};
    color: ${({ theme, active }) =>
        active ? theme.COLORS.BACKGROUND_700 : theme.COLORS.WHITE} !important;

    border: none;
    padding: 1rem;

    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;

    transform: skew(0deg);

    &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 100%;
        left: 0;
        background: rgb(20, 20, 20);
        opacity: 0;
        z-index: -1;
        transition: all 0.5s;
    }

    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    &:hover::before {
        left: 0;
        right: 0;
        opacity: 1;
        background: ${({ theme }) => theme.COLORS.DARK_YELLOW};
    }
`;
