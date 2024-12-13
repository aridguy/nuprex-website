import React from "react";
import Navbar from "../components/Navbar";
import Marquee from "react-fast-marquee";
import Slider1 from "../assets/slider1.png";
import Slider2 from "../assets/slider2.png";
import Slider3 from "../assets/slider3.png";
import Icon from "../assets/icons.png";
import AppleIco from "../assets/apstore.png";
import PlayStore from "../assets/playstore.png";
import ImgStaff from "../assets/image-staff.png";
import Vids from "../assets/animation.mp4"

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
        <section style={{ position: "relative", top: "7em" }} className="mt-5">
          <div className="container">
            <div className="row ">
              <div className="col-md-12 bg-sec3">
                <div className="row">
                  <div className="col-md-6 p-5 ">
                    <div className="text-center">
                      <span className="barlow600" style={{ fontSize: "3.5em" }}>
                        Get Nuprex App
                      </span>{" "}
                      <br />
                      <span
                        className="barlow600"
                        style={{
                          fontSize: "3.5em",
                          position: "relative",
                          bottom: "0.5em",
                        }}
                      >
                        at you finger tips
                      </span>
                    </div>
                    <p className="barlow200 text-center">
                      You can easily send and receive packages around Lagos with
                      our Nuprex Application.
                    </p>

                    <div className="text-center ">
                      <img width={150} src={AppleIco} alt="apple icon" />{" "}
                      &nbsp;&nbsp; &nbsp;{" "}
                      <img width={150} src={PlayStore} alt="apple icon" />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <img
                      className="hand-icon cursor-pointer"
                      src={Icon}
                      alt="picss"
                    />
                  </div>
                  <div className="col-md-1"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }

      {
        // section four
        <section className="mt-5" style={{ position: "relative", top: "12em" }}>
          <div className="container mt-5">
            <div className="row mt-5">
              <div className="col-md-5">
                <div className="general ">
                  <img
                    style={{
                      position: "absolute",
                      maxWidth: "32%",
                      bottom: "0px",
                    }}
                    className=""
                    src={ImgStaff}
                    alt="staff-imgage"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="general " style={{ padding: "3.4em" }}>
                  <h1 className="fw-bolder text-center pt-3">ABOUT NUPREX</h1>
                  <div className="text-center mt-3">
                    <small>
                      Nuprex, short for ‘New Express,’ was founded with a single
                      goal – to make goods and services more accessible by
                      providing efficient, reliable logistics across Lagos and
                      Nigeria.{" "}
                    </small>
                  </div>
                  <div className="text-center mt-4">
                    <small>
                      We understand the importance of time and precision in
                      deliveries, which is why we’ve built a service that not
                      only meets, but exceeds, customer expectations.
                    </small>
                  </div>
                  <div className="text-center mt-4">
                    <small>
                      Our core business focuses on time management, constant
                      innovation, and ensuring both customer and employee
                      satisfaction. At Nuprex, we take pride in our values:
                      trust, honesty, integrity, dedication, and
                      professionalism. These values are the foundation of
                      everything we do.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }

      {
        // section five
        <section style={{ position: "relative", top: "14em" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div>
                <video
                style={{
                  borderRadius: "8px",
                  objectFit: "cover",
                  height: "23em",
                  width: "100%",
                }}
                height={500}
                width="100%"
                autoPlay
                
                loop
                muted
              >
                <source src={Vids} type="video/mp4" />
                
              </video>
              
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    </main>
  );
};

export default Home;
