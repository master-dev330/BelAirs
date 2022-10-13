import React, { useState } from 'react';
import './navigation.css';
import logo from '../assets/img/logo.png';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

import { 
    FaFacebook,
    FaInstagram,
    FaTiktok,
    FaLinkedin,
    FaWhatsapp,
    FaShoppingBasket,
   } from "react-icons/fa";

import {
    NavLink
  } from 'reactstrap';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
            <nav className='container d-flex align-items-center justify-content-between'>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div onClick={toggle} className="humberger">
                     {isOpen ? (
                            <MdClose/>
                        ) : (
                            <FiMenu />
                        )}
                </div>
                <div className={`navbar ${isOpen ? "showMenu" : ""}`}>
                    <ul className='d-flex navLink'>
                            <li><NavLink href="/" onClick={toggle}>Comment ça marche</NavLink></li>
                            <li><NavLink href="/" onClick={toggle}>Nos Événements</NavLink></li>
                            <li><NavLink href="/" onClick={toggle}>Installations</NavLink></li>
                            <li><NavLink href="/" onClick={toggle}>partenaires</NavLink></li>
                            <li><NavLink href="/" onClick={toggle}>Jobs</NavLink></li>
                            <li><NavLink href="/" onClick={toggle}>Contacts</NavLink></li>
                    </ul>
                    <div className='d-flex align-items-center justify-content-between social'>
                        <ul className='d-flex social-icon'>
                                <li><NavLink href="/" onClick={toggle}><FaInstagram /></NavLink></li>
                                <li><NavLink href="/" onClick={toggle}><FaFacebook /></NavLink></li>
                                <li><NavLink href="/" onClick={toggle}><FaTiktok /></NavLink></li>
                                <li><NavLink href="/" onClick={toggle}><FaLinkedin /></NavLink></li>
                                <li><NavLink href="/" onClick={toggle}><FaWhatsapp /></NavLink></li>
                        </ul>
                        <ul className='shopingCard'>
                                <li><NavLink href="/" onClick={toggle}><FaShoppingBasket /></NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}

export default Navigation;
