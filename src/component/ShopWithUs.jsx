import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";

const ShopWithUs = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const { addToCart } = useCart(); // Access addToCart function

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));

    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    if (selectedPrice) {
      const [minPrice, maxPrice] = selectedPrice.split("-").map(Number);
      filtered = filtered.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }

    if (selectedColor) {
      filtered = filtered.filter((product) => product.color === selectedColor);
    }

    if (selectedType) {
      filtered = filtered.filter((product) => product.type === selectedType);
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedPrice, selectedColor, selectedType, products]);

  return (
    <div className="category-area">
      {/* UI structure remains the same */}
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="single-new-arrival mb-50 text-center">
              <div className="popular-img">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="popular-caption">
                <h3>
                  <a href={`/product/${product.id}`}>{product.title}</a>
                </h3>
                <span>${product.price}</span>
                <button
                  className="btn btn-primary mt-2"
                  onClick={() => addToCart(product)} // Add to cart
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopWithUs;
