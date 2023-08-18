import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 .5rem 0 1rem;
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



/* ===== Scrollbar CSS ===== */
  /* Firefox */
  
    scrollbar-width: auto;
    scrollbar-color: #6c6c6c ;
  
  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #6c6c6c;
    border-radius: 10px;
    border: 3px solid #6c6c6c;
  }


    @media ${({ theme }) => theme.DEVICES.laptop} {
        height: 25rem;
    }
`;
