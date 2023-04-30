import React from 'react';
import MenuIcon from '../Icons/MenuIcon.png';
import HomeIcon from '../Icons/HomeIcon.png';
import ProfileIcon from '../Icons/ProfileIcon.png';
import ShoppingCartIcon from '../Icons/ShoppingCartIcon.png';
import { useNavigate } from "react-router-dom";
import './Header.css';

function Header() {
    const navigate = useNavigate();
    return (
        <div className="header">
            <div className="header-left">
                <img src={MenuIcon} alt="Menu" className="icon" />
                <img src={HomeIcon} alt="Home" className="icon" onClick={() => navigate('/')}/>
            </div>
            <div className="header-right">
                <img src={ProfileIcon} alt="Profile" className="icon" onClick={() => navigate('/profile')}/>
                <img src={ShoppingCartIcon} alt="Shopping Cart" className="icon" onClick={() => navigate('/shoppingcart')}/>
            </div>
    </div>
  );
}

export default Header;
