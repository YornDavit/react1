import React, { useState, useEffect } from "react";
import { use } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/proudctSlice";
import { addToCart } from "../store/cart";




const NewArrival = () => {
  const [arrivals, setArrivals] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const { products, productsStatus, error: productsError } = useSelector(
    (state) => state.products
  );

  useEffect(() =>{
    if (productsStatus === "idle") {
      // console.log("Fetching products...");
      dispatch(fetchProducts());
    }
  },[dispatch, productsStatus])

  if (productsStatus === "loading") {
    return <p>Loading...</p>;
  }

  if (productsStatus === "failure") {
    console.error("Error fetching products:", productsError);
    return <p>Error: {productsError || "Failed to load products"}</p>;
  }


  const handleToCart = () =>{
    console.log("Add to cart");
  }

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
  }

  return (
    <div className="new-arrival">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-10">
            <div
              className="section-tittle mb-60 text-center wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay=".2s"
            >
              <h2>
                new
                <br />
                arrival
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {products.length === 0  ? (
            <p>Loading new arrivals...</p>
          ) : (
            products.map((item) => (
              <div
                key={item.id}
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6"
              >
                <div
                  className="single-new-arrival mb-50 text-center wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay={item.delay}
                >
                  <div className="popular-img">
                    <img src={item.image} alt={item.title} />
                    <div className="favorit-items">
                      <img onClick={() => handleAddToCart(item)}
                        src="assets/img/gallery/favorit-card.png"
                        alt="Favorite Icon"
                      />
                    </div>
                  </div>
                  <div className="popular-caption">
                    <h3>
                      <a href={item.link}>{item.title}</a>
                    </h3>
                    <div className="rating mb-10">
                      {Array.from({ length: item.rating }, (_, i) => (
                        <i key={i} className="fas fa-star text-warning"></i>
                      ))}
                    </div>
                    <span>${item.price.toFixed(2)}</span>
                  </div>
                  {/* Add to Cart Button */}
                  
                </div>
              </div>
            ))
          )}
        </div>
        <div className="row justify-content-center">
          <div className="room-btn">
            <a href="/categories" className="border-btn">
              Browse More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
