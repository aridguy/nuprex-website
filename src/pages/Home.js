import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Marquee from "react-fast-marquee";
import Slider1 from "../assets/slider1.png";
import Slider2 from "../assets/slider2.png";
import Slider3 from "../assets/slider3.png";
import Icon from "../assets/icons.png";
import AppleIco from "../assets/apstore.png";
import PlayStore from "../assets/playstore.png";
import ImgStaff from "../assets/image-staff.png";
import Vids from "../assets/animation.mp4";
import Pickup from "../assets/pickup.png";
import Delivery from "../assets/delivery.png";
import Errands from "../assets/errands.png";
import Carousel from "react-multi-carousel";
import ProfilePic from "../assets/profile0.png";
import ProfilePic1 from "../assets/profile2.png";
import ProfilePic2 from "../assets/profile3.png";
import Que from "../assets/que.png";
import "react-multi-carousel/lib/styles.css";
import Footer from "../components/Footer";

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [rating, setRating] = useState(0); // Tracks the selected rating
  // Handles updating the rating
  const handleRating = (value) => {
    setRating(value);
  };

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

      {
        // section six
        <section className="container-fluid background">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="d-flex gap-3 justify-content-center mt-5">
                  <hr />
                  <h2 className="lead">What we Offer</h2>
                  <hr />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <div className="row mt-5">
                  <div className="col-md-4 d-flex">
                    <div className="card flex-fill">
                      {" "}
                      {/* Use flex-fill to make the card grow */}
                      <h3 className="pickup">PICKUP</h3>
                      <small className="mt-4">
                        We pickup packages from any locations.
                      </small>
                      <div className="">
                        <img
                          className="pikupimage"
                          width="60%"
                          src={Pickup}
                          alt="pickup-image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex">
                    <div className="card flex-fill">
                      <h3 className="delivery">DELIVERY</h3>
                      <small className="mt-4">
                        Total experience from picking up your packages to any of
                        your destinations.
                      </small>
                      <div className="">
                        <img
                          className="pikupimage"
                          width="60%"
                          src={Delivery}
                          alt="pickup-image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex">
                    <div className="card flex-fill">
                      <h3 className="errands">ERRANDS</h3>
                      <small className="mt-4">
                        We pickup packages from any locations.
                      </small>
                      <div className="">
                        <img
                          className="pikupimage"
                          width="60%"
                          src={Errands}
                          alt="pickup-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </section>
      }

      {
        // section seven
        <section
          className="container-fluid partnerBg"
          style={{ position: "relative", top: "14em" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-4">
                <div className="mt-5 text-white" style={{ paddingTop: "8em" }}>
                  <h3 className="text-white">Partner with us</h3>
                  <small>
                    Kindly fill in the form to partner with Nuprex on helping
                    you with seamless operations of your business.
                  </small>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  style={{
                    background: "white",
                    width: "80%",
                    height: "",
                    boxShadow: "rgb(0 0 0 / 16%) 0px 10px 30px", // Softer, more faded shadow
                    borderRadius: "8px", // Optional: Rounded corners
                    padding: "2em",
                  }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <form>
                          <p>
                            <input
                              type="text"
                              placeholder="name"
                              className="form-control"
                            />
                          </p>
                          <p>
                            <input
                              type="email"
                              placeholder="Email address"
                              className="form-control"
                            />
                          </p>
                          <p>
                            <input
                              type="text"
                              placeholder="Phone number"
                              className="form-control"
                            />
                          </p>
                          <p>
                            <textarea
                              style={{ minHeight: "10em" }}
                              type="text"
                              placeholder="name"
                              className="form-control"
                            ></textarea>
                          </p>
                          <button
                            className="btn text-white"
                            style={{ background: "#ff6503", width: "151px" }}
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </section>
      }

      {
        // frequently asked question about nuprex
        <section className="container-fluid faq" style={{zIndex: "999",}}>
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="faq-content">
                  <h3 className="text-dark text-black fw-bolder">
                    Some of the things you <br /> may want to know
                  </h3>
                  <span>Explore answers without the need to</span> <br />
                  <span> pose the questions.</span>
                  <div className="mt-3">
                    <img width={120} src={Que} alt="question mark icon" />
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div
                  className="p-4 mt-5"
                  style={{
                    background: "#ffffff80",
                    borderRadius: "8px",
                    
                  }}
                >
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          What services does Nuprex Ltd offer?.
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Nuprex Ltd provides a range of logistics services
                          including express deliveries, standard deliveries,
                          warehousing, and supply chain management. We
                          specialize in efficient and reliable delivery
                          solutions tailored to meet your business needs.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          How can I contact Nuprex Ltd customer support?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the{" "}
                          <code>.accordion-flush</code> class. This is the
                          second item's accordion body. Let's imagine this being
                          filled with some actual content.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          How do I create a Nuprex Ltd account?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the{" "}
                          <code>.accordion-flush</code> class. This is the third
                          item's accordion body. Nothing more exciting happening
                          here in terms of content, but just filling up the
                          space to make it look, at least at first glance, a bit
                          more representative of how this would look in a
                          real-world application.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          How do I update my account information?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the{" "}
                          <code>.accordion-flush</code> class. This is the third
                          item's accordion body. Nothing more exciting happening
                          here in terms of content, but just filling up the
                          space to make it look, at least at first glance, a bit
                          more representative of how this would look in a
                          real-world application.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFive"
                          aria-expanded="false"
                          aria-controls="flush-collapseFive"
                        >
                          How do I delete my account?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFive"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the{" "}
                          <code>.accordion-flush</code> class. This is the third
                          item's accordion body. Nothing more exciting happening
                          here in terms of content, but just filling up the
                          space to make it look, at least at first glance, a bit
                          more representative of how this would look in a
                          real-world application.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseSix"
                          aria-expanded="false"
                          aria-controls="flush-collapseSix"
                        >
                          What payment methods do you accept?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseSix"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the{" "}
                          <code>.accordion-flush</code> class. This is the third
                          item's accordion body. Nothing more exciting happening
                          here in terms of content, but just filling up the
                          space to make it look, at least at first glance, a bit
                          more representative of how this would look in a
                          real-world application.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }

      {
        // feedback from customers
        <section
          className="container-fluid py-5"
          style={{ background: "#ff6503", position: "relative" }}
        >
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col-md-12">
                <h4 className="text-white">Our Customers feedback</h4>
                <p className=" text-white">
                  Don’t take our word for it. Trust our customers
                </p>
              </div>
              <div className="col-md-12">
                <Carousel
                  showDots={true}
                  responsive={responsive}
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                  <div
                    style={{
                      background: "white",
                      width: "95%",
                      height: "18em",
                      padding: "19px",
                      borderRadius: " 6px",
                    }}
                  >
                    <div className="">
                      <img
                        className=""
                        width={50}
                        src={ProfilePic}
                        alt="profile pics"
                      />
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          className="float-end"
                          key={star}
                          onClick={() => handleRating(star)}
                          style={{
                            cursor: "pointer",
                            fontSize: "20px",
                            color: star <= rating ? "#ff6503" : "grey", // Highlight selected stars

                            marginRight: "5px",
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <div>
                      <p className="fw-bolder">Ronald Richards</p>
                      <small className="text-black">
                        ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam
                        consequat sunt nostrud amet.
                      </small>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "white",
                      width: "95%",
                      height: "18em",
                      padding: "19px",
                      borderRadius: " 6px",
                    }}
                  >
                    <div className="">
                      <img
                        className=""
                        width={50}
                        src={ProfilePic1}
                        alt="profile pics"
                      />
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          className="float-end"
                          key={star}
                          onClick={() => handleRating(star)}
                          style={{
                            cursor: "pointer",
                            fontSize: "20px",
                            color: star <= rating ? "#ff6503" : "grey", // Highlight selected stars

                            marginRight: "5px",
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <div>
                      <p className="fw-bolder">Savannah Nguyen</p>
                      <small className="text-black">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet. Amet minim mollit non deserunt ullamco est sit
                        aliqua dolor do amet sint. Velit officia consequat duis
                        enim velit mollit. Exercitation veniam consequat sunt
                        nostrud amet.
                      </small>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "white",
                      width: "95%",
                      height: "18em",
                      padding: "19px",
                      borderRadius: " 6px",
                    }}
                  >
                    <div className="">
                      <img
                        className=""
                        width={50}
                        src={ProfilePic2}
                        alt="profile pics"
                      />
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          className="float-end"
                          key={star}
                          onClick={() => handleRating(star)}
                          style={{
                            cursor: "pointer",
                            fontSize: "20px",
                            color: star <= rating ? "#ff6503" : "grey", // Highlight selected stars

                            marginRight: "5px",
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <div>
                      <p className="fw-bolder">Ronald Richards</p>
                      <small className="text-black">
                        ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam
                        consequat sunt nostrud amet.
                      </small>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "white",
                      width: "95%",
                      height: "18em",
                      padding: "19px",
                      borderRadius: " 6px",
                    }}
                  >
                    <div className="">
                      <img
                        className=""
                        width={50}
                        src={ProfilePic1}
                        alt="profile pics"
                      />
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          className="float-end"
                          key={star}
                          onClick={() => handleRating(star)}
                          style={{
                            cursor: "pointer",
                            fontSize: "20px",
                            color: star <= rating ? "#ff6503" : "grey", // Highlight selected stars

                            marginRight: "5px",
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <div>
                      <p className="fw-bolder">Ronald Richards</p>
                      <small className="text-black">
                        ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam
                        consequat sunt nostrud amet.
                      </small>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "white",
                      width: "95%",
                      height: "18em",
                      padding: "19px",
                      borderRadius: " 6px",
                    }}
                  >
                    <div className="">
                      <img
                        className=""
                        width={50}
                        src={ProfilePic}
                        alt="profile pics"
                      />
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          className="float-end"
                          key={star}
                          onClick={() => handleRating(star)}
                          style={{
                            cursor: "pointer",
                            fontSize: "20px",
                            color: star <= rating ? "#ff6503" : "grey", // Highlight selected stars

                            marginRight: "5px",
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <div>
                      <p className="fw-bolder">Ronald Richards</p>
                      <small className="text-black">
                        ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam
                        consequat sunt nostrud amet.
                      </small>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "white",
                      width: "95%",
                      height: "18em",
                      padding: "19px",
                      borderRadius: " 6px",
                    }}
                  >
                    <div className="">
                      <img
                        className=""
                        width={50}
                        src={ProfilePic1}
                        alt="profile pics"
                      />
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          className="float-end"
                          key={star}
                          onClick={() => handleRating(star)}
                          style={{
                            cursor: "pointer",
                            fontSize: "20px",
                            color: star <= rating ? "#ff6503" : "grey", // Highlight selected stars

                            marginRight: "5px",
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <div>
                      <p className="fw-bolder">Savannah Nguyen</p>
                      <small className="text-black">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet. Amet minim mollit non deserunt ullamco est sit
                        aliqua dolor do amet sint. Velit officia consequat duis
                        enim velit mollit. Exercitation veniam consequat sunt
                        nostrud amet.
                      </small>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "white",
                      width: "95%",
                      height: "18em",
                      padding: "19px",
                      borderRadius: " 6px",
                    }}
                  >
                    <div className="">
                      <img
                        className=""
                        width={50}
                        src={ProfilePic2}
                        alt="profile pics"
                      />
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          className="float-end"
                          key={star}
                          onClick={() => handleRating(star)}
                          style={{
                            cursor: "pointer",
                            fontSize: "20px",
                            color: star <= rating ? "#ff6503" : "grey", // Highlight selected stars

                            marginRight: "5px",
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <div>
                      <p className="fw-bolder">Ronald Richards</p>
                      <small className="text-black">
                        ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam
                        consequat sunt nostrud amet.
                      </small>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "white",
                      width: "95%",
                      height: "18em",
                      padding: "19px",
                      borderRadius: " 6px",
                    }}
                  >
                    <div className="">
                      <img
                        className=""
                        width={50}
                        src={ProfilePic1}
                        alt="profile pics"
                      />
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          className="float-end"
                          key={star}
                          onClick={() => handleRating(star)}
                          style={{
                            cursor: "pointer",
                            fontSize: "20px",
                            color: star <= rating ? "#ff6503" : "grey", // Highlight selected stars

                            marginRight: "5px",
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <div>
                      <p className="fw-bolder">Ronald Richards</p>
                      <small className="text-black">
                        ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam
                        consequat sunt nostrud amet.
                      </small>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      }
      <Footer />
    </main>
  );
};

export default Home;
