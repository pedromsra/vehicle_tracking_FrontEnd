import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    padding: 1.3rem;

    background-color: ${({theme}) => theme.COLORS.light_100};
    color: ${({theme}) => theme.COLORS.dark_300};

    border-radius: 1rem;
    border: .1rem solid ${({theme}) => theme.COLORS.input_border};

    > input {
        width: 100%;

        color: ${({theme}) => theme.COLORS.dark_200};
        background: transparent;
        border: 0;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 1.6rem;

        &:placeholder {
            color: ${({theme}) => theme.COLORS.dark_200};
        }

    }

    span {
        width: 2.4rem;
        height: 2.4rem;
        display: grid;
        place-items: center;

        > img {
            width: 2.4rem;
            height: 2.4rem;
        }
    }
`;