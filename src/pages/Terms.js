import React from "react";
import Navbar from "../components/Navbar";

const Terms = () => {
  return (
    <main>
      <Navbar />
      <div className="mt-5">
        <div className="container my-5 mt-5">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h1 className="h3 mb-0">Terms and Conditions</h1>
            </div>
            <div className="card-body">
              <p>
                <strong>Effective Date:</strong> [Insert Date]
              </p>

              <h2 className="h5 mt-4">1. Introduction</h2>
              <p>
                Welcome to the Nuprex Limited mobile app ("App"). By
                downloading, accessing, or using the App, you agree to comply
                with and be bound by these Terms and Conditions ("Terms"). If
                you do not agree with these Terms, you must not use the App.
              </p>

              <h2 className="h5 mt-4">2. User Accounts</h2>
              <h3 className="h6 mt-3">2.1. Account Creation</h3>
              <p>
                To use certain features of the App, you may need to create an
                account. You agree to provide accurate and complete information
                during the registration process and to update such information
                as necessary.
              </p>

              <h3 className="h6 mt-3">2.2. Account Security</h3>
              <p>
                You are responsible for maintaining the confidentiality of your
                account credentials. Any activities or actions under your
                account are your responsibility, whether authorized or
                unauthorized. Notify us immediately if you suspect any
                unauthorized use of your account.
              </p>

              <h3 className="h6 mt-3">2.3. Account Termination</h3>
              <p>
                We may suspend or terminate your account at our discretion,
                without prior notice, for any violation of these Terms or any
                other reason deemed necessary to protect our interests or other
                users.
              </p>

              <h2 className="h5 mt-4">3. App Usage</h2>
              <h3 className="h6 mt-3">3.1. License to Use</h3>
              <p>
                Nuprex Limited grants you a limited, non-exclusive,
                non-transferable, and revocable license to use the App for
                personal, non-commercial purposes. This license is subject to
                these Terms.
              </p>

              <h3 className="h6 mt-3">3.2. Prohibited Conduct</h3>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-dash-lg"></i> Use the App for any illegal
                  or unauthorized purpose.
                </li>
                <li>
                  <i className="bi bi-dash-lg"></i> Attempt to interfere with
                  the proper functioning of the App, including by hacking,
                  sending viruses, or using any automated system to access the
                  App.
                </li>
                <li>
                  <i className="bi bi-dash-lg"></i> Reproduce, distribute, or
                  create derivative works based on the App's content without
                  express permission.
                </li>
                <li>
                  <i className="bi bi-dash-lg"></i> Use the App to infringe upon
                  the rights of others, including intellectual property rights.
                </li>
              </ul>

              <h2 className="h5 mt-4">4. Intellectual Property Rights</h2>
              <p>
                All content, features, and functionality of the App, including
                but not limited to text, graphics, logos, and software, are
                owned by Nuprex Limited and are protected by copyright,
                trademark, and other intellectual property laws. Unauthorized
                use of any content may violate these laws and is strictly
                prohibited.
              </p>

              <h2 className="h5 mt-4">5. Payments and Subscriptions</h2>
              <p>
                Certain features of the App may require payment. By using these
                features, you agree to pay all applicable fees. All payments are
                non-refundable, unless otherwise stated. Nuprex Limited reserves
                the right to modify the pricing of any features or services at
                any time.
              </p>

              <h2 className="h5 mt-4">
                6. Disclaimers and Limitation of Liability
              </h2>
              <h3 className="h6 mt-3">6.1. Disclaimers</h3>
              <p>
                The App is provided "as is" and "as available." Nuprex Limited
                makes no representations or warranties of any kind, express or
                implied, regarding the operation of the App or the information,
                content, or materials included therein.
              </p>

              <h3 className="h6 mt-3">6.2. Limitation of Liability</h3>
              <p>
                To the maximum extent permitted by law, Nuprex Limited shall not
                be liable for any damages of any kind arising from the use of or
                inability to use the App, including but not limited to direct,
                indirect, incidental, punitive, and consequential damages.
              </p>

              <h2 className="h5 mt-4">7. Privacy Policy</h2>
              <p>
                Your use of the App is also governed by our Privacy Policy,
                which outlines how we collect, use, and protect your personal
                information. By using the App, you consent to the collection and
                use of your information as outlined in our Privacy Policy.
              </p>

              <h2 className="h5 mt-4">8. Modifications to the Terms</h2>
              <p>
                Nuprex Limited reserves the right to modify these Terms at any
                time. Any changes will be effective immediately upon posting the
                revised Terms within the App. Your continued use of the App
                after such changes have been posted constitutes your acceptance
                of the new Terms.
              </p>

              <h2 className="h5 mt-4">9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of [Insert Jurisdiction], without regard to its
                conflict of laws principles. Any disputes arising from or
                relating to these Terms or the App shall be resolved in the
                courts of [Insert Jurisdiction].
              </p>

              <h2 className="h5 mt-4">10. Contact Information</h2>
              <address>
                If you have any questions or concerns regarding these Terms,
                please contact us at:
                <br />
                <strong>Nuprex Limited</strong>
                <br />
                3rd Floor, Unit 8/9, Building 1, View Point Plaza, Nepa Road,
                Ajah, Lagos
                <br />
                Email:{" "}
                <a href="mailto:info@nuprex.com.ng" className="text-primary">
                  info@nuprex.com.ng
                </a>
                <br />
                Phone:{" "}
                <a href="tel:02018880243" className="text-primary">
                  02018880243
                </a>
              </address>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Terms;
