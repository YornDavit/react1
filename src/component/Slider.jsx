import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./Slider.css"; // Add your custom styles here

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 2 seconds interval
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      bgClass: "slider-bg1",
      title: "fashion\nchanging\nalways",
      link: "shop.html",
    },
    {
      id: 2,
      bgClass: "slider-bg2",
      title: "fashion\nchanging\nalways",
      link: "shop.html",
    },
    {
      id: 3,
      bgClass: "slider-bg3",
      title: "fashion\nchanging\nalways",
      link: "shop.html",
    },
  ];

  return (
    <div className="slider-area">
      {/* Mobile Device Show Menu */}
      <div className="header-right2 d-flex align-items-center">
        {/* Social */}
        <div className="header-social d-block d-md-none">
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
        <div className="search d-block d-md-none">
          <ul className="d-flex align-items-center">
            <li className="mr-15">
              <div className="nav-search search-switch">
                <i className="ti-search"></i>
              </div>
            </li>
            <li>
              <div className="card-stor">
                <img src="assets/img/gallery/card.svg" alt="Cart" />
                <span>0</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Slider Section */}
      <Slider {...settings} className="slider-active dot-style">
        {slides.map((slide) => (
          <div key={slide.id} className={`single-slider ${slide.bgClass} hero-overly slider-height d-flex align-items-center`}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-9">
                  <div className="hero__caption">
                    <h1>{slide.title.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}</h1>
                    <a href={slide.link} className="btn">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
