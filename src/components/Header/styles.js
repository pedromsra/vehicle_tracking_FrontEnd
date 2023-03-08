import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;
    
    position: relative;

    height: fit-content;
    width: 100%;

    padding: 8px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    background-color: ${({theme}) => theme.COLORS.secondary};
    color: ${({theme}) => theme.COLORS.light_100};

    .logoAndName {
        
        width: fit-content;
        white-space: nowrap;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        > h3 {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 2.4rem;
            line-height: 2.8rem;
        }
    
        > .logo {
            color: ${({theme}) => theme.COLORS.chart_green_100};
        }
    }
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
    
    @media (max-width: 900px){
        .navigation {
            display: none;
        }
    }

    .rectangle {
        width: 1px;
        height: 24px;

        background: ${({theme}) => theme.COLORS.light_200};
    }


`;