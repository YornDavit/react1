import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import PaymentButton from "./PaymentButton";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";


const CheckoutPage = () => {
  const dispatch = useDispatch();
  const { items, totalQuality, totalAmount } = useSelector((state) => state.cart);

  // const total = cart.reduce((sum, item) => sum + item.price, 0);

  // Handle successful payment
  const handlePaymentSuccess = (paymentDetails) => {
    console.log("Payment Successful:", paymentDetails);
    // Optional: Clear the cart after successful payment
    alert("Payment Successful! Thank you for your order.");
  };

  // Handle payment errors
  const handlePaymentError = (error) => {
    console.error("Payment Error:", error);
    alert("There was an issue with your payment. Please try again.");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Checkout</h1>
      <div className="row">
        {/* Cart Summary */}
        <div className="col-md-6">
          <h3>Cart Summary</h3>
          <ul className="list-group mb-3">
            <li>
              {items.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price.toFixed(2)} x {item.quantity}
                </li>
              )
              )}
            </li>
          </ul>
        </div>

        {/* Payment Section */}
        <PaymentButton
          totalAmount={totalAmount}
          onPaymentSuccess={handlePaymentSuccess}
          onPaymentError={handlePaymentError}
        />
      </div>
    </div>
  );
};

export default CheckoutPage;
