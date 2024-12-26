import React from "react"; // Update path as per your project structure

const About = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <div className="page-notification">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">About</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-area">
        <div className="container">
          {/* Our Story Section */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-tittle mb-60 text-center pt-10">
                <h2>Our Story</h2>
                <p className="pera">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="about-img pb-bottom">
                <img src="" alt="Our Story" className="w-100" />
              </div>
            </div>
          </div>

          {/* Journey Start Section */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-tittle mb-60 text-center pt-10">
                <h2>Journey start from</h2>
                <p className="pera">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="about-img pb-bottom">
                <img src="" alt="Journey Start" className="w-100" />
              </div>
            </div>
          </div>

          {/* 2020 Section */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-tittle mb-60 text-center pt-10">
                <h2>2020</h2>
                <p className="pera">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
