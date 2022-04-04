import React from 'react';
import './Footer.css';
import { FacebookOutlined, Instagram, Pinterest, Twitter } from '@mui/icons-material';
const Footer = () => {
  return (
    <div className="Footer">
      <div className="footercontainer">
      <div className="left">
      <h1>IndShop</h1>
          <p className="desc">
          &copy; Daniel Anthony Raju 2022
          </p>
          <div className="SocialContainer">
            
              <FacebookOutlined />
              <Instagram/>
              <Twitter />
              <Pinterest />
              
          </div>
      </div>
      <div className="center">
        <h2>Useful Links</h2>
            <ul>
              <li>Home</li>
              <li>Cart</li>
              <li>Subscribe</li>
              <li>My Account</li>
              <li>Terms & Conditions</li>
              <li>Cart</li>
              <li>Cart</li>
              </ul>
      </div>

      <div className="right">
      <h1 style={{marginRight:"10px"}}>Contact</h1>
      <br/>
      <p style={{marginTop:"10px"}}>62, Friedrich-Erbertstraße , Essen, Germany 45127</p>
      <br/>
      <p style={{marginRight:"10px"}}>+49 234 56 78</p>

      </div>

      </div>
    </div>
  )
}

export default Footer