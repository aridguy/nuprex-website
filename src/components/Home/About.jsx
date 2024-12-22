import React from "react";
import ImgStaff from "../../assets/image-staff.png";

const About = () => {
  return (
    <section
      className="mt-5"
      style={{ position: "relative", top: "7em" }}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="bg-abouts general text-center">
              <img  width="20%" className="staff" src={ImgStaff} alt="staff-imgage" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="bg-abouts general p-5 text-center">
              <h4 className="text-black fw-bolder">ABOUT NUPREX</h4>
              <div className="mt-3">
                <small>
                  Nuprex, short for ‘New Express,’ was founded with a single
                  goal – to make goods and services more accessible by providing
                  efficient, reliable logistics across Lagos and Nigeria.
                </small>
              </div>
              <div className="mt-3">
                <small>
                  We understand the importance of time and precision in
                  deliveries, which is why we’ve built a service that not only
                  meets, but exceeds, customer expectations.
                </small>
              </div>
              <div className="mt-3">
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
  );
};

export default About;
