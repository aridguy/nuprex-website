import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Partner = () => {
  
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
  
      emailjs
        .send(
          "service_3yhfaxc", // Replace with your EmailJS service ID
          "template_me4oetp", // Replace with your EmailJS template ID
          formData, // Form data
          "SFMR_UIPuhLCi6e9S" // Replace with your EmailJS public key
        )
        .then(
          (result) => {
            Swal.fire({
              title: "Success!",
              text: "Message successfully sent",
              icon: "success"
            });
            setFormData({
              name: "",
              email: "",
              phone: "",
              message: "",
            });
          },
          (error) => {
            alert("Failed to send message. Please try again later.");
            console.error(error);
          }
        );
    };
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
                  <form onSubmit={handleSubmit}>
                  <p>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </p>
                  <p>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </p>
                  <p>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone number"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </p>
                  <p>
                    <textarea
                      style={{ minHeight: "10em" }}
                      name="message"
                      placeholder="Your message"
                      className="form-control"
                      value={formData.message}
                      onChange={handleChange}
                      required
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
