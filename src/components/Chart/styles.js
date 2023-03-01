import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2.4rem;

    width: 100%;

    .myChart {
        width: 72.5rem;
        height: 3.2rem;

        div {
            height: 3.2rem;
            min-width: 1.7rem;
        }

    }

    .legend {
        width: 43.7rem;
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 9.5rem auto 16.7rem;
        grid-template-areas: 
        "A C E"
        "B D F"        
        ;

        > div {
            display: flex;
            flex-direction: row;
            gap: .8rem;

            p {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-size: 1.6rem;
                line-height: 120%;

                color: ${({theme}) => theme.COLORS.dark_200};

                margin-bottom: .4rem;
            }

            span {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 1.4rem;
                line-height: 120%;

                color: ${({theme}) => theme.COLORS.dark_300};
            }

            > div:first-child {
                height: 1.8rem;
                width: 1.8rem;
                border-radius: 50%;
            }
        }
    }

    .rect1, .circ1 {
        background: ${({theme}) => theme.COLORS.chart_green};
    }

    .rect2, .circ2 {
        background: ${({theme}) => theme.COLORS.chart_olive};
    }

    .rect3, .circ3 {
        background: ${({theme}) => theme.COLORS.chart_yellow};
    }

    .rect4, .circ4 {
        background: ${({theme}) => theme.COLORS.chart_lightYellow};
    }

    .rect5, .circ5 {
        background: ${({theme}) => theme.COLORS.chart_red};
    }

    .rect6, .circ6 {
        background: ${({theme}) => theme.COLORS.chart_black};
    }

    .leg1 {
        grid-area: A;
        margin-bottom: 1.8rem;
    }

    .leg2 {
        grid-area: B;
    }

    .leg3 {
        grid-area: C;
        margin:0 3.2rem 1.8rem;
    }

    .leg4 {
        grid-area: D;
        margin:0 3.2rem;
    }

    .leg5 {
        grid-area: E;
        margin-bottom: 1.8rem;
    }

    .leg6 {
        grid-area: F;
    }

`;