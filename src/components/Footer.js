import { FaArrowRight, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import NuprexLogoFooter from "./NuprexLogoFooter";
import Marquee from "react-fast-marquee";
import TwentyFourHours from "./TwentyFourHours";

const Footer = () => {
  return (
    <footer>
      <div className="position-relative footer-bg px-5">
        <TwentyFourHours />
      </div>
      <div className="py-5 footer-bg px-5">
        <div className="d-flex justify-content-evenly align-items-start mt-5">
          <div className="py-3">
            <p className="text-white">Company</p>
            <div
              style={{
                opacity: ".75",
                color: "#fff",
                fontSize: "13px",
                width: "250px",
              }}
            >
              <p className="cursor-pointer">About us</p>
              <p className="cursor-pointer">What we offer</p>
              <p>Careers</p>
              <p>Download our Applications</p>
              <p className="cursor-pointer">Terms of Service</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="py-3">
            <p className="text-white mb-3">Address</p>
            <div
              style={{
                opacity: ".75",
                color: "#fff",
                fontSize: "13px",
                width: "250px",
              }}
            >
              <p>
                Third floor Unit 8/9, building 1, View Point Plaza Ajah, NEPA
                road, Ajah, Lagos
              </p>
              <p>
                Shop 13, Phase 2, Hajiya Fatima POWA shopping Complex, Oba
                Akinjobi Way GRA Ikeja
              </p>
            </div>
          </div>
          <div className="py-3">
            <p className="text-white mb-3">Contact</p>
            <div style={{ opacity: ".75", color: "#fff", fontSize: "13px" }}>
              <p>
                <a href="tel:+2347000687739" style={{ color: "#fff" }}>
                  +234-7000-NUPREX
                </a>
              </p>
              <p>
                <a href="tel:02018880243" style={{ color: "#fff" }}>
                  02018880243
                </a>
              </p>
              <p>
                <a href="mailto:info@nuprex.com.ng" style={{ color: "#fff" }}>
                  info@nuprex.com.ng
                </a>
              </p>
              <p>
                <a
                  href="mailto:customercare@nuprex.com.ng"
                  style={{ color: "#fff" }}
                >
                  customercare@nuprex.com.ng
                </a>
              </p>
            </div>
          </div>
          <div
            className="px-4"
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
      <div className="footer-bg">
        <Marquee autoFill={true}>
          <p className="weMoveGradient">
            WE MOVE WHAT MATTERS WE MOVE WHAT MATTERS
          </p>
          <p className="weMoveGradient">
            WE MOVE WHAT MATTERS WE MOVE WHAT MATTERS
          </p>
        </Marquee>
        <div className="py-5 px-5 d-flex align-items-center justify-content-between text-white ">
          <NuprexLogoFooter size={"100"} />
          <div className="d-flex gap-5">
            <p className="cursor-pointer">Terms</p> <p className="cursor-pointer">Privacy</p> <p className="cursor-pointer">Cookies</p>
          </div>
          <div className="d-flex gap-3">
            <p>
              <FaFacebookF
                className="footer-text bg-white rounded-circle p-3 cursor-pointer"
                size={50}
              />
            </p>{" "}
            <p>
              <FaInstagram
                className="footer-text bg-white rounded-circle p-3 cursor-pointer"
                size={50}
              />
            </p>{" "}
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
