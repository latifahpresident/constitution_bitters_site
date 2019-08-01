import styled from 'styled-components';
import {NavLink } from 'react-router-dom';

export const NavWrapper = styled.nav`
    border-radius: 3px;
    padding: 0.625rem 0;
    margin-bottom: 20px;
    color: white;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const NavLinkContainer = styled.div`
    /* border: 1px solid orange; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 20%;
    font-size: 1.2rem;
    margin: 1.5rem 1.5rem 0 0;
`;
export const NavLinks = styled(NavLink)`
    color: white;
    text-decoration: none;
    .active {
        text-decoration: underline;
    }
`;