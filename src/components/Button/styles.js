import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    background: none;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.1rem;
    
    height: 5.6rem;
    border: 0;
    border-radius: 1rem;
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.8rem;

    &:disabled {
        opacity: 0.5;
        cursor: default;

        &:hover {
            filter: brightness(1)
        }
    }

`;