import React from 'react';
import Nav from '../nav/Nav';
import {faTwitter, faLinkedin, faGithub} from '@fortawesome/fontawesome-free-brands';
import { SocialBanner } from './header-styles';

const Header = ()  => {
    return (
        <header>
            <SocialBanner>
                social
            </SocialBanner>
            <Nav/>
        </header>
    )
}

export default Header