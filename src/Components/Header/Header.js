import React, {useState} from 'react';
import MenuIcon from '../Icons/MenuIcon.png';
import HomeIcon from '../Icons/HomeIcon.png';
import ProfileIcon from '../Icons/ProfileIcon.png';
import ShoppingCartIcon from '../Icons/ShoppingCartIcon.png';
import { useNavigate } from "react-router-dom";
import './Header.css';

function Header() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    
      const handleAddItem = () => {
        navigate('/addproduct')
      };
    
      const handleSaleInventory = () => {
        // Handle viewing the sale inventory
        navigate('/logs')
      };
    
      const handleLogout = () => {
        // Handle logging out the user
      };

    return (
        <div className="header">
            <div className="header-left">
                <img src={MenuIcon} alt="Menu" className="icon" onClick={toggleMenu}/>
                <img src={HomeIcon} alt="Home" className="icon" onClick={() => navigate('/')}/>
            </div>
            <div className="header-right">
                <img src={ProfileIcon} alt="Profile" className="icon" onClick={() => navigate('/profile')}/>
                <img src={ShoppingCartIcon} alt="Shopping Cart" className="icon" onClick={() => navigate('/shoppingcart')}/>
            </div>
            {isMenuOpen && (
              <div className="menu-container">
                <div className="menu-item" onClick={handleAddItem}>
                  Add Item
                </div>
                <div className="menu-item" onClick={handleSaleInventory}>
                  Sale Inventory
                </div>
                <div className="menu-item" onClick={handleLogout}>
                  Logout
                </div>
              </div>
            )}
    </div>
  );
}

export default Header;
