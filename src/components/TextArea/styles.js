import styled from "styled-components"

export const Container = styled.textarea`
    height: 175px;
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
`;