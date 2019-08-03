import React from 'react';
import Jumbotron from '../jumbotron/Jumbotron';
import { LandingPageContentWrapper, LandingPageContent, LandingPageBox, LandingPageContentText, LandingPageContentTextHeader, LandingPageContentList, LandingPageContentListItem } from './landing-page-styles';
import { ImageCard, InfoButton } from '../../global-styles/custom-styles';

const LandingPage = () => {
    return (
        <div>
            <Jumbotron/>
            <LandingPageContentWrapper>
                <LandingPageContent>
                    <ImageCard digest />
                    <LandingPageBox>
                        <LandingPageContentText>
                            <LandingPageContentTextHeader>
                                 Digestive Health
                            </LandingPageContentTextHeader>
                            <LandingPageContentList>
                                <LandingPageContentListItem>
                                     Improves protein digestion and mineral absorption
                                </LandingPageContentListItem>
                                <LandingPageContentListItem>
                                    Reduce gas and bloating
                                </LandingPageContentListItem>
                                <LandingPageContentListItem>
                                    Calm upset stomach and nausea
                                </LandingPageContentListItem>
                                <LandingPageContentListItem>
                                    Relieve occasional heartburn
                                </LandingPageContentListItem>
                             </LandingPageContentList>
                             <InfoButton style={{ backgroundColor: 'none'}}>
                            Shop Now
                        </InfoButton>
                        </LandingPageContentText>
                    </LandingPageBox>
                </LandingPageContent>
                <LandingPageContent>
                    <LandingPageBox>
                    <LandingPageContentText>
                            <LandingPageContentTextHeader>
                                 Weight Loss
                            </LandingPageContentTextHeader>
                            <LandingPageContentList>
                                <LandingPageContentListItem>
                                    Curb sugar cravings
                                </LandingPageContentListItem>
                                <LandingPageContentListItem>
                                    Increase absorption of fat soluble vitamins A, D, E, K
                                </LandingPageContentListItem>
                                <LandingPageContentListItem>
                                    Balance appetite
                                </LandingPageContentListItem>
                                <LandingPageContentListItem>
                                    Encourage digestive enzymes, bile & HCL production
                                </LandingPageContentListItem>
                             </LandingPageContentList>
                             <InfoButton style={{ backgroundColor: 'none'}}>
                            Shop Now
                        </InfoButton>
                        </LandingPageContentText>
                    </LandingPageBox>
                    <ImageCard/>
                </LandingPageContent>
            </LandingPageContentWrapper>
          
        </div>
    )
}

export default LandingPage