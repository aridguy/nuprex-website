import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import "react-multi-carousel/lib/styles.css";

import Sliders from "../components/Home/Sliders";
import GetApp from "../components/Home/GetApp";
import About from "../components/Home/About";
import Video from "../components/Home/Video";
import Offer from "../components/Home/Offer";
import Partner from "../components/Home/Partner";



const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Offset from the original trigger point
      easing: "ease-in-out", // Easing option
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <main>
      {<Navbar />}
      {
        // our Trusted Delivery Partner
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
        // sliding images
        <div>
          <Sliders />
        </div>
      }
      {
        // get nuprex application
        <div>
          <GetApp />
        </div>
      }

      {
        // about nuprex
        <div>
          <About />
        </div>
      }

      {
        // nuprex video demo section of the application
        <div>
          <Video />
        </div>
      }
      {
        // what we offer
        <div>
          <Offer />
        </div>
      }

      {
        // what we offer
        <div>
          <Partner />
        </div>
      }
      {
        // footer
        //<Footer />
      }
    </main>
  );
};

export default Home;
