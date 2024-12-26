import React from 'react';
import { useCart } from '../CartContext'; // Import CartContext

const Cart = () => {
  const { cartItems } = useCart(); // Access cart items from the context

  const calculateTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price, 0); // Calculate total price

  return (
    <div className="cart_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="cart_container">
              <div className="cart_title">
                Shopping Cart<small> ({cartItems.length} items in your cart) </small>
              </div>
              <div className="cart_items">
                <ul className="cart_list">
                  {cartItems.map((item, index) => (
                    <li key={index} className="cart_item clearfix">
                      <div className="cart_item_image">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                        <div className="cart_item_name cart_info_col">
                          <div className="cart_item_title">Name</div>
                          <div className="cart_item_text">{item.title}</div>
                        </div>
                        <div className="cart_item_price cart_info_col">
                          <div className="cart_item_title">Price</div>
                          <div className="cart_item_text">₹{item.price}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order_total">
                <div className="order_total_content text-md-right">
                  <div className="order_total_title">Order Total:</div>
                  <div className="order_total_amount">₹{calculateTotalPrice().toFixed(2)}</div>
                </div>
              </div>
              <div className="cart_buttons">
                <button type="button" className="button cart_button_clear">
                  Continue Shopping
                </button>
                <button type="button" className="button cart_button_checkout">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
