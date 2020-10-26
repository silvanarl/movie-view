import React from 'react';
import tmdb from '../assets/tmdb_logo.svg';

const Footer = () => (
    <div className="footer-container">
        <span className="footer-text">Proyecto realizado por Silvana Ramos con</span>
        <img className="tmdb-image" src={tmdb} alt=""/>
    </div>
);

export default Footer;
