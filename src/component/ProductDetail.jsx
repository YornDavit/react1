import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useCart } from '../CartContext'; // Import CartContext
// import {  } from "../store/productsSlice";
import { fetchProductDetail } from '../store/proudctSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { productID } = useParams();
  const dispatch = useDispatch();
  const  { productDetail, productDetailStatus, } = useSelector((state) => state.products);
  
  useEffect(() =>{
    if (productDetailStatus === "idle" || productDetail.id !== parseInt(productID)) {
      dispatch(fetchProductDetail(productID));
    }
  },[dispatch, productID])
  
  if (!productID) {
    return <p>Invalid product. Please check the URL.</p>;
  }
  
  if (productDetailStatus === "loading") return <p>Loading product details...</p>;
  if (productDetailStatus === "failed") return <p>Error: {Error}</p>;

  return (
    <div>
      {/* Your existing product design */}
      <div className="page-notification">
        {/* Breadcrumb */}
        {/* ... */}
      </div>
      <div className="directory-details pt-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* Product Description */}
              {/* ... */}
            </div>
            <div className="col-lg-4">
              {/* Contact Form */}
              {/* ... */}
            </div>
          </div>
        </div>
      </div>

      {/* Add to Cart Section */}
      <div className="add-to-cart-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <button
                className="add-to-cart-btn"
                // onClick={handleAddToCart}
                style={{
                  backgroundColor: '#ff7f50',
                  padding: '10px 20px',
                  border: 'none',
                  color: 'white',
                  fontSize: '16px',
                  cursor: 'pointer',
                  borderRadius: '5px',
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Summary */}
      <div className="cart-summary">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h3>Cart Summary</h3>
              <p>Items in Cart: {product ? product.length : 0}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
