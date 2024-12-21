import React from "react";
import ImgStaff from "../../assets/image-staff.png";

const About = () => {
  return (
    <div>
      <section
        className="mt-5"
        // style={{ position: "relative", top: "12em" }}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
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
                  className="staffImg"
                  src={ImgStaff}
                  alt="staff-imgage"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="general about">
                <h1 className="fw-bolder text-center ">ABOUT NUPREX</h1>
                <div className="text-center ">
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
                    deliveries, which is why we’ve built a service that not only
                    meets, but exceeds, customer expectations.
                  </small>
                </div>
                <div className="text-center mt-4">
                  <small>
                    Our core business focuses on time management, constant
                    innovation, and ensuring both customer and employee
                    satisfaction. At Nuprex, we take pride in our values: trust,
                    honesty, integrity, dedication, and professionalism. These
                    values are the foundation of everything we do.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
