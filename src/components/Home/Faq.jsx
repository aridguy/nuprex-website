import React from "react";

import Que from "../../assets/que.png";

const Faq = () => {
  return (
    <section
      className="container-fluid faq"
      // style={{ zIndex: "999" }}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="faq-content" style={{ position: "sticky", zIndex: "10px", top: "20px"}}>
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
              {/* Question 1 */}
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
                      warehousing, and supply chain management. We specialize in
                      efficient and reliable delivery solutions tailored to meet
                      your business needs.
                    </div>
                  </div>
                </div>
                {/* Question 2 */}
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
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> class.
                      This is the second item's accordion body. Let's imagine
                      this being filled with some actual content.
                    </div>
                  </div>
                </div>
                {/* Question 3 */}
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
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> class.
                      This is the third item's accordion body. Nothing more
                      exciting happening here in terms of content, but just
                      filling up the space to make it look, at least at first
                      glance, a bit more representative of how this would look
                      in a real-world application.
                    </div>
                  </div>
                </div>
                {/* Question 4 */}
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
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> class.
                      This is the third item's accordion body. Nothing more
                      exciting happening here in terms of content, but just
                      filling up the space to make it look, at least at first
                      glance, a bit more representative of how this would look
                      in a real-world application.
                    </div>
                  </div>
                </div>
                {/* Question 5 */}
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
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> class.
                      This is the third item's accordion body. Nothing more
                      exciting happening here in terms of content, but just
                      filling up the space to make it look, at least at first
                      glance, a bit more representative of how this would look
                      in a real-world application.
                    </div>
                  </div>
                </div>
                {/* Question 6 */}
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
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> class.
                      This is the third item's accordion body. Nothing more
                      exciting happening here in terms of content, but just
                      filling up the space to make it look, at least at first
                      glance, a bit more representative of how this would look
                      in a real-world application.
                    </div>
                  </div>
                </div>
                {/* Question 7 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseSeven"
                      aria-expanded="false"
                      aria-controls="flush-collapseSeven"
                    >
                      What payment methods do you accept?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseSeven"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      We accept various payment methods including Visa,
                      MasterCard, bank transfers, and mobile money. All payments
                      are processed securely.
                    </div>
                  </div>
                </div>

                {/* Question 8 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseEight"
                      aria-expanded="false"
                      aria-controls="flush-collapseEight"
                    >
                      How do I update my payment information?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseEight"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      To update your payment information, log in to your account
                      and go to the "Billing" section. Here, you can add or
                      update your payment methods.
                    </div>
                  </div>
                </div>

                {/* Question 9 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseNine"
                      aria-expanded="false"
                      aria-controls="flush-collapseNine"
                    >
                      What should I do if my payment fails?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseNine"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      If your payment fails, please check that your payment
                      information is correct and that you have sufficient funds.
                      If the issue persists, contact your bank or our customer
                      support team for assistance.
                    </div>
                  </div>
                </div>

                {/* Question 10 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTen"
                      aria-expanded="false"
                      aria-controls="flush-collapseTen"
                    >
                      How do I place an order for a delivery service?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTen"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      To place an order, log in to your Nuprex account, go to
                      the "Place Order" section, and fill out the required
                      details. You can choose between express and standard
                      delivery options.
                    </div>
                  </div>
                </div>

                {/* Question 11 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseEleven"
                      aria-expanded="false"
                      aria-controls="flush-collapseEleven"
                    >
                      How do I track my delivery?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseEleven"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      After placing an order, you will receive a tracking number
                      via email. You can use this number to track your delivery
                      status on our website under the "Track Order" section.
                    </div>
                  </div>
                </div>
                {/* Question 12 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwelve"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwelve"
                    >
                      What is your delivery policy?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwelve"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      We offer same-day express delivery within Lagos and
                      standard van delivery within 2-3 business days within
                      Lagos. Call to inquire for other regions. For more
                      details, please refer to our Delivery Policy on the
                      website.
                    </div>
                  </div>
                </div>

                {/* Question 13 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThirteen"
                      aria-expanded="false"
                      aria-controls="flush-collapseThirteen"
                    >
                      What is your return policy?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThirteen"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      If you encounter any issues with our service, please
                      contact us within 7 days of delivery. We will investigate
                      and address your concerns promptly.
                    </div>
                  </div>
                </div>

                {/* Question 14 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFourteen"
                      aria-expanded="false"
                      aria-controls="flush-collapseFourteen"
                    >
                      How do I report a problem with the Nuprex website or app?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFourteen"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      If you encounter any technical issues, please take a
                      screenshot and contact our support team at
                      support@nuprex.com with a detailed description of the
                      problem.
                    </div>
                  </div>
                </div>

                {/* Question 15 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFifteen"
                      aria-expanded="false"
                      aria-controls="flush-collapseFifteen"
                    >
                      How can I update the Nuprex app to the latest version?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFifteen"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      To update the Nuprex app, visit the App Store or Google
                      Play Store, search for "Nuprex Ltd," and click "Update."
                    </div>
                  </div>
                </div>

                {/* Question 16 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseSixteen"
                      aria-expanded="false"
                      aria-controls="flush-collapseSixteen"
                    >
                      How does Nuprex Ltd protect my personal information?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseSixteen"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      We use industry-standard encryption and security protocols
                      to protect your personal information. For more details,
                      please refer to our Privacy Policy.
                    </div>
                  </div>
                </div>

                {/* Question 17 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseSeventeen"
                      aria-expanded="false"
                      aria-controls="flush-collapseSeventeen"
                    >
                      Can I control who sees my personal information?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseSeventeen"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Yes, you can adjust your privacy settings in your account
                      profile to control who can see your personal information.
                    </div>
                  </div>
                </div>

                {/* Question 18 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseEighteen"
                      aria-expanded="false"
                      aria-controls="flush-collapseEighteen"
                    >
                      What should I do if I suspect my account has been
                      compromised?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseEighteen"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      If you suspect that your account has been compromised,
                      immediately change your password and contact our support
                      team for further assistance.
                    </div>
                  </div>
                </div>
                {/* Question 19 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseNineteen"
                      aria-expanded="false"
                      aria-controls="flush-collapseNineteen"
                    >
                      Is there an option for recurring payments?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseNineteen"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Yes, Nuprex Ltd offers recurring payment options for
                      regular services. You can set this up in the "Billing"
                      section of your account.
                    </div>
                  </div>
                </div>

                {/* Question 20 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwenty"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwenty"
                    >
                      How do I submit a delivery request?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwenty"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      To submit a delivery request, log in to your Nuprex Ltd
                      account, go to the "Place Order" section, and fill out the
                      required details including the pickup and delivery
                      addresses, package details, and preferred delivery option
                      (express or standard).
                    </div>
                  </div>
                </div>

                {/* Question 21 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwentyOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwentyOne"
                    >
                      What information do I need to provide for a delivery
                      request?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwentyOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      You will need to provide the sender's and recipient's
                      contact information, pickup and delivery addresses,
                      package details (size, weight, contents), and choose the
                      delivery option (express or standard).
                    </div>
                  </div>
                </div>

                {/* Question 22 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwentyTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwentyTwo"
                    >
                      Can I schedule a pickup time for my delivery?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwentyTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Yes, you can schedule a specific pickup time when
                      submitting your delivery request. Just select the
                      preferred date and time slot during the order placement
                      process.
                    </div>
                  </div>
                </div>

                {/* Question 23 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwentyThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwentyThree"
                    >
                      How can I contact Nuprex Ltd customer support?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwentyThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      You can contact our customer support team by emailing
                      support@nuprex.com or calling +xxx-xxx-xxxx. Our support
                      hours are Monday to Friday, 9 AM to 5 PM WAT.
                    </div>
                  </div>
                </div>

                {/* Question 24 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwentyFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwentyFour"
                    >
                      Where can I find more information about your services?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwentyFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Detailed information about our services can be found on
                      our website at http://www.nuprex.com.ng. Visit the
                      "Services" section to learn more about our logistics
                      solutions.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
