import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.light_100};
    padding: 2.4rem 1.6rem;

    display: flex;
    justify-content: space-between;
    gap: 1.6rem;
    
    height: 9.3rem;
    border: 0;
    border-radius: 1.2rem;
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 2.0rem;
    line-height: 120%;
    
    .info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: .4rem;
    }

    .counting {
        display: flex;
        flex-direction: row;
        gap: .4rem;

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

    h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 120%;

        color: ${({theme}) => theme.COLORS.dark_200};
    }

    h3 {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        padding: .2rem 1.0rem .2rem .5rem;

        width: fit-content;
        height: 2.4rem;

        background: ${({theme}) => theme.COLORS.pink_100};
        
        border-radius: 12px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 2.0rem;

        text-align: right;

        color: ${({theme}) => theme.COLORS.danger_dark_100};
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 120%;

        color: ${({theme}) => theme.COLORS.dark_300};
    }

    span {
        width: clamp(2.4rem, .8rem + 1.5vw, 4.5rem);
        height: clamp(2.4rem, .8rem + 1.5vw, 4.5rem);
        display: grid;
        place-items: center;

        > img {
            width: clamp(2.4rem, .8rem + 1.5vw, 4.5rem);
            height: clamp(2.4rem, .8rem + 1.5vw, 4.5rem);
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