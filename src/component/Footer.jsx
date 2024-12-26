import React from "react";

const Footer = () => {
  return (
    <div className="footer-area footer-padding">
      <div className="container-fluid">
        <div className="row d-flex justify-content-between">
          {/* Footer Logo and About Section */}
          <div className="col-xl-3 col-lg-3 col-md-8 col-sm-8">
            <div className="single-footer-caption mb-50">
              <div className="single-footer-caption mb-30">
                <div className="footer-logo mb-35">
                  <a href="index.html">
                    <img src="assets/img/logo/logo2_footer.png" alt="Logo" />
                  </a>
                </div>
                <div className="footer-tittle">
                  <div className="footer-pera">
                    <p>
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </p>
                  </div>
                </div>
                <div className="footer-social">
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
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Quick links</h4>
                <ul>
                  <li>
                    <a href="#">Image Licensin</a>
                  </li>
                  <li>
                    <a href="#">Style Guide</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Shop Category Section */}
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Shop Category</h4>
                <ul>
                  <li>
                    <a href="#">Image Licensin</a>
                  </li>
                  <li>
                    <a href="#">Style Guide</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Partners Section */}
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Partners</h4>
                <ul>
                  <li>
                    <a href="#">Image Licensin</a>
                  </li>
                  <li>
                    <a href="#">Style Guide</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Get in Touch Section */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Get in touch</h4>
                <ul>
                  <li>
                    <a href="#">(89) 982-278 356</a>
                  </li>
                  <li>
                    <a href="#">demo@colorlib.com</a>
                  </li>
                  <li>
                    <a href="#">67/A, Colorlib, Green road, NYC</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
