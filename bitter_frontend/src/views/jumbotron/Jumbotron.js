import React from 'react';
import Nav from '../../components/nav/Nav';
import { HomeWrapper, BottleWrapper, HomeHeader, Header, HeaderSpan} from './jumbotron-styles';
import {CustomButton, Caret } from '../../global-styles/custom-styles'

const Homepage = () => {
return (
    <HomeWrapper>
        <Nav/>
        {/* <BottleWrapper> */}
        <HomeHeader>
            <Header><HeaderSpan>Fieldsway</HeaderSpan> Constitution Bitters</Header> 
            <CustomButton home>Discover The Benefits<Caret></Caret></CustomButton>
        </HomeHeader>
        {/* </BottleWrapper> */}
        
    </HomeWrapper>
)
}

export default Homepage