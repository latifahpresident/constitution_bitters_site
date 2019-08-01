import styled, {keyframes } from 'styled-components';
import { fontColors, accentColors, greenColors } from '../global-styles/colors';

export const CustomButton = styled.div`
    min-height: auto;
    min-width: auto;
    border: 1px solid ${greenColors[3]};
    border-radius: 3px;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 5px;
    cursor: pointer;
    background-color:${greenColors[4]};
    color: ${fontColors[3]};
    vertical-align: middle;
    padding: 1rem;
    &:hover {
        background-color: ${props => props.home ? accentColors[3] : ''};
        transition: transform .2s;
        transform: scale(1.15);
        color: ${greenColors[2]};
       
    }
`;

const rotate = keyframes`
     0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const Caret = styled.div`
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 4px;
    vertical-align: middle;
    border-top: 4px solid;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
    &:hover {
      transform: rotateZ(-30deg);
        /* animation: ${rotate} .5s linear; */
    }
`;



 