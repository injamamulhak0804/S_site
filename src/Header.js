import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
export const Header = ({userEmail}) => {
  console.log(userEmail);
  
  return (
    <header className="header">
      <div className="logo">BagZone</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/cart">Cart</Link>
        {
          userEmail ?  <p>Hi, 👋 {userEmail}</p> :<Link to="/signup">Signup</Link>
        }
        
      </nav>
    </header>
  );
};

export default Header;