import React from 'react';
import Nav from '../../components/nav/Nav';
import { HomeWrapper, HomeHeader, Header, HeaderSpan} from './jumbotron-styles';
import {CustomButton, Caret } from '../../global-styles/custom-styles'

const Homepage = () => {
return (
    <HomeWrapper>
        <Nav/>
        <HomeHeader>
            <Header><HeaderSpan>Fieldsway</HeaderSpan> Constitution Bitters</Header> 
            <CustomButton home>Discover The Benefits<Caret></Caret></CustomButton>
        </HomeHeader>
    </HomeWrapper>
)
}

export default Homepage