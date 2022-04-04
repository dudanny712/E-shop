import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout'


function App() {
    return ( 
        <div className = "App" >
            <Router>
                <Routes>
                    <Route path='/Checkout' element={<><Header/><Checkout/></>}/>   
                    <Route path='/' element={<><Header/><Home/><Footer/></>}/> 
                </Routes>
            </Router>
        </div>

    );
}

export default App;