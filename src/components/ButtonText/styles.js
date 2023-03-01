import styled from "styled-components";

export const Container = styled.button`
    background: none;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.8rem;
    
    color: ${({theme, isActive}) => isActive ? theme.COLORS.light_100 : theme.COLORS.dark_100};

    border: none;
    font-size: 1.6rem;
`;