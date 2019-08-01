import styled from 'styled-components';
import trees from '../../assets/images/trees.jpg';
import amber_trees from '../../assets/images/amber_trees.jpg';
import { fontColors, accentColors, greenColors } from '../../global-styles/colors';
import { green } from 'ansi-colors';

export const HomeWrapper = styled.div`
position: relative;
    background-image: url(${trees});
    /* filter: blur(8px); */
    &::before {
        /* background: rgba(0, 0, 0, 0.8); */
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
    /* background-image: url(${amber_trees}); */
    height: 100vh;
    min-height: auto;
    position: relative;
    /* opacity: .85; */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
    display: flex;
    justify-content: center;
    border: 2px solid white;
    /* color: ${fontColors[3]}; */
    color: ${accentColors[2]};
  /* span: {
      color: ${accentColors[1]}
  } */
    /* font-family: 'Roboto' */
`;

export const HomeBackgroundImage = styled.div`

`;
export const BottleWrapper = styled.div`
    /* border: 1px solid red; */
    width: 30%;
   /* display: flex;
   justify-content: center; */
    position: relative;
   /* right: 150px; */
    /* opacity: .65; */
    /* background-attachment: fixed;
    background-position: center; */
    background-repeat: no-repeat;
    /* background-size: cover; */
`;

export const BottleImage = styled.img`

    position: relative;
    right: 70px;
    margin-top: 5rem;
`;

export const HomeHeader = styled.header`
    /* border: 1px solid orange; */
    /* margin-right: 10rem; */
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
// original height width: 2398 height: 3199

//657 450 bottle 