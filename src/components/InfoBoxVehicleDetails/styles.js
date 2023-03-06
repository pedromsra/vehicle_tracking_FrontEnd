import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.light_100};
    padding: 0 1.2rem 1.6rem 1.6rem;
    
    border: none;
    border-radius: 0 0 1.2rem 1.2rem;
    
    display: ${({isActive}) => isActive ? "flex" : "none"};
    flex-direction: column;
    gap: 1.5rem;

    > div {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
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

    a {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 150%;

        height: 4.8rem;

        padding: 1.35rem 0;

        color: ${({theme}) => theme.COLORS.secondary};
    }

    .location {
        display: flex;
        flex-direction: column;
        gap: .3rem
    }

    .communications {
        display: flex;
        flex-direction: row;
        gap: 1.4rem;

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

    .travelHistory {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        margin-bottom: -1.1rem;
        img {
            width: 1.6rem;
            height: 1.6rem;
        }
    }

    .infos {
        display: grid;
        grid-template-areas: 
            "batery backup velocity"
            "hourM odometer satellite"
        ;
        gap: 2.8rem;
    }

    .batery {
        grid-area: batery;
    }

    .backup {
        grid-area: backup;
    }
    .velocity {
        grid-area: velocity;
    }
    .hourM {
        grid-area: hourM;
        margin-top: -1.3rem;
    }
    .odometer {
        grid-area: odometer;
        margin-top: -1.3rem;
    }
    .satellite {
        grid-area: satellite;
        margin-top: -1.3rem;
    }
`;