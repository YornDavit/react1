import React,{ useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Header from '../src/component/Header'; 
import Home from './component/Home';
import Shop from './Shop';
import About from './About';
// import Cart from './component/Cart';
import Footer from './component/Footer';
import ProductDetail from './component/ProductDetail';
import NewArrival from './component/NewArrival';
import CheckoutPage from './component/CheckoutPage';
// import { CartProvider } from "./CartContext";



const App = () => {
  const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   setCart((prevCart) => [...prevCart, product]);
  // };
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/cart" element={<Cart />}/> */}
        <Route
          path="/product/:id"
          element={<ProductDetail  />}
        />
        <Route path="/" element={NewArrival} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/product/:id" element={ProductDetail} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
