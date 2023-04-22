import styled from "styled-components"


export const Container = styled.div`
    position: relative;
`;

export const BoxTextArea = styled.textarea`
    height: 15rem;
    width: 100%;
    outline: none;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};
    font-style: normal;
    font-weight: 400;
    /* font-size: 1.6rem; */
    line-height: 1.9rem;
    border: none;
    border-radius: 1rem;
    padding: 2rem;

    resize: none;

    &:focus-within {
        /* border: 1..7rem solid #9333ea ; */
        outline: .3rem solid ${({theme}) => theme.COLORS.GREEN};
        outline-offset: -0.3rem;
    }

    &:invalid:focus {
        /* border: 1..7rem solid #fb7185 ; */
        outline: .3rem solid ${({theme}) => theme.COLORS.YELLOW};
        outline-offset: -0.3rem;
    }
    &:invalid:focus + div {
        display: flex;
        width: 100%;
        
        align-items: center;
        padding-left: 2rem;
        gap: 1.6rem;
        border-radius: 1rem;

        color: ${({theme}) => theme.COLORS.YELLOW};
    }

`;