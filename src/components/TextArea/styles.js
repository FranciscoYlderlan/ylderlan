import styled from "styled-components"


export const Container = styled.div`
    position: relative;
`;

export const BoxTextArea = styled.textarea`
    height: 250px;
    width: 100%;
    outline: none;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    border: none;
    border-radius: 10px;
    padding: 20px;

    resize: none;

    &:focus-within {
        /* border: 1.7px solid #9333ea ; */
        outline: 3px solid ${({theme}) => theme.COLORS.GREEN};
        outline-offset: -3px;
    }

    &:invalid:focus {
        /* border: 1.7px solid #fb7185 ; */
        outline: 3px solid ${({theme}) => theme.COLORS.YELLOW};
        outline-offset: -3px;
    }
    &:invalid:focus + div {
        display: flex;
        width: 100%;
        
        align-items: center;
        padding-left: 20px;
        gap: 16px;
        border-radius: 10px;

        color: ${({theme}) => theme.COLORS.YELLOW};
    }

`;