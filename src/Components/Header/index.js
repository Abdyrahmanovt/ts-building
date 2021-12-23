import React from 'react';
import './index.css'
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header>
            <div className="container header">
                <div className="logo">
                    logo
                </div>
                <div className="header-right">
                    <Link to='/' className='nav-link'>Главная</Link>
                    <Link to='/objects' className='nav-link'>Объекты</Link>
                    <Link to='/contacts' className='nav-link'>Контакты</Link>
                    <Link to='/projects' className='nav-link'>Наши проекты</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;