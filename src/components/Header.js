import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    window.onscroll = function (e) {
        setScrollPosition(window.scrollY);
    };

    return <div className={scrollPosition === 0 ? 'header_container' : 'header_container header_container_background'}>
        <div className="header_inner_container">
            <div className='header_title_container'>
                <div className="header_title">
                    <h1>Aniqa Johnson</h1>
                </div>
                <div className="header_title_description">
                    <h2>Grief, Loss & Trauma Counsellor</h2>
                </div>
            </div>
            <div className='header_shortcuts_container'>
                <ul className='navbar_list'>
                    <li><a href='#top' target='_self' rel='noopener'>Home</a></li>
                    <li><a href='#grief_loss' target='_self' rel='noopener'>Grief & Loss</a></li>
                    <li><a href='#who_i_am' target='_self' rel='noopener'>Who I Am</a></li>
                    <li><a href='#what_i_do' target='_self' rel='noopener'>What I Do</a></li>
                    <li><a href='#get_in_touch' target='_self' rel='noopener'>Get in Touch</a></li>
                </ul>
            </div>
        </div>
    </div>;
};

export default Header;