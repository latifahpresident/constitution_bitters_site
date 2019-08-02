import React from 'react';
import Jumbotron from '../jumbotron/Jumbotron';
import { LandingPageContentWrapper, LandingPageContent, LandingPageBoxImage, LandingPageBox } from './landing-page-styles';
import { ImageCard } from '../../global-styles/custom-styles';

const LandingPage = () => {
    return (
        <div>
            <Jumbotron/>
            <LandingPageContentWrapper>
                <LandingPageContent>
                    <ImageCard digest />
                    <LandingPageBox>
                        box 1
                    </LandingPageBox>
                </LandingPageContent>
                <LandingPageContent>
                    <LandingPageBox>
                        box 2
                    </LandingPageBox>
                    <ImageCard/>
                </LandingPageContent>
            </LandingPageContentWrapper>
          
        </div>
    )
}

export default LandingPage