import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.light_100};
    color: ${({theme}) => theme.COLORS.dark_300};

    border-radius: 1rem;
    border: .1rem solid ${({theme}) => theme.COLORS.input_border};

    > input {
        width: 100%;
        height: 4rem;
        padding: 1.2rem 1.6rem;

        color: ${({theme}) => theme.COLORS.dark_300};
        background: transparent;
        border: 0;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 1.6rem;

        &:placeholder {
            color: ${({theme}) => theme.COLORS.dark_300};
        }

    }

    span {
        width: 1.6rem;
        height: 1.6rem;
        display: grid;
        place-items: center;
        margin-left: .8rem;

        > img {
            width: 1.6rem;
            height: 1.6rem;
        }
    }
`;