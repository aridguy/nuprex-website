import React from "react";
import Pickup from "../../assets/pickup.png";
import Delivery from "../../assets/delivery.png";
import Errands from "../../assets/errands.png";

const Offer = () => {
  return (
    <div>
      <section
        className="container-fluid background p-4"
        data-aos="fade-up"
        data-aos-duration="1500"
        style={{}}
      >
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
                <div className="col-md-4 mt-4 position-relative">
                  <div className="background-text">PICKU</div>{" "}
                  {/* Faded background text */}
                  <div className="card flex-fill">
                    <h3 className="pickup">PICKUP</h3>
                    <small className="mt-4">
                      We pickup packages from any locations.
                    </small>
                    <div>
                      <img
                        className="pikupimage"
                        width="60%"
                        src={Pickup}
                        alt="pickup-image"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-4 position-relative">
                  <div className="background-text">DELIV</div>{" "}
                  {/* Faded background text */}
                  <div className="card flex-fill">
                    <h3 className="delivery">DELIVERY</h3>
                    <small className="mt-4">
                      Total experience from picking up your packages to any of
                      your destinations.
                    </small>
                    <div>
                      <img
                        className="pikupimage"
                        width="60%"
                        src={Delivery}
                        alt="pickup-image"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-4 position-relative">
                  <div className="background-text">ERRAN</div>{" "}
                  {/* Faded background text */}
                  <div className="card flex-fill">
                    <h3 className="errands">ERRANDS</h3>
                    <small className="mt-4">
                      We pickup packages from any locations.
                    </small>
                    <div>
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
    </div>
  );
};

export default Offer;
