import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
               <div className="header">
            <nav>
                <a href="/">Home</a>
                <a href="">About</a>
                <a href="">Dental Services</a>
                <a href="/doctors">Doctors Only</a>
                <a href="">Blog</a>
                <a href="">Contact</a>
            </nav>
        </div>
        </div>
    );
};

export default Header;