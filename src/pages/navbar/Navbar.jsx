import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';

const Navbar2 = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="EMDTech-nav-bar">
            <div className="EMDTech-nav-bar-links">
                <div className="EMDTech-navbar-logo">
                    <h3>EMDTech</h3>
                </div>
                <div className="EMDTech-nav-bar-container">
                    <p><a href="#Service">Service</a></p>
                    <p><a href="#About">About</a></p>
                    <p><a href="#Blogs">Blogs</a></p>
                    <p><a href="#Store">Store</a></p>
                </div>
            </div>
            <div className="EMDTech-nav-bar-contact">
                <button type="button">Contact</button>
            </div>
            <div className="EMDTech-nav-bar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>}
                {toggleMenu && (
                    <div className="EMDTech-nav-bar-menu-container scale-up-center">
                        <div className="EMDTech-nav-bar-menu-container-section">
                            <p><a href="#Service">Service</a></p>
                            <p><a href="#About">About</a></p>
                            <p><a href="#Blogs">Blogs</a></p>
                            <p><a href="#Store">Store</a></p>
                        </div>
                        <div className="EMDTech-nav-bar-menu-contact">
                            <button type="button">Contact</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar2;
