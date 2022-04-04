import React from 'react';
import './Header.css';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';




const Header = () => {
    
    
  return (
    <div className="header">
        <div className = "header__logo " >
        <StorefrontIcon className = "header__logoImage" fontSize="large"/> 
        <h2 className = "header__logoTitle">IndShop</h2>
        </div>
        <div className="header__searchbar"> 
            <input type="text" className="header__searchinput" />    
            <SearchOutlinedIcon  className="header__searchIcon"/>   
            </div>
            <div className="header__nav">
                <div className="nav__item">
                    <span className="item__lineone">
                        Hello
                    </span>
                    <span className="item__linetwo">
                        SignIn                       
                    </span>
                </div>
                <div className="nav__item">
                    <span className="item__lineone">
                        Your
                    </span>
                    <span className="item__linetwo">
                        Shop                      
                    </span>                   
                </div>
                <div className=" cart">
                <Badge badgeContent={1} color="primary">
                    <ShoppingCartIcon className="nav_cart" color="action" />
                    </Badge>
                </div>
                
                </div> 


    </div>
  )
}

export default Header