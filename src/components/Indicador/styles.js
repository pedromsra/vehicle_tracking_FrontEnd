import styled from 'styled-components'

export const Container = styled.div`
    display: flex;

    width: 100%;

    border: none;
    gap: 1.6rem;

    background: none;

    .infoBoxContainer {
        width: 100%;
    }

    @media (max-width: 1400px){
        display: grid;
        grid-template-rows:repeat(2,9.3rem);
        grid-auto-flow: column; 
        column-gap:1rem;
        row-gap:1rem;
    }
`;

