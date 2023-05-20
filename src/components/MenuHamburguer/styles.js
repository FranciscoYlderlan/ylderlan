import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    .label-check {
        display: none;
    }

    .hamburger-label {
        width: 4rem;
        min-height: 4rem;
        display: block;
        cursor: pointer;
        transition: all 0.6s;
    }

    .hamburger-label div {
        width: 4rem;
        height: 5px;
        background-color: ${({ theme }) => theme.COLORS.DARK_YELLOW};
        position: absolute;
    }

    .line1 {
        transition: all 0.3s;
    }

    .line2 {
        margin: 1.8rem 0 0 0;
        transition: 0.3s;
    }

    .line3 {
        margin: 3.6rem 0 0 0;
        transition: 0.3s;
    }

    #label-check:checked + .hamburger-label .line1 {
        transform: rotate(35deg) scaleX(0.6) translate(4.6rem, -5px);
        border-radius: 5rem 5rem 5rem 0;
    }

    #label-check:checked + .hamburger-label .line3 {
        transform: rotate(-35deg) scaleX(0.6) translate(4.6rem, 5px);
        border-radius: 0 5rem 5rem 5rem;
    }

    #label-check:checked + .hamburger-label .line2 {
        border-top-right-radius: 5rem;
        border-bottom-right-radius: 5rem;
        width: 5.1rem;
        margin-left: 0;
    }

    #label-check:checked + .hamburger-label {
        transform: rotate(130deg) scaleX(0.7) translate(0px, 8.5px);
        border-radius: 0 5rem 5rem 5rem;
    }
`;
