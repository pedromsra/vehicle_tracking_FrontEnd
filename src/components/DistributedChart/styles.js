import styled from "styled-components";

export const Container = styled.div`

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.5rem;

    color: ${({theme}) => theme.COLORS.dark_1000};

    text-align: center;
`;