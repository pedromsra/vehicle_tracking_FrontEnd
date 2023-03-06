import styled from "styled-components";

export const Container = styled.section`

    .title {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 120%;

        margin-bottom: 3.2rem;

        color: ${({ theme }) => theme.COLORS.dark_100};

    }
`;