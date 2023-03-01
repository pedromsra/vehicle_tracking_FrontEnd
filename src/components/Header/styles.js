import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;

    height: 7.2rem;
    width: 100%;

    padding: 8px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({theme}) => theme.COLORS.secondary};
    color: ${({theme}) => theme.COLORS.light_100};

    //border-radius: 6px 6px 0px 0px;

    > div:nth-child(2) {
        display: flex;
        align-items: center;
        gap: 4rem;
    }

    > div:nth-child(3) {
        display: flex;
        align-items: center;
        gap: 1.6rem;
    }

    .rectangle {
        width: 1px;
        height: 24px;

        background: ${({theme}) => theme.COLORS.light_200};
    }


`;