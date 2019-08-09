import React from 'react';
import { NavWrapper, NavLinks, NavLinkContainer, } from './nav-styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return (
        <NavWrapper>
            <NavLinkContainer>
                <NavLinks 
                    exact to='/'
                    className='active'
                >
                    Home
                </NavLinks>
                <NavLinks 
                    exact to='/shop'
                    className='active'
                >
                        Shop
                </NavLinks>
                <NavLinks 
                    exact to='/about'
                    className='active'
                >
                        About
                </NavLinks>
                <NavLinks 
                    exact to='/cart'
                    className='active'
                >
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </NavLinks>
                <NavLinks 
                    exact to='/profile'
                    className='active'
                >
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </NavLinks>
            </NavLinkContainer>
        </NavWrapper>
    )
}

export default Nav