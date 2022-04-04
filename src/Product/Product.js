import React from 'react'
import './Product.css'



const Product = ({id, title, price, rating, image}) => {
  return (
    <div className="product">
        <div className="product_info">
            <p className="title">
                {title}
            </p>
            <p className="product_price">
                <small>€</small>
                <strong>{price}</strong>
            </p>
            
            <div className="product_rating">
            {Array(rating)
            .fill()
            .map((_,i)=>(<p>⭐</p>))}
            </div>
        </div>
            <img src={image} alt="prodImg" className="product_img" />
        <button className="btn">
            Add to Cart
        </button>
        
      
    </div>
  )
}

export default Product
