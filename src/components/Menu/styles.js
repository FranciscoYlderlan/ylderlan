import styled from 'styled-components';

export const Container = styled.div`
    font-size: clamp(0.4rem, -0.1rem + 1vw, 1.6rem);

    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: fit-content;
    padding: 1rem 0.5rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    @media ${({ theme }) => theme.DEVICES.mobileS} {
    }
`;
export const Logotipo = styled.div`
    display: flex;
    align-items: center;
    width: 40%;
    img {
        width: 5rem;
        object-fit: cover;
    }

    p {
        text-align: center;
        font-weight: 500;
        padding: 1rem;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        word-wrap: break-word;
    }

    @media ${({ theme }) => theme.DEVICES.mobileS} {
    }
`;

export const Options = styled.ul`
    display: flex;
`;

export const HamburguerOptions = styled.div`
    display: grid;
`;
