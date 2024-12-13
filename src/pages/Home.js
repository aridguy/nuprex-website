import React from "react";
import Navbar from "../components/Navbar";
import Marquee from "react-fast-marquee";
import Slider1 from "../assets/slider1.png";
import Slider2 from "../assets/slider2.png";
import Slider3 from "../assets/slider3.png";

const Home = () => {
  return (
    <main>
      {<Navbar />}
      {
        // section one
        <section>
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-12">
                <p className="brand-blue text-center display-2 barlow600">
                  Your Trusted Delivery Partner
                </p>
                <p className="barlow200 text-center">
                  You can easily send and receive packages around Lagos with our
                  Nuprex Web Application.
                </p>
                <p className="text-white text-center ">
                  <button
                    style={{
                      width: "155px",
                      height: "46px",
                      background: "#0041a9",
                      color: "#fff",
                      borderRadius: "8px",
                    }}
                    className="border-0 outline-0"
                  >
                    Get Started
                  </button>
                </p>
              </div>
            </div>
          </div>
        </section>
      }

      {
        // section two
        <section className="mt-5">
          <div className="container-fluid">
            <div className="row mt-5">
              <div className="col-md-12">
                <Marquee autoFill={true}>
                  <div className="d-flex gap-2">
                    <img
                      width="251px"
                      src={Slider1}
                      alt="slider one"
                      loading="lazy"
                    />
                    <img
                      width="251px"
                      src={Slider2}
                      alt="slider one"
                      loading="lazy"
                    />
                    <img
                      width="251px"
                      src={Slider3}
                      alt="slider one"
                      loading="lazy"
                    />
                    <img
                      width="251px"
                      src={Slider1}
                      alt="slider one"
                      loading="lazy"
                    />
                    <img
                      width="251px"
                      src={Slider2}
                      alt="slider one"
                      loading="lazy"
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </section>
      }

      {
        // section three
        <section className="mt-5">
          <div className="container">
            <div className="row ">
              <div className="col-md-12">
                <div className="bg-sec3"></div>
              </div>
            </div>
          </div>
        </section>
      }
    </main>
  );
};

export default Home;
