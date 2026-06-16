import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-20 px-6 max-w-4xl mx-auto w-full">
        <div className="p-4 md:p-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">
            Privacy Policy
          </h1>
          
          <div className="space-y-8 text-gray-600 leading-relaxed text-base md:text-lg">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p>
                This Privacy Policy explains how “TouristSaver” (“we”, “us”, or “our”) collects, uses, discloses and protects your personal information in accordance with applicable privacy principles and laws. We may amend this policy from time to time. Any updates will be published at TouristSaver.org (including form.TouristSaver.org).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Personal Information We Collect</h2>
              <p className="mb-6">
                We collect personal information to operate the TouristSaver website and app, provide services to members and merchants, and improve user experience.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Device Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Technical details about your device and browser (e.g., browser type/version, IP address, time zone).</li>
                    <li>Identifiers stored using cookies or similar technologies.</li>
                    <li>Log information such as pages viewed, referring/exit pages, and timestamps.</li>
                    <li>Interaction data used for analytics and fraud/risk detection.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Information You Provide</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and contact details (address, email, and phone number).</li>
                    <li>Information regarding transactions made using your TouristSaver membership with participating merchants.</li>
                    <li>Communications you send to us (e.g., support queries, survey responses, promotion entries).</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Personal Information</h2>
              <p className="mb-4">We use personal information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, operate, and improve our services (including verifying identity and managing member/merchant relationships).</li>
                <li>To provide and operate competitions, promotions, and events.</li>
                <li>To distribute newsletters and service communications (either ourselves or via trusted service providers).</li>
                <li>To deliver customer support and respond to enquiries or requests.</li>
                <li>To conduct marketing activities for our services and for selected third parties, and to conduct research to improve our products, services, and marketing.</li>
                <li>To maintain records, detect and prevent fraud, and comply with our legal obligations.</li>
                <li>To analyse usage (e.g., via analytics tools) to understand how people interact with our sites and app.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sharing and Disclosure</h2>
              <p className="mb-4">We may share personal information with third parties in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Service providers who help us deliver services (e.g., customer support, market research and analysis, marketing services, analytics providers).</li>
                <li>When required by law or to respond to lawful requests (e.g., subpoenas, search warrants), or to protect our rights.</li>
                <li>With your consent or at your direction.</li>
              </ul>
              <p>
                For example, we may use Google Analytics to understand how members use our sites. To learn how Google uses data, see “How Google uses information from sites or apps that use our services,” and you can opt out of Google Analytics by installing the browser add-on.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Similar Technologies</h2>
              <p>
                We use cookies, web beacons, tags and pixels to operate and improve our sites and app. Cookies are small data files stored on your device and often include a unique identifier. You can manage cookies through your browser settings. For more information about cookies, visit allaboutcookies.org.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Security</h2>
              <p className="mb-4">
                We take reasonable steps to protect personal information from unauthorised access, modification, disclosure, misuse, interference and loss. Measures we commonly use include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Storing data on systems in secure locations behind a “firewall”.</li>
                <li>Restricting access to personal information to authorised personnel and contractors.</li>
                <li>Keeping hard-copy records in locked storage.</li>
                <li>Applying data minimisation and secure disposal/de-identification when information is no longer required.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
              <p>
                We retain personal information for as long as necessary to fulfil the purposes described in this policy, or as required by law. When information is no longer needed, we take reasonable steps to delete or de-identify it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to this Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or for other operational reasons. The current version will be posted on TouristSaver.org.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="mb-4">
                If you have questions, concerns, or complaints about our privacy practices, please contact us:
              </p>
              <address className="not-italic bg-gray-50 p-6 rounded-xl border border-gray-100">
                <p className="font-semibold text-gray-900">Saver Saver Pty Ltd</p>
                <p>TouristSaver</p>
                <p>Australia</p>
                <p className="mt-4">
                  <strong>Email:</strong> <a href="mailto:info@TouristSaver.org" className="text-blue-600 hover:underline">info@TouristSaver.org</a>
                </p>
              </address>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
