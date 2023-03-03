import styled from "styled-components";

export const Container = styled.div`
    width: 144rem;
    height: 102.4rem;
    
    display: grid;
    grid-template-rows: auto auto 1fr;
    grid-template-areas:
    "header"
    "where"
    "main"
    ;

    .APIMAPS {
        width: 100.8rem;
        height: 84.3rem;
        border-radius: 2rem;
    }

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

        h2 {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 2rem;
            line-height: 150%;

            color: ${({theme}) => theme.COLORS.secondary_100};
        }

        h3 {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 2rem;
            line-height: 150%;

            color: ${({theme}) => theme.COLORS.secondary_100};
        }

        p {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 10px;
            line-height: 150%;

            color: ${({theme}) => theme.COLORS.dark_500};
        }

        span {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 1.2rem;
            line-height: 150%;

            color: ${({theme}) => theme.COLORS.dark_1000};
        }

        .subSection {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 1.6rem;
            line-height: 1.9rem;

            margin: 2.4rem 0 1.6rem;

            color: ${({theme}) => theme.COLORS.dark_500};
        }

    }

    .carTravelInfo {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        margin-top: 1.6rem;
    }
    
    .carInfo {
        display: flex;
        flex-direction: row;
        gap: .8rem;
        align-items: center;

        .carPlate {
            display: flex;
            flex-direction: row;
            gap: .8rem;
            align-items: center;
        }

        .borderRight {
            height: 2rem;
            border: 1px solid ${({theme}) => theme.COLORS.light_600};
        }
    }


    .communications {
        display: flex;
        flex-direction: row;
        gap: 2.2rem;

        .communication {
            display: flex;
            flex-direction: column;
            gap: .5rem;

            > div {
                display: flex;
                flex-direction: row;
                gap: .9rem;

                > div {
                    display: flex;
                    flex-direction: row;
                    gap: .4rem;
                    align-items: center;
                }
            }

        }
    }

    .travelsContainer {
        overflow: auto;
        height: 59.5rem;
        min-width: 33.2rem;
        display: flex;
        flex-direction: column;
        gap: .8rem;
    }
`;

export const DateInputs = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 1.6rem;

    > p {
        width: 1.8rem;
        text-align: center;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 1.6rem;
    }
`;

export const Travel = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    border: none;
    border-radius: 1.2rem;
    background: ${({theme}) => theme.COLORS.light_100};
    padding: .8rem 1.1rem 1.7rem;

    .font1 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 150%;

        color: ${({theme}) => theme.COLORS.dark_500};
    }

    .font2 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 150%;

        color: ${({theme}) => theme.COLORS.dark_500};
    }

    .font3 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 150%;

        color: ${({theme}) => theme.COLORS.dark_500};
    }

    .header {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        .title {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            > h1 {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 1.4rem;
                line-height: 150%;

                color: ${({theme}) => theme.COLORS.secondary};
            }
        }

        .pathResume {
            display: flex;
            flex-direction: row;
            gap: 1.4rem;
        }

        .startStop{
            display: flex;
            flex-direction: column;
            gap: .4rem;

            > .font2 {
                width: 14.4rem;
            }
        }
    }

    .infos {
        display: flex;
        flex-direction: row;
        gap: 1.4rem;
    }

    .info {
        > .font2 {
            white-space: nowrap;
        }
    }

    .pins {
        display: ${({isActived}) => isActived ? "flex" : "none"};
        flex-direction: column;
        gap: 1.7rem;

        .pin {
            display: flex;
            flex-direction: column;
            gap: .8rem;
        }

        .pinTitle {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: .4rem;
        }

        .pinInfos {
            display: flex;
            flex-direction: row;
            gap: 1.9rem;

            margin-left: 2rem;
        }

        .pinInfo {
            display: flex;
            flex-direction: column;
            gap: .3rem;
        }
    }

    .arrowUp {
        display: ${({isActived}) => isActived ? "auto" : "none"};
    }

    .arrowDown {
        display: ${({isActived}) => isActived ? "none" : "auto"};
    }

`;