import React, { useState } from "react";
import Carousel from "react-multi-carousel";

import ProfilePic from "../../assets/profile0.png";
import ProfilePic1 from "../../assets/profile2.png";
import ProfilePic2 from "../../assets/profile3.png";

const Feedback = () => {
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
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      className="container-fluid"
      style={{ background: "#ff6503", position: "relative", padding: "3em"}}
    >
      <div className="container pt-5">
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
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
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
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
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
  );
};

export default Feedback;
