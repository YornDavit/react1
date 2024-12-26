import React, { useEffect, useState } from 'react'; // Assuming you have a CSS file for styles
import { Link } from 'react-router-dom';
import CartTap from './CartTab';
import { useSelector } from 'react-redux';
const Header = () => {

  const [open, setOpen] = useState(false); // State to manage CartTap visibility
  const handleToggleCart = () => {
    setOpen((prevState) => !prevState); // Toggle the open state
  };

  const [totalQuality, setTotalQuality] = useState(0);

  const carts = useSelector((store) => store.cart.items);

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuality(total);
  }, [carts]);

  
  return (
    <header>
      {/* Header Start */}
      <div className="header-area">
        <div className="main-header header-sticky">
          <div className="container">
            <div className="menu-wrapper d-flex align-items-center justify-content-between">
              <div className="header-left d-flex align-items-center">
                {/* Logo */}
                <div className="logo">
                  <a href="index.html">
                    <img src="assets/img/logo/logo.png" alt="Logo" />
                  </a>
                </div>
                {/* Main-menu */}
                <div className="main-menu d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/shop">Shop</a>
                      </li>
                      <li>
                        <a href="/about">About</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                        <ul className="submenu">
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog_details.html">Blog Details</a>
                          </li>
                          <li>
                            <a href="elements.html">Elements</a>
                          </li>
                          <li>
                            <a href="product_details.html">Product Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header-right1 d-flex align-items-center">
                {/* Social */}
                <div className="header-social d-none d-md-block">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://bit.ly/sai4ull">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </div>
                {/* Search Box */}
                <div className="search d-none d-md-block">
                  <ul className="d-flex align-items-center">
                    <li className="mr-15">
                      <div className="nav-search search-switch">
                        <i className="ti-search"></i>
                      </div>
                    </li>
                    
                    {/* Cart Section */}
                  <li className="nav-item position-relative">
                    <button
                      type="button"
                      onClick={handleToggleCart}
                      className="position-relative"
                      style={{
                        border: "none",
                        outline: "none",
                        background: "#fff",
                        color: "#000",
                        cursor: "pointer",
                      }}
                    >
                      Cart
                      <i className="fa fa-shopping-cart p-2"></i>
                      <span
                        style={{ fontSize: "14px", color: "#fff" }}
                        className="position-absolute top-0 start-100 translate-middle bg-secondary badge rounded-pill text-bg-secondary"
                      >
                        {totalQuality}
                      </span>
                    </button>
                  </li>
                  </ul>
                </div>
              </div>
              {/* Mobile Menu */}
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CartTap Container */}
      {open && (
            <div
              style={{
                position: "absolute",
                right: "20px",
                top: "60px",
                width: "300px",
                background: "#fff",
                border: "1px solid #ddd",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                zIndex: 1000,
              }}
            >
              <CartTap closeCart={() => setOpen(false)} />
            </div>
          )}
      {/* Header End */}
    </header>
  );
};

export default Header;
