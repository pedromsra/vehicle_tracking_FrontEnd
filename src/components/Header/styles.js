import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;

    height: fit-content;
    width: 100%;

    padding: 8px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    background-color: ${({theme}) => theme.COLORS.secondary};
    color: ${({theme}) => theme.COLORS.light_100};

    //border-radius: 6px 6px 0px 0px;

    .navigation {
        display: flex;
        align-items: center;
        gap: clamp(1rem, 1rem + 1vw, 4rem);
    }

    .buttons {
        display: flex;
        align-items: center;
        gap: 1.6rem;

    }
    
    @media (max-width: 700px){
        .navigation {
            display: grid;
            grid-template-rows:repeat(2,1.4rem);
            grid-auto-flow: column; 
            column-gap:1rem;
            row-gap:1rem;
        }
    }

    .rectangle {
        width: 1px;
        height: 24px;

        background: ${({theme}) => theme.COLORS.light_200};
    }


`;