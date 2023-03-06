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
            margin: 4rem 0 3.2rem;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 1.6rem;
            line-height: 120%;

            color: ${({theme}) => theme.COLORS.dark_100};
        }

        h2 {
            margin-bottom: 2.4rem;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 2.0rem;
            line-height: 2.3rem;

            color: ${({theme}) => theme.COLORS.dark_200};
        }

        h3 {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 1.6rem;
            line-height: 150%;

            color: ${({theme}) => theme.COLORS.dark_200};
        }

        p {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 1.2rem;
            line-height: 150%;

            color: ${({theme}) => theme.COLORS.dark_200};
        }

        .vehicles {
            position: relative;
        }

        .vehiclesList {
            margin-top: 1.8rem;
            display: flex;
            flex-direction: column;
            gap: .8rem;
            margin-right: 2.4rem;
        }

        .vehiclesDetails {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }

        .detailsTitle {
            width: 100%;
            display: flex;
            flex-direction: row;
            gap: .6rem;
            
            margin-bottom: 2.65rem;

            > img {
                width: 4rem;
                height: 4rem;
            }

        }

        .detailsBody {
            width: 100%;
            display: grid;
            grid-template-areas:
                "lastTravels report"
                "allTravels allTravels"
            ;
            gap: 4rem;

            .lastTravels {
                width: 100%;
                grid-area: lastTravels;
            }

            .report {
                width: 100%;
                grid-area: report;
            }

            .allTravels {
                width: 100%;
                position: relative;
                grid-area: allTravels;

                .input {
                    position: absolute;
                    right: 0;
                    top: 0;
                }
            }
        }



        .APIMAPS {
            width: 100%;
            height: 180px;
            margin-bottom: 1.6rem;
        }

        .borderRight {
            width: .1rem;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            background: ${({theme}) => theme.COLORS.light_200};
        }

        .borderBottom {
            height: .1rem;
            width: 100%;
            background: ${({theme}) => theme.COLORS.light_200};
        }

        .travelsFromAToB {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            .travelFromAToB {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                gap: .8rem;

                padding: 1.6rem .8rem;
            }

            .origin, .destiny {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                gap: .4rem;
            }

            .originRouteSVG {
                display: flex;
                flex-direction: column;
                gap: 0;
                position: relative;
                > img:last-child {
                    height: 1rem;
                    position: absolute;
                    left: .9rem;
                    top: 1.9rem;
                }
            }
        }
    }

    @media (max-width: 1200px) {
        main {
            display: flex;
                flex-direction: column;

            .vehicles {
                .borderRight {
                    display: none;
                }
            }

            .detailsBody{
                display: flex;
                flex-direction: column;
            }
        }
    }

    @media (min-width: 1200px) {
        main {
            white-space: nowrap;
            .vehicles {
                .borderBottom {
                    display: none;
                }
            }
        }
    }
`;

export const Table = styled.table`
    width: 100%;
    border: 1px solid ${({theme}) => theme.COLORS.table_border};
    border-radius: .8rem;

    th {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 1.6rem;
        letter-spacing: 0.05em;
        text-transform: uppercase;

        width: 100%;

        height: 4rem;
        padding: 1.2rem clamp(.8rem, .5rem + .8vw, 2.4rem);
        text-align: start;

        color: ${({theme}) => theme.COLORS.table_dark_100};
        background: ${({theme}) => theme.COLORS.table_b};
    }

    td {
        width: 100%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 150%;

        height: 8rem;
        padding: 1.6rem clamp(.8rem, .5rem + .8vw, 2.4rem);
        text-align: start;
        vertical-align: top;

        color: ${({theme}) => theme.COLORS.dark_100};
    }

    tr {
        width: 100%;
        background: ${({theme}) => theme.COLORS.table_a};
        border-radius: 0 0 .8rem .8rem;

        td:first-child{
            border-radius: 0 0 0 .8rem;
        }

        td:last-child{
            border-radius: 0 0 .8rem 0;
            text-align: end;
            vertical-align: middle;
        }

        th:first-child{
            border-radius: .8rem 0 0 0;
        }

        th:last-child{
            border-radius: 0 .8rem 0 0;
        }
    }
`;

export const Legend = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 120%;

        color: ${({theme}) => theme.COLORS.dark_400};
    }

    span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 120%;

        color: ${({theme}) => theme.COLORS.dark_300};
    }

    .legend {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: .8rem;
    }

    .info {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .circ1, .circ2, .circ3 {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
    }

    .circ1 {
        background: ${({theme}) => theme.COLORS.light_600};
    }

    .circ2 {
        background: ${({theme}) => theme.COLORS.blue_400};
    }
    .circ3 {
        background: ${({theme}) => theme.COLORS.danger_dark_200};
    }
`;