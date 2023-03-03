import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    grid-area: where;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 2.0rem;
    color: ${({theme}) => theme.COLORS.light_500};

    padding: 1.6rem 3.2rem;
    margin-bottom: 1.9rem;

    .where{
        display: flex;
        flex-direction: row;
        gap: 1.6rem;
    }
    
    span {
        width: 1.6rem;
        height: 1.6rem;
        display: grid;
        place-items: center;
    }
    
    .borderBottom {
        width: 100%;
        height: .1rem;
        background: ${({theme}) => theme.COLORS.light_200};
    }
`;