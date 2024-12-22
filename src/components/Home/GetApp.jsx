import React from "react";
import Icon from "../../assets/icons.png";
import AppleIco from "../../assets/apstore.png";
import PlayStore from "../../assets/playstore.png";

const GetApp = () => {
  return (
    <div>
      {
        // section three
        <section
          style={{ position: "relative", top: "4em" }}
          className="mt-5"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="container">
            <div className="row bg-sec3" style={{ padding: "4em" }}>
              <div className="col-md-6 ">
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
                  You can easily send and receive packages around Lagos with our
                  Nuprex Application.
                </p>

                <div className="text-center ">
                  <img width={150} src={AppleIco} alt="apple icon" />{" "}
                  &nbsp;&nbsp; &nbsp;{" "}
                  <img width={150} src={PlayStore} alt="apple icon" />
                </div>
              </div>
              <div className="col-md-6">
                <img
                  className="hand-icon cursor-pointer"
                  src={Icon}
                  alt="picss"
                />
              </div>
            </div>
          </div>
        </section>
      }
    </div>
  );
};

export default GetApp;
