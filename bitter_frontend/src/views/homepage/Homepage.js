import React from 'react';
import { HomeWrapper, HomeBackgroundImage, BottleWrapper, BottleImage, HomeHeader, Header, HeaderSpan} from './homepage-styles';
import {CustomButton, Caret } from '../../global-styles/custom-styles'
import {accentColors } from '../../global-styles/colors'
const Homepage = () => {
return (
    <HomeWrapper>
        {/* <HomeBackgroundImage></HomeBackgroundImage> */}
        {/* <BottleWrapper>
            <BottleImage src={bottle}/>
        </BottleWrapper> */}
        <HomeHeader>
            <Header><HeaderSpan>Fieldsway</HeaderSpan> Constitution Bitters</Header> 
            <CustomButton home>Discover The Benefits<Caret></Caret></CustomButton>
        </HomeHeader>
    </HomeWrapper>
)
}

export default Homepage