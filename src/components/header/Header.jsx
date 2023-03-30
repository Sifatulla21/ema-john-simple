import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className="headerMain">
                <img src="Logo.svg" alt=""/>
                <div className="links">
                    <a href="#">Order</a>
                    <a href="#">Order Review</a>
                    <a href="#">Manage Inventory</a>
                    <a href="#">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Header;