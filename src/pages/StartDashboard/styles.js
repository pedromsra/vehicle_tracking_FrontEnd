import styled from "styled-components";

export const Tab = styled.div`
    color: ${({theme, isActive}) => isActive ? theme.COLORS.secondary : theme.COLORS.light_500};
    border-bottom: 2px solid ${({theme, isActive}) => isActive ? theme.COLORS.secondary : theme.COLORS.light_100};
`
export const APIMaps = styled.div`
    display: ${({isActive}) => isActive ? "auto" : "none" };
        margin-top: 2rem;
        width: 72.5rem;
        height: 37.7rem;
`;

export const Container = styled.div`
    width: 144rem;
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
        padding: 0 3.2rem 3.2rem;

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .indicators {
            display: flex;
            flex-direction: row;
            gap: 1.6rem;
        }

        .dashboard {
            margin-top: .5rem;

            > section:first-child{
                margin-bottom: 5.9rem;
            }
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            background: none;

            .headerTabs {
                height: 5.4rem;
                display: flex;
                flex-direction: row;
                align-items: center;
                background: ${({theme}) => theme.COLORS.light_100};
                border-radius: 1.2rem 1.2rem 0 0;

                font-family: 'Inter';
                font-style: normal;
                font-weight: 500;
                font-size: 1.4rem;
                line-height: 2.0rem;
                
                > div {
                    width: 8.8rem;
                    padding: 1.6rem 1.55rem 1.6rem;
                    display: grid;
                    text-align: center;
                }
            }
            


        }

        
    }
`;

export const TableContainer = styled.div`
    display: ${({isActive}) => isActive ? "auto" : "none"};


    .vehicles {

            overflow: auto;

            width: 58.7rem;
            
            border: .1rem solid ${({theme}) => theme.COLORS.light_100};
            background: ${({theme}) => theme.COLORS.light_100};
            border-radius:  0rem .8rem .8rem .8rem;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 2.0rem;

            color: ${({theme}) => theme.COLORS.table_dark_200};

            span {
                color: ${({theme}) => theme.COLORS.table_dark_100};
            }

            tr {
                background: transparent;
                height: 7.2rem;
            }

            tr:first-child {
            border-radius: 0 1.2rem 0 0;

                > td:last-child {
                    border-radius: 0 1.2rem 0 0;
                }
            }

            tr:last-child {
                border-radius: 0 0 1.2rem 1.2rem;

                > td:last-child {
                    border-radius: 0 0 1.2rem 0;
                }

                > td:first-child {
                    border-radius: 0 0 0 1.2rem;
                }
            }

            tr:nth-child(even){
                background-color: ${({theme}) => theme.COLORS.table_b};
            }

            tr:nth-child(odd){
                background-color: ${({theme}) => theme.COLORS.table_a};
            }

            td {
                background: transparent;
                div {
                    padding: 1.6rem 2.4rem;
                    display: flex;
                    flex-direction: column;
                }

                a {
                    color: ${({theme}) => theme.COLORS.secondary};
                }
            }

            td:first-child{
                width: 17.6rem;
            }

            td:last-child{
                width: 15.3rem;
                padding: 1.6rem;
            }
        }

        .alerts {
            overflow: auto;
            width: 58.7rem;
            height: 79.7rem;
            
            border: .1rem solid ${({theme}) => theme.COLORS.light_100};
            background: ${({theme}) => theme.COLORS.light_100};
            border-radius:  0rem .8rem .8rem .8rem;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 2.0rem;

            color: ${({theme}) => theme.COLORS.table_dark_200};

            padding: 2.4rem 1.6rem .7rem;

            button{
                border: none;
                background: none;
            }

            h3 {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-size: 1.6rem;
                line-height: 1.9rem;

                color: ${({theme}) => theme.COLORS.dark_100};

                margin-bottom: 1.6rem;
            }

            p {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 150%;

                color: ${({theme}) => theme.COLORS.table_dark_200};
            }

            .alertsContainer {
                display: flex;
                flex-direction: column;
                gap: .8rem;
            }

            .yesterdayAlert{
                margin-top: 3.2rem;
            }

        }
`;

export const AlertContainer = styled.div`
    padding: .8rem;
    background: ${({theme}) => theme.COLORS.table_b};
    border-radius: .4rem;
    
    .alertHead {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .titleContainer {
            display: flex;
            flex-direction: row;
            gap: 1.6rem;
        }

        .arrowContainer {
            display: grid;
            place-items: center;

            .arrowUp {
                display: ${({isActive}) => isActive ? "auto" : "none"};
            }

            .arrowDown {
                display: ${({isActive}) => isActive ? "none" : "auto"};
            }
        }
    }

    .alertBody {
        margin-top: 1.6rem;

        display: ${({isActive}) => isActive ? "flex" : "none" };
        flex-direction: column;
        justify-content: flex-start;
        gap: 1.6rem;

        p {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 150%;
        }

        span {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 1.2rem;
            line-height: 150%;
        }

        .alertInfo {
            display: flex;
            flex-direction: row;
            gap: 4.5rem;

            .momentContainer{
                display: flex;
                flex-direction: row;
                gap: .9rem;
            }

            .alertMoment {
                display: flex;
                flex-direction: row;
                gap: .4rem;
            }
        }

    }
`;