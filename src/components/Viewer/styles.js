import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2.5rem;
    gap: 1rem;

    border-radius: 0.8rem;

    width: 100%;
    height: 30rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    overflow-y: overlay;

    &::-webkit-scrollbar {
        width: 2.4rem;
        border-radius: 3.2rem;
    }

    &::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 2.6rem 2.6rem ${({ theme }) => theme.COLORS.BACKGROUND_900};
        border: 0.4rem transparent solid;
        border-radius: 3.2rem;
        background-clip: padding-box;
    }

    /*     
    &::-webkit-scrollbar {
        width: 1rem;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        border-radius: 3.2rem;
    } 
*/
`;
