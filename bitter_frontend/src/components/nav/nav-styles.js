import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { greenColors, fontColors } from '../../global-styles/colors';

export const NavWrapper = styled.nav`
    /* border: 1px solid green; */
    min-height: 43px;
    background-color: ${greenColors[3]};
    display: flex;
    align-items: center;
`;

export const NavLinkContainer = styled.div`
    /* border: 1px solid orange; */
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-size: 1.2rem;
`;

export const NavLinks = styled(NavLink)`
    color: white;
    text-decoration: none;
    .active {
        text-decoration: underline;
    }
`;