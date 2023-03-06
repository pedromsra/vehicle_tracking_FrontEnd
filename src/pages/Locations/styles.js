import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: auto auto 1fr;
    grid-template-areas:
    "header"
    "where"
    "main"
    ;


    main {
        grid-area: main;
        width: 100%;
        padding: 0 3.2rem;

        display: flex;
        flex-direction: row;
        gap: 2.4rem;

        h1 {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 2.0rem;
            line-height: 2.3rem;

            color: ${({theme}) => theme.COLORS.dark_500};
        }
    }

    .vehicles {
        min-width: 35.2rem;
        padding: 0 .6rem;
    }

    
    .findVehicles {
        width: 33.2rem;
        margin: 1.8rem 0 1.9rem;
    }

    .vehiclesContainer {
        height: 74.3rem;
        overflow: auto;
        display: flex;
        flex-direction: column;
        gap: .8rem;
    }

    .APIMAPS {
        width: 100%;
        height: 84.3rem;
        border-radius: 2rem;
    }
`;