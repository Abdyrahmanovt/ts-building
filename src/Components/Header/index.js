import React from 'react';
import './index.css'
import {Link} from "react-router-dom";
import ihlas from './vektor.png'

const Header = () => {
    return (
        <header>
            <div className='header'>
            <div className="container top-menu">
                <div className="logo">
                    <Link to='/'><img src={ihlas} alt="ihlas" className='header-logo'/></Link>
                </div>
                <div className="header-right">
                    <Link to='/' className='nav-link'>Главная</Link>
                    <Link to='/projects' className='nav-link'>Наши проекты</Link>
                    <Link to='/contacts' className='nav-link'>Контакты</Link>
                </div>
            </div>
            </div>
        </header>
    );
};

export default Header;