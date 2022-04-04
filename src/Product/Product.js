import React from 'react'
import './Product.css'
import {useStateValue} from '../hooks/StateProvider'


const Product = ({id, title, price, rating, image}) => {

    const [state, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'add_To_Basket',
            item: {
                id: id,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
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
        <button className="btn" onClick={addToBasket}>
            Add to Cart
        </button>
        
      
    </div>
  )
}

export default Product
