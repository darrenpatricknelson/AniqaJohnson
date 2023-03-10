import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [windowPosition, setWindowPosition] = useState(false);

    window.onscroll = function (e) {
        setWindowPosition(true);
    };

    return <div className='header_container'>
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
                    <li><a href='#top' target='_self' rel='noopener'>Grief & Loss</a></li>
                    <li><a href='#top' target='_self' rel='noopener'>Who I Am</a></li>
                    <li><a href='#top' target='_self' rel='noopener'>What I Do</a></li>
                    <li><a href='#top' target='_self' rel='noopener'>Get inTouch</a></li>
                </ul>
            </div>
        </div>
    </div>;
};

export default Header;