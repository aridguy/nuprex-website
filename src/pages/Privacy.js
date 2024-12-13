import React from "react";
import Navbar from "../components/Navbar";

const Privacy = () => {
  return (
    <main>
      <Navbar />
      <div className="container my-5">
        <div className="card shadow-sm">
          <div className="card-header bg-primary text-white">
            <h1 className="h3 mb-0">Privacy Policy</h1>
          </div>
          <div className="card-body">
            <h2 className="h5 mt-4">1. Introduction</h2>
            <p>
              Welcome to the Nuprex Limited mobile app. We are committed to
              protecting your privacy and ensuring that your personal
              information is handled in a safe and responsible manner. This
              Privacy Policy outlines how we collect, use, and protect the
              information you provide when you sign up and use our mobile app.
            </p>

            <h2 className="h5 mt-4">2. Information We Collect</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Personal Information:</strong> Name, email address,
                phone number, mailing address, and other contact details.
              </li>
              <li className="list-group-item">
                <strong>Account Information:</strong> Username, password, and
                preferences or settings configured within the app.
              </li>
              <li className="list-group-item">
                <strong>Device Information:</strong> Details about the device
                used to access our app, such as device type, operating system,
                and unique identifiers.
              </li>
              <li className="list-group-item">
                <strong>Usage Data:</strong> Information about how you use the
                app, including interactions, session duration, and accessed
                pages or features.
              </li>
            </ul>

            <h2 className="h5 mt-4">3. How We Use Your Information</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Account Creation and Management:</strong> To create and
                manage your account, provide customer support, and communicate
                with you.
              </li>
              <li className="list-group-item">
                <strong>Service Delivery:</strong> To deliver services such as
                order processing, shipment tracking, and customer service.
              </li>
              <li className="list-group-item">
                <strong>App Improvement:</strong> To analyze usage patterns and
                improve app functionality and user experience.
              </li>
              <li className="list-group-item">
                <strong>Marketing and Communication:</strong> To send you
                promotional materials and updates, if you opt-in.
              </li>
              <li className="list-group-item">
                <strong>Legal Compliance:</strong> To comply with applicable
                laws and regulations.
              </li>
            </ul>

            <h2 className="h5 mt-4">4. Sharing Your Information</h2>
            <p>
              We do not sell or trade your personal information to third
              parties. However, we may share your information with:
            </p>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-check-circle-fill text-success"></i>{" "}
                <strong>Service Providers:</strong> Trusted third-party
                providers who assist in app operation and service delivery.
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-success"></i>{" "}
                <strong>Legal Requirements:</strong> Disclosures required by
                law, court order, or governmental regulation.
              </li>
            </ul>

            <h2 className="h5 mt-4">5. Data Security</h2>
            <p>
              We implement various security measures, including encryption, to
              protect your personal information. However, no transmission method
              or storage technology is 100% secure, and we cannot guarantee
              absolute protection.
            </p>

            <h2 className="h5 mt-4">6. Your Rights</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Access Your Information:</strong> Request a copy of your
                personal data.
              </li>
              <li className="list-group-item">
                <strong>Update Your Information:</strong> Correct or update your
                personal details.
              </li>
              <li className="list-group-item">
                <strong>Delete Your Information:</strong> Request data deletion,
                subject to legal obligations.
              </li>
              <li className="list-group-item">
                <strong>Opt-Out:</strong> Unsubscribe from marketing
                communications anytime.
              </li>
            </ul>

            <h2 className="h5 mt-4">7. Changes to This Privacy Policy</h2>
            <p>
              We may update this policy occasionally. Changes will be posted
              here with the updated date. Please review it periodically to stay
              informed.
            </p>

            <h2 className="h5 mt-4">8. Contact Us</h2>
            <address>
              <strong>Nuprex Limited</strong>
              <br />
              3rd Floor, Unit 8/9, Building 1, View Point Plaza, Nepa Road,
              Ajah, Lagos
              <br />
              Email:{" "}
              <a href="mailto:info@nuprex.com.ng" className="text-success">
                info@nuprex.com.ng
              </a>
              <br />
              Phone:{" "}
              <a href="tel:02018880243" className="text-success">
                02018880243
              </a>
            </address>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
