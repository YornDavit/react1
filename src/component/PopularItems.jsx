import React, { useState, useEffect } from "react";

const PopularItems = () => {
  const [categories, setCategories] = useState([]);

  // Fetch categories from the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        // Format the categories into an array of objects
        const formattedCategories = data.map((category, index) => ({
          id: index + 1,
          imgSrc: `https://via.placeholder.com/150?text=${category}`, // Placeholder image with category text
          label: category.charAt(0).toUpperCase() + category.slice(1), // Capitalize the category
          link: `/shop/${category}`, // Link to a shop page for each category
          delay: `${0.1 * (index + 1)}s`, // Staggered animation delay
        }));
        setCategories(formattedCategories);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="popular-items pt-50">
      <div className="container-fluid">
        <div className="row">
          {categories.length === 0 ? (
            <p>Loading categories...</p>
          ) : (
            categories.map((category) => (
              <div
                key={category.id}
                className="col-lg-3 col-md-6 col-sm-6"
              >
                <div
                  className="single-popular-items mb-50 text-center wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay={category.delay}
                >
                  <div className="popular-img">
                    <img src={category.imgSrc} alt={category.label} />
                    <div className="img-cap">
                      <span>{category.label}</span>
                    </div>
                    <div className="favorit-items">
                      <a href={category.link} className="btn">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularItems;
