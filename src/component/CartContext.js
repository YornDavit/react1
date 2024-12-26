// // CartContext.js
// import React, { createContext, useState, useContext } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]); // Store items in the cart

//   const addToCart = (product) => {
//     setCartItems((prevItems) => [...prevItems, product]); // Add new product to the cart
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default useCart = () => useContext(CartContext);
