/* Icon position and style are customizable via props*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './DropdownMenu.css'; 

const DropdownMenu = ({ positionStyle, iconStyle = {} }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="dropdown" style={{ ...positionStyle }}>
            <button onClick={toggleDropdown} className="menu-button">
                <MenuIcon className="menu-icon" style={{ ...iconStyle }} />
            </button>
            {isOpen && (
                <div className="menu-content">
                    <Link to="/" className="menu-item" onClick={toggleDropdown}>Home</Link>
                    <Link to="/Register" className="menu-item" onClick={toggleDropdown}>Register</Link>
                    <Link to="/Login" className="menu-item" onClick={toggleDropdown}>Login</Link>
                    <Link to="/About" className="menu-item" onClick={toggleDropdown}>About</Link>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
