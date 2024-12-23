import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import NuprexLogoFooter from "./NuprexLogoFooter";
import Marquee from "react-fast-marquee";
import TwentyFourHours from "./TwentyFourHours";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="position-relative footer-bg px-5">
        <TwentyFourHours />
      </div>
      <div className="container-fluid  footer-bg ">
        <div className="container" style={{ paddingTop: "7em" }}>
          <div className="row">
            <div className="col-md-2">
              <p className="text-white">Company</p>
              <div
                style={{
                  opacity: ".75",
                  color: "#fff",
                  fontSize: "13px",
                  width: "250px",
                }}
              >
                <small className="cursor-pointer cursor-pointer">
                  About us
                </small>{" "}
                <br />
                <small className="cursor-pointer cursor-pointer">
                  What we offer
                </small>
                <br />
                <small className="cursor-pointer">Careers</small>
                <br />
                <small className="cursor-pointer">
                  Download our Applications
                </small>
                <br />
                <small className="cursor-pointer">Terms of Service</small>
                <br />
                <small className="cursor-pointer">Privacy Policy</small>
                <br />
              </div>
            </div>
            <div className="col-md-3">
              <p className="text-white mb-3">Address</p>
              <div
                style={{
                  opacity: ".75",
                  color: "#fff",
                  fontSize: "13px",
                  width: "250px",
                }}
              >
                <small>
                  Third floor Unit 8/9, building 1, View Point Plaza Ajah, NEPA
                  road, Ajah, Lagos
                </small>
                <br />

                <small
                  className=""
                  style={{ position: "relative", top: "0.3em" }}
                >
                  Shop 13, Phase 2, Hajiya Fatima POWA shopping Complex, Oba
                  Akinjobi Way GRA Ikeja
                </small>
              </div>
            </div>
            <div className="col-md-3">
              <p className="text-white mb-3">Contact</p>
              <div style={{ opacity: ".75", color: "#fff", fontSize: "13px" }}>
                <small>
                  <a href="tel:+2347000687739" style={{ color: "#fff" }}>
                    +234-7000-NUPREX
                  </a>
                </small>{" "}
                <br />
                <small>
                  <a href="tel:02018880243" style={{ color: "#fff" }}>
                    02018880243
                  </a>
                </small>{" "}
                <br />
                <small>
                  <a href="mailto:info@nuprex.com.ng" style={{ color: "#fff" }}>
                    info@nuprex.com.ng
                  </a>
                </small>
                <br />
                <small className="mt-3">
                  <a
                    href="mailto:customercare@nuprex.com.ng"
                    style={{ color: "#fff" }}
                  >
                    customercare@nuprex.com.ng
                  </a>
                </small>
              </div>
            </div>
            <div
              className="col-md-4"
              style={{
                backgroundColor: "rgba(255,255,255, .1)",
                width: "300px",
                height: "250px",
              }}
            >
              <p className="text-white mt-2">Subscribe</p>
              <div>
                <div className="d-flex">
                  <input
                    placeholder="Email Address"
                    className="rounded-start border-0 p-2"
                  />
                  <button className="rounded-end footer-bg border-0 p-2 ">
                    <FaArrowRight className="text-white" />
                  </button>
                </div>

                <p
                  className="text-justify mt-2"
                  style={{ fontSize: "12px", color: "#fff", opacity: ".6" }}
                >
                  Hello, we are Nuprex. Our goal is to translate the positive
                  effects from moving what matters to our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bg container-fluid">
        <Marquee autoFill={true}>
          <p className="weMoveGradient">
            WE MOVE WHAT MATTERS WE MOVE WHAT MATTERS
          </p>
          <p className="weMoveGradient">
            WE MOVE WHAT MATTERS WE MOVE WHAT MATTERS
          </p>
        </Marquee>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4 text-center">
            {" "}
            <NuprexLogoFooter size={"100"} />
          </div>
          <div className="col-md-4 text-center d-flex gap-3 text-white">
            <Link
              to="/terms"
              style={{ color: "white", textDecoration: "none" }}
            >
              <p className="cursor-pointer">Terms</p>
            </Link>
            <Link
              to="/privacy"
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              <p className="cursor-pointer">Privacy</p>
            </Link>
            <Link style={{ color: "white", textDecoration: "none" }}>
              <p className="cursor-pointer">Cookies</p>
            </Link>
          </div>
          <div className="col-md-4 text-center d-flex gap-3">
            <Link to="https://www.facebook.com/share/FvHm56fL5Zeet2St/?mibextid=wwXIfr">
              <FaFacebookF
                className="footer-text bg-white rounded-circle p-3 cursor-pointer"
                size={50}
              />
            </Link>{" "}
            <Link to="https://www.instagram.com/nuprex_official/profilecard/?igsh=MXMyMnJ0c2d3cmg0bg== ">
              <FaInstagram
                className="footer-text bg-white rounded-circle p-3 cursor-pointer"
                size={50}
              />
            </Link>{" "}
            <p>
              <FaTwitter
                className="footer-text bg-white rounded-circle p-3 cursor-pointer"
                size={50}
              />
            </p>
          </div>
        </div>
      </div>
      <div>
        <p style={{ fontSize: "12px" }} className="text-center py-4 m-0">
          © 2024 Nuprex LTD. All rights reserved.{" "}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
