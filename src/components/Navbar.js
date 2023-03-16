import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {

    // to change the burger classes
    const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
    const [menu_class, setMenuClass] = useState('menu hidden');
    const [isMenuClick, setIsMenuClick] = useState(false);
    // check position of window 
    const [scrollPosition, setScrollPosition] = useState(0);

    // function to determine background colour or not
    window.onscroll = function (e) {
        setScrollPosition(window.scrollY);
    };

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClick) {
            setBurgerClass('burger-bar clicked');
            setMenuClass('menu visible');
        } else {
            setBurgerClass('burger-bar unclicked');
            setMenuClass('menu hidden');
        }
        setIsMenuClick(!isMenuClick);
    };

    return (
        <nav className={scrollPosition === 0 ? 'nav' : 'nav nav-background'}>
            {/* title of the website */}
            <div className="nav-container">
                <div className='nav-title-container'>
                    <div className="nav-title">
                        <h1>Aniqa Johnson</h1>
                    </div>
                    <div className="nav-title-description">
                        <h2>Grief, Loss & Trauma Counsellor</h2>
                    </div>
                </div>

                {/* List of links  */}
                <div className={menu_class}>
                    <ul className='nav-list'>
                        <li><a href='#top' className='nav-link' onClick={updateMenu}>Home</a></li>
                        <li><a href='#grief_loss' className='nav-link' onClick={updateMenu}>Grief & Loss</a></li>
                        <li><a href='#who_i_am' className='nav-link' onClick={updateMenu}>Who I Am</a></li>
                        <li><a href='#what_i_do' className='nav-link' onClick={updateMenu}>What I Do</a></li>
                        <li><a href='#get_in_touch' className='nav-link' onClick={updateMenu}>Get in Touch</a></li>
                    </ul>
                </div>


            </div>
            {/* burger menu for mobile devices */}
            <div className="burger-container">
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
            </div>
        </nav>
    );
};


export default Navbar;