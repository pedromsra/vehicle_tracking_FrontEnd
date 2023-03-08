
import styled from "styled-components";

export const Container = styled.div`
    width: 2.4rem;
    height: 1.8rem;

    position: relative;

    @media (min-width: 900px){
        display: none;
    }

    .bm-burger-button {
        width: 2.4rem;
        height: 1.8rem;
    }
    /* Color/shape of burger icon bars */
    .bm-burger-bars {
        background: ${({theme}) => theme.COLORS.light_100};
        width: 2.4rem;
        height: 1.8rem;
    }

    /* Color/shape of burger icon bars on hover*/
    .bm-burger-bars-hover {
        filter: brightness(0.9);
    }

    /* Position and sizing of clickable cross button */
    .bm-cross-button {
        height: 24px;
        width: 24px;
    }

    /* Color/shape of close button cross */
    .bm-cross {
        background: ${({theme}) => theme.COLORS.light_100};
    }

    /*
    Sidebar wrapper styles
    Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
    */
    .bm-menu-wrap {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
    }

    /* General sidebar styles */
    .bm-menu {
        background: ${({theme}) => theme.COLORS.secondary};
        padding: 2.5em 1.5em 0;
        font-size: 1.15em;
    }

    /* Wrapper for item list */
    .bm-item-list {
        color: ${({theme}) => theme.COLORS.light_100};
        padding: 0.8em;
    }

    /* Individual item */
    .bm-item {
        display: inline-block;

        color: ${({theme}) => theme.COLORS.light_100};
        margin-bottom: 10px;
        text-align: left;
        text-decoration: none;
        transition: color 0.2s;
    }

    /* Styling of overlay */
    .bm-overlay {
        position: absolute;
        top: 0;
        left: 0;
    background: rgba(0, 0, 0, 0.3);
    }

    .bm-item:hover {
        filter: brightness(0.9);
    }
`;
