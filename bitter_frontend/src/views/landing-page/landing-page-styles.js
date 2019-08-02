import styled from 'styled-components';
import { fontColors } from '../../global-styles/colors';

export const LandingPageContentWrapper = styled.div`
     margin: 0 auto;
     padding: 1rem;
     background-color: #F2F4F5;
`;
export const LandingPageContent = styled.div`
    display: flex;
    justify-content: space-around;
`;
export const LandingPageBox = styled.div`
    /* border: 1px solid orange; */
    width: 50%;
    height: 'auto';
    background-color: #717181;
`;

export const LandingPageContentText = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${fontColors[3]};
`;

export const LandingPageContentTextHeader = styled.h3`
    font-size: 1.7rem;
    text-transform: uppercase;
    letter-spacing: 4px;
    /* border: 1px solid white; */
`;

export const LandingPageContentList = styled.ul`
    /* border: 1px solid purple; */
    list-style-type: none;
    font-size: 1rem;
`;

export const LandingPageContentListItem = styled.li`
    /* border: 1px solid orange; */
    margin-bottom: 1rem;
`;