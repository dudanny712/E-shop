import React from 'react'
import './Home.css'
import homeImg from '../Assets/home_img.jpg'
import Product from '../Product/Product'
import product1Img from '../Assets/red-chilli.jpg'
import product2Img from '../Assets/Tumeric.jpg'
import product3Img from '../Assets/garammasala.jpeg'
import product4Img from '../Assets/Corriander.jpg'
import product5Img from '../Assets/pepper.webp'
import product6Img from '../Assets/cumin.jpg'
import product7Img from '../Assets/sambar.jpg'
import product8Img from '../Assets/biryani.jpeg'
import product9Img from '../Assets/chicken.jpg'



const Home = () => {
  return (
     
    <div className="home">
        <div className="home_container">
            <img src={homeImg} alt="" className="home_img" />

            <div className="home_row">
                <Product 
                    id="1"
                    title="Freshly Ground Red Chilli"
                    price={15.29}
                    rating={5}
                    image={product1Img}
                />
                <Product 
                    id="2"
                    title="Tumeric"
                    price={12.39}
                    rating={5}
                    image={product2Img}
                    />
                <Product
                    id="3"
                    title="Garam Masala "
                    price={19.99}
                    rating={3}
                    image={product3Img}
                    />

            </div>
            <div className="home_row">
                <Product
                    id="4"
                    title="Corriander Powder"
                    price={11.25}
                    rating={5}
                    image={product4Img}
                    />
                <Product 
                    id="5"
                    title="Freshly Ground Pepper Powder"
                    price={17.25}
                    rating={4}
                    image={product5Img}
                />
                <Product
                    id="6"
                    title="Freshly Ground Cumin Powder"
                    price={15.25}
                    rating={5}
                    image={product6Img}
                />
            </div>
            <div className="home_row">
                <Product
                    id="7"
                    title="Sambar Masala"
                    price={15.25}
                    rating={4}
                    image={product7Img}
                />
                <Product
                    id="8"
                    title="Biryani Masala"
                    price={18.15}
                    rating={4}
                    image={product8Img}
                />
                <Product
                    id="9"
                    title="Chicken Masala"
                    price={13.25}
                    rating={5}
                    image={product9Img}
                />
            </div>

        </div>

    </div>
  )
}

export default Home