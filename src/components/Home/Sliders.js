import React from "react";
import Marquee from "react-fast-marquee";
import Slider1 from "../../assets/slider1.png";
import Slider2 from "../../assets/slider2.png";
import Slider3 from "../../assets/slider3.png";

const Sliders = () => {
  return (
    <div>
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
    </div>
  );
};

export default Sliders;
