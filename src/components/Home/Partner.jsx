import React from "react";

const Partner = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      className="container-fluid partnerBg"
      style={{ position: "relative", top: "16em" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <div
              className="mt-5 text-white"
              style={{ paddingTop: "8em", position: "relative", top: "3em" }}
            >
              <h3 className="text-white">Partner with us</h3>
              <small>
                Kindly fill in the form to partner with Nuprex on helping you
                with seamless operations of your business.
              </small>
            </div>
          </div>
          <div className="col-md-6">
            <div className="partnerForm">
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
  );
};

export default Partner;
