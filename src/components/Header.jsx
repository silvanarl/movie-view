import React from 'react';
import logo from '../assets/clapperboard.svg';

const Header = () => (
    <>
        <img src={logo} alt="movie view logo"/>
        <h1 className="header-title">movie view</h1>
    </>
);
export default Header;
