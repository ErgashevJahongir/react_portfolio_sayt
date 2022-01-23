import React from 'react';
import './topbar.css';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={`topbar ${menuOpen ? 'active' : ''}`}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        JOHA
                    </a>
                    <div className="itemContainer">
                        <i className="bi bi-person-fill icon"></i>
                        <span>+998 90 377 89 90</span>
                    </div>
                    <div className="itemContainer">
                        <i className="bi bi-envelope icon"></i>
                        <span>jahongirergawev2@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div
                        className="hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
