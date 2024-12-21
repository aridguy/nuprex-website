import React from 'react'

import Que from "../../assets/que.png";

const Faq = () => {
  return (
    <div>
    <section
    className="container-fluid faq"
    // style={{ zIndex: "999" }}
    data-aos="fade-up"
    data-aos-duration="1500"
  >
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="faq-content">
            <h3 className="text-dark text-black fw-bolder">
              Some of the things you <br /> may want to know
            </h3>
            <span>Explore answers without the need to</span> <br />
            <span> pose the questions.</span>
            <div className="mt-3">
              <img width={120} src={Que} alt="question mark icon" />
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div
            className="p-4 mt-5"
            style={{
              background: "#ffffff80",
              borderRadius: "8px",
            }}
          >
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    What services does Nuprex Ltd offer?.
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Nuprex Ltd provides a range of logistics services
                    including express deliveries, standard deliveries,
                    warehousing, and supply chain management. We
                    specialize in efficient and reliable delivery
                    solutions tailored to meet your business needs.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    How can I contact Nuprex Ltd customer support?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is
                    intended to demonstrate the{" "}
                    <code>.accordion-flush</code> class. This is the
                    second item's accordion body. Let's imagine this being
                    filled with some actual content.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    How do I create a Nuprex Ltd account?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is
                    intended to demonstrate the{" "}
                    <code>.accordion-flush</code> class. This is the third
                    item's accordion body. Nothing more exciting happening
                    here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit
                    more representative of how this would look in a
                    real-world application.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    How do I update my account information?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is
                    intended to demonstrate the{" "}
                    <code>.accordion-flush</code> class. This is the third
                    item's accordion body. Nothing more exciting happening
                    here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit
                    more representative of how this would look in a
                    real-world application.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    How do I delete my account?
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is
                    intended to demonstrate the{" "}
                    <code>.accordion-flush</code> class. This is the third
                    item's accordion body. Nothing more exciting happening
                    here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit
                    more representative of how this would look in a
                    real-world application.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSix"
                    aria-expanded="false"
                    aria-controls="flush-collapseSix"
                  >
                    What payment methods do you accept?
                  </button>
                </h2>
                <div
                  id="flush-collapseSix"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is
                    intended to demonstrate the{" "}
                    <code>.accordion-flush</code> class. This is the third
                    item's accordion body. Nothing more exciting happening
                    here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit
                    more representative of how this would look in a
                    real-world application.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Faq
