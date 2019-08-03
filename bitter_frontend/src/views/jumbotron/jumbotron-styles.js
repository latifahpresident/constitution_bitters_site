import styled from 'styled-components';
import trees from '../../assets/images/trees.jpg';
import bottle from '../../assets/images/constitution_bitters_bottle.png';
import { fontColors, accentColors, } from '../../global-styles/colors';

export const HomeWrapper = styled.div`
    background-image: url(${trees});
    &::before {
        content:"";
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        margin:auto;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.2);
        z-index:-1;
    }
    height: 100vh;
    min-height: auto;
    position: relative;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
    display: flex;
    justify-content: center;
    border: 2px solid white;
    color: ${accentColors[2]};
`;

export const BottleWrapper = styled.div`
    /* border: 1px solid red; */
    background-image: url(${bottle});
    &::before {
        content:"";
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        margin:auto;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.2);
        z-index:-1;
    }
    height: 100vh;
    width: 30%;
    min-height: auto;
    position: relative;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    display: flex;
    justify-content: center;
    border: 2px solid white;
    color: ${accentColors[2]};
`;

export const HomeHeader = styled.header`
    /* border: 1px solid orange; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 2.5rem;
`;

export const Header = styled.h3`
    font-size: 45px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${fontColors[3]};
    font-weight: bold;
    text-align: center;
    /* margin: 30px 0; */
`;

export const HeaderSpan = styled.span`
    color: ${accentColors[0]};
`;
