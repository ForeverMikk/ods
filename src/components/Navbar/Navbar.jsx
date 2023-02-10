import React from 'react';


import './Navbar.css';
import hidalgo from "../../assets/hidalgo.jpeg";

const Navbar = () => {
    return (
        <nav className='navbar flex justify-between items-center'>
            <div className="img">
                <img src={hidalgo} alt="image" />
            </div>

            <div className="menu justify-items-center">
                <button className='uppercase'>Agenda 2023</button>
                <button className='uppercase'>Iniciar Sesión</button>
                <button className='uppercase'>|||</button>
            </div>
        </nav>
    )
} 

export default Navbar;