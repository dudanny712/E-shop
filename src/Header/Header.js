import React from 'react';
import './Header.css';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import {useStateValue} from '../hooks/StateProvider'



const Header = () => {
    const [{basket}, dispatch] = useStateValue();
    
  return (
    <div className="header">
        <Link to="/" style={{textDecoration:"none"}}>
        <div className = "header__logo " >
        <StorefrontIcon className = "header__logoImage" fontSize="large"/> 
        <h2 className = "header__logoTitle">IndShop</h2>
        </div>
        </Link>
        <div className="header__searchbar"> 
            <input type="text" className="header__searchinput" />    
            <SearchOutlinedIcon  className="header__searchIcon"/>   
            </div>
            <div className="header__nav">
            <Link to="/login" style={{ textDecoration: "none" }}>
                <div className="nav__item">
                    <span className="item__lineone">
                        Hello
                    </span>
                    <span className="item__linetwo">
                        SignIn                       
                    </span>
            
                </div>
                </Link>
                <div className="nav__item">
                    <span className="item__lineone">
                        Your
                    </span>
                    <span className="item__linetwo">
                        Shop                      
                    </span>                   
                </div>
                <Link to="/Checkout" style={{textDecoration:"none"}}>
                <div className=" cart">
                <Badge badgeContent={basket.length} color="primary">
                    <ShoppingCartIcon className="nav_cart" color="action" />
                    </Badge>
                </div>
                </Link>
                
                
                </div> 


    </div>
  )
}

export default Header