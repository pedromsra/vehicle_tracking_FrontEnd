import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    min-width: 33.2rem;
    background-color: ${({theme, isActive}) => isActive ? theme.COLORS.light_100 : "transparent"};
    padding: 1.6rem 1.2rem 1.6rem 1.6rem;
    border: none;
    height: fit-content;
    border-radius: ${({opened}) => opened ? "1.2rem 1.2rem 0 0" : "1.2rem"};

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 2.0rem;
    line-height: 120%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .car {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: .6rem;

        .info {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: .4rem;
        }
    
        .counting {
            display: flex;
            flex-direction: row;
            gap: 1.6rem;
    
            .indicator {
                width: 1.6rem;
                height: 1.6rem;
                display: grid;
                place-items: center;
                
                > img {
                    width: .8rem;
                    height: .96rem;
                    
                }
            }
            
        }
    
        .title {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 1.6rem;
            line-height: 150%;
    
            color: ${({theme}) => theme.COLORS.dark_200};
        }
    
        .situation {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
    
            padding: .4rem .8rem;
    
            width: fit-content;
            height: 2.4rem;
            
            border-radius: 1.2rem;
    
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 1rem;
            line-height: 150%;
    
            text-align: right;
        }
    
        .description {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 150%;
    
            color: ${({theme}) => theme.COLORS.dark_1000};
        }
    
        span {
            width: 3.2rem;
            height: 3.2rem;
            display: grid;
            place-items: center;
        }
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;

        &:hover {
            filter: brightness(1)
        }
    }
`;