import React, { useState } from 'react';

const TermsAndConditionsPage = () => {
  const [openSection, setOpenSection] = useState('welcome'); // Default open first section

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero / Header */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-6">
            Effective Date: February 16, 2026
          </p>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            Welcome to Spay. These terms outline the rules for using our payment gateway services, website[](https://spay.live), and mobile application. By accessing our services, you agree to these terms.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Table of Contents */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Table of Contents</h2>
          <ul className="space-y-3 text-blue-700">
            <li><a href="#welcome" className="hover:underline">1. Welcome to Spay</a></li>
            <li><a href="#cookies" className="hover:underline">2. Cookies</a></li>
            <li><a href="#license" className="hover:underline">3. License</a></li>
            <li><a href="#hyperlinking" className="hover:underline">4. Hyperlinking to Our Content</a></li>
            <li><a href="#iframes" className="hover:underline">5. iFrames</a></li>
            <li><a href="#content-liability" className="hover:underline">6. Content Liability</a></li>
            <li><a href="#reservation" className="hover:underline">7. Reservation of Rights</a></li>
            <li><a href="#removal" className="hover:underline">8. Removal of Links from Our Website</a></li>
            <li><a href="#rolling-reserve" className="hover:underline">9. Rolling and Reserve Amount Terms & Conditions</a></li>
            <li><a href="#disclaimer" className="hover:underline">10. Disclaimer</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Sections with Accordion */}
        <div className="space-y-8">
          {/* Section 1: Welcome */}
          <div id="welcome" className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <button
              onClick={() => toggleSection('welcome')}
              className="w-full px-8 py-6 text-left bg-blue-50 hover:bg-blue-100 transition-colors flex justify-between items-center"
            >
              <h2 className="text-2xl font-semibold text-gray-800">1. Welcome to Spay</h2>
              <span className="text-3xl font-bold text-blue-600">
                {openSection === 'welcome' ? '−' : '+'}
              </span>
            </button>

            {openSection === 'welcome' && (
              <div className="px-8 pb-8 pt-4 text-gray-700 leading-relaxed">
                <p className="mb-6">
                  These terms and conditions set forth the rules and regulations for the use of the Spay Fintech Pvt. Ltd. website, accessible at https://spay.live.
                </p>
                <p className="mb-6">
                  By accessing this website, you acknowledge and accept these terms and conditions. If you do not agree to all the terms and conditions outlined on this page, please refrain from using Spay. The following terminology applies to these Terms and Conditions, Privacy Policy, Disclaimer Notice, and all Agreements: "Client," "You," and "Your" refer to the individual accessing this website and accepting the Company's terms and conditions. "The Company," "Ourselves," "We," "Our," and "Us" refer to Spay Fintech Pvt. Ltd. "Party," "Parties," or "Us" refer to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, for the express purpose of meeting the Client's needs in respect of the provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization, and/or he/she or they, are taken as interchangeable and therefore refer to the same.
                </p>
                <p className="mb-6">
                  By accessing this website, you acknowledge and accept these terms and conditions. If you do not agree to all the terms and conditions, please refrain from using Spay.
                </p>
              </div>
            )}
          </div>

          {/* Section 2: Cookies */}
          <div id="cookies" className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <button
              onClick={() => toggleSection('cookies')}
              className="w-full px-8 py-6 text-left bg-blue-50 hover:bg-blue-100 transition-colors flex justify-between items-center"
            >
              <h2 className="text-2xl font-semibold text-gray-800">2. Cookies</h2>
              <span className="text-3xl font-bold text-blue-600">
                {openSection === 'cookies' ? '−' : '+'}
              </span>
            </button>

            {openSection === 'cookies' && (
              <div className="px-8 pb-8 pt-4 text-gray-700 leading-relaxed">
                <p className="mb-6">
                  We utilize cookies on our website. By accessing Spay, you consent to the use of cookies in accordance with Spay Fintech Pvt. Ltd.'s Privacy Policy. Most interactive websites employ cookies to retrieve user details during each visit. Our website uses cookies to enable functionality in certain areas to enhance the user experience. Some of our affiliate and advertising partners may also use cookies.
                </p>
              </div>
            )}
          </div>

          {/* Section 3: License */}
          <div id="license" className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <button
              onClick={() => toggleSection('license')}
              className="w-full px-8 py-6 text-left bg-blue-50 hover:bg-blue-100 transition-colors flex justify-between items-center"
            >
              <h2 className="text-2xl font-semibold text-gray-800">3. License</h2>
              <span className="text-3xl font-bold text-blue-600">
                {openSection === 'license' ? '−' : '+'}
              </span>
            </button>

            {openSection === 'license' && (
              <div className="px-8 pb-8 pt-4 text-gray-700 leading-relaxed">
                <p className="mb-6">
                  Unless otherwise stated, Spay Fintech Pvt. Ltd. and/or its licensors own the intellectual property rights for all content on Spay. All rights are reserved. You may access this content for personal use, subject to the restrictions in these terms and conditions. You must not:
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-6">
                  <li>Republish material from Spay</li>
                  <li>Sell, rent, or sub-license material from Spay</li>
                  <li>Reproduce, duplicate, or copy material from Spay</li>
                  <li>Redistribute content from Spay</li>
                </ul>
                <p className="mb-6">
                  This Agreement is effective from the date of your acceptance. Our Terms and Conditions were created with assistance from the Free Terms and Conditions Generator. Certain sections of this website allow users to post and exchange opinions and information. Spay Fintech Pvt. Ltd. does not filter, edit, publish, or review comments prior to their appearance on the website. Comments reflect the views and opinions of the individual posting them and do not necessarily represent those of Spay Fintech Pvt. Ltd., its agents, or affiliates. To the fullest extent permitted by applicable law, Spay Fintech Pvt. Ltd. shall not be liable for any comments or any liability, damages, or expenses caused and/or suffered as a result of the use or posting of comments on this website. Spay Fintech Pvt. Ltd. reserves the right to monitor all comments and to remove any that are deemed inappropriate, offensive, or in violation of these Terms and Conditions. You warrant and represent that:
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-6">
                  <li>You are entitled to post the comments on our website and possess all necessary licenses and consents to do so;</li>
                  <li>The comments do not infringe any intellectual property rights, including but not limited to copyright, patent, trademark of any third party;</li>
                  <li>The comments do not contain any defamatory, libelous, offensive, or otherwise unlawful material that invades privacy;</li>
                  <li>The comments will not be used to solicit or promote business or present commercial activities or unlawful activity.</li>
                </ul>
                <p className="mb-6">
                  You grant Spay Fintech Pvt. Ltd. a non-exclusive license to use, reproduce, edit, and authorize others to use, reproduce, and edit any of your comments in any form, format, or media.
                </p>
              </div>
            )}
          </div>

          {/* Section 4: Hyperlinking */}
          <div id="hyperlinking" className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <button
              onClick={() => toggleSection('hyperlinking')}
              className="w-full px-8 py-6 text-left bg-blue-50 hover:bg-blue-100 transition-colors flex justify-between items-center"
            >
              <h2 className="text-2xl font-semibold text-gray-800">4. Hyperlinking to Our Content</h2>
              <span className="text-3xl font-bold text-blue-600">
                {openSection === 'hyperlinking' ? '−' : '+'}
              </span>
            </button>

            {openSection === 'hyperlinking' && (
              <div className="px-8 pb-8 pt-4 text-gray-700 leading-relaxed">
                <p className="mb-6">
                  The following organizations may link to our website without prior written approval:
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-6">
                  <li>Government agencies</li>
                  <li>Search engines</li>
                  <li>News organizations</li>
                  <li>Online directory distributors including those same as links to other listed businesses</li>
                  <li>System-wide accredited businesses, excluding soliciting non-profit organizations, charity shopping malls, and charity fundraising groups</li>
                </ul>
                <p className="mb-6">
                  These organizations may link to our home page, publications, or other website information as long as the link: (a) is not misleading; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products/services; and (c) fits within the context of the linking party's site.
                </p>
                <p className="mb-6">
                  We may consider and approve link requests from the following types of organizations:
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-6">
                  <li>Well-known consumer and/or business information sources</li>
                  <li>D ot-com community sites</li>
                  <li>Associations or groups representing charities</li>
                  <li>Online directory distributors</li>
                  <li>Internet portals</li>
                  <li>Accounting, law, and consulting firms</li>
                  <li>Educational institutions and trade associations</li>
                </ul>
                <p className="mb-6">
                  We will approve link requests from these organizations if we determine that: (a) the link does not negatively affect our reputation or that of our accredited businesses; (b) the organization does not have a negative history with us; (c) the visibility gained from the hyperlink compensates for the absence of Spay Fintech Pvt. Ltd.; and (d) the link is in the context of general resource information.
                </p>
                <p className="mb-6">
                  If you are one of the organizations mentioned above and wish to link to our website, please notify us via email at Spay Fintech Pvt. Ltd. Include your name, organization name, contact information, URL of your site, a list of URLs from which you intend to link to our website, and a list of URLs on our site to which you would like to link. Please allow 2-3 weeks for a response. Approved organizations may hyperlink to our website in the following ways:
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-6">
                  <li>By using our corporate name</li>
                  <li>By using the specific URL being linked to</li>
                  <li>By using any other description of our website accurately representing our website within the context of the linking party's content</li>
                  <li>The use of Spay Fintech Pvt. Ltd.'s logo or other artwork for linking purposes is prohibited without a trademark license agreement.</li>
                </ul>
              </div>
            )}
          </div>

          {/* Section 5: iFrames */}
          <div id="iframes" className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <button
              onClick={() => toggleSection('iframes')}
              className="w-full px-8 py-6 text-left bg-blue-50 hover:bg-blue-100 transition-colors flex justify-between items-center"
            >
              <h2 className="text-2xl font-semibold text-gray-800">5. iFrames</h2>
              <span className="text-3xl font-bold text-blue-600">
                {openSection === 'iframes' ? '−' : '+'}
              </span>
            </button>

            {openSection === 'iframes' && (
              <div className="px-8 pb-8 pt-4 text-gray-700 leading-relaxed">
                <p className="mb-6">
                  You may not create frames around our web pages that alter the visual presentation or appearance of our website without prior written approval.
                </p>
              </div>
            )}
          </div>

          {/* Section 6: Content Liability */}
          <div id="content-liability" className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <button
              onClick={() => toggleSection('content-liability')}
              className="w-full px-8 py-6 text-left bg-blue-50 hover:bg-blue-100 transition-colors flex justify-between items-center"
            >
              <h2 className="text-2xl font-semibold text-gray-800">6. Content Liability</h2>
              <span className="text-3xl font-bold text-blue-600">
                {openSection === 'content-liability' ? '−' : '+'}
              </span>
            </button>

            {openSection === 'content-liability' && (
              <div className="px-8 pb-8 pt-4 text-gray-700 leading-relaxed">
                <p className="mb-6">
                  Please refer to our Privacy Policy.
                </p>
              </div>
            )}
          </div>

          {/* Section 7: Reservation of Rights */}
          <div id="reservation" className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <button
              onClick={() => toggleSection('reservation')}
              className="w-full px-8 py-6 text-left bg-blue-50 hover:bg-blue-100 transition-colors flex justify-between items-center"
            >
              <h2 className="text-2xl font-semibold text-gray-800">7. Reservation of Rights</h2>
              <span className="text-3xl font-bold text-blue-600">
                {openSection === 'reservation' ? '−' : '+'}
              </span>
            </button>

            {openSection === 'reservation' && (
              <div className="px-8 pb-8 pt-4 text-gray-700 leading-relaxed">
                <p className="mb-6">
                  We reserve the right to request the removal of any links or specific links to our website. You agree to promptly remove all links to our website upon request. We also reserve the right to amend these terms and conditions and our linking policy at any time. By continuing to link to our website, you agree to comply with these linking terms and conditions.
                </p>
              </div>
            )}
          </div>

          {/* Section 8: Removal of Links */}
          <div id="removal" className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <button
              onClick={() => toggleSection('removal')}
              className="w-full px-8 py-6 text-left bg-blue-50 hover:bg-blue-100 transition-colors flex justify-between items-center"
            >
              <h2 className="text-2xl font-semibold text-gray-800">8. Removal of Links from Our Website</h2>
              <span className="text-3xl font-bold text-blue-600">
                {openSection === 'removal' ? '−' : '+'}
              </span>
            </button>

            {openSection === 'removal' && (
              <div className="px-8 pb-8 pt-4 text-gray-700 leading-relaxed">
                <p className="mb-6">
                  If you encounter any link on our website that you find offensive for any reason, please feel free to contact us at any time. While we will consider requests to remove links, we are not obligated to do so or to respond directly. We do not guarantee the accuracy or completeness of the information on this website, nor do we promise that the website will remain available or that the material will be kept up to date.
                </p>
              </div>
            )}
          </div>

          {/* Section 9: Rolling and Reserve Amount */}
          <div id="rolling-reserve" className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <button
              onClick={() => toggleSection('rolling-reserve')}
              className="w-full px-8 py-6 text-left bg-blue-50 hover:bg-blue-100 transition-colors flex justify-between items-center"
            >
              <h2 className="text-2xl font-semibold text-gray-800">9. Rolling and Reserve Amount Terms & Conditions</h2>
              <span className="text-3xl font-bold text-blue-600">
                {openSection === 'rolling-reserve' ? '−' : '+'}
              </span>
            </button>

            {openSection === 'rolling-reserve' && (
              <div className="px-8 pb-8 pt-4 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-semibold mb-4">Introduction</h3>
                <p className="mb-6">
                  These Terms and Conditions govern the Rolling and Reserve Amount (referred to as "Reserve") held by Spay Fintech Pvt. Ltd. to protect both parties involved in payment gateway services.
                </p>

                <h3 className="text-xl font-semibold mb-4">Reserve Purpose</h3>
                <p className="mb-6">
                  The Reserve is established to cover potential chargebacks and other safety-related issues that may arise during the provision of payment gateway services. It serves as a safeguard to mitigate financial risks for both the Company and the merchant.
                </p>

                <h3 className="text-xl font-semibold mb-4">Amount and Calculation</h3>
                <p className="mb-6">
                  The Reserve amount will be determined by the Company based on various factors, including transaction volume, business type, historical chargeback rates, and other relevant risk factors. The Reserve will either be a percentage of the total transaction volume or a fixed amount, as specified in the agreement between the Company and the merchant.
                </p>

                <h3 className="text-xl font-semibold mb-4">Refund Schedule</h3>
                <p className="mb-6">
                  The Reserve amount will be held for a period of 180 days from the transaction date. After this period, the Reserve amount will be eligible for refund, subject to the conditions outlined in these Terms.
                </p>

                <h3 className="text-xl font-semibold mb-4">Cycling Process</h3>
                <p className="mb-6">
                  The cycling process will persist for any subsequent chargebacks or safety-related issues, ensuring a continuous reserve mechanism for the protection of both parties.
                </p>

                <h3 className="text-xl font-semibold mb-4">Communication</h3>
                <p className="mb-6">
                  The Company will promptly inform the merchant of any chargebacks or safety-related issues that may impact the Reserve amount. Consistent communication will be maintained throughout the entire process.
                </p>

                <h3 className="text-xl font-semibold mb-4">Modification of Terms</h3>
                <p className="mb-6">
                  The Company reserves the right to amend these Terms with prior notice to the merchant. It is the merchant's responsibility to review and accept any changes made to the Terms.
                </p>

                <h3 className="text-xl font-semibold mb-4">Termination of Agreement</h3>
                <p className="mb-6">
                  In the event of termination of the agreement between the Company and the merchant, any Reserve amount will be released in accordance with the terms specified herein.
                </p>

                <h3 className="text-xl font-semibold mb-4">Governing Law</h3>
                <p className="mb-6">
                  These Terms will be governed by and interpreted in accordance with the laws of Maharashtra. Any disputes arising from or related to these Terms will be resolved through arbitration or otherwise mutually agreed by the parties.
                </p>

                <p className="mb-6">
                  By accepting these Terms, the merchant acknowledges and agrees to adhere to the conditions outlined for the Rolling and Reserve Amount.
                </p>
              </div>
            )}
          </div>

          {/* Section 10: Disclaimer */}
          <div id="disclaimer" className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <button
              onClick={() => toggleSection('disclaimer')}
              className="w-full px-8 py-6 text-left bg-blue-50 hover:bg-blue-100 transition-colors flex justify-between items-center"
            >
              <h2 className="text-2xl font-semibold text-gray-800">10. Disclaimer</h2>
              <span className="text-3xl font-bold text-blue-600">
                {openSection === 'disclaimer' ? '−' : '+'}
              </span>
            </button>

            {openSection === 'disclaimer' && (
              <div className="px-8 pb-8 pt-4 text-gray-700 leading-relaxed">
                <p className="mb-6">
                  To the fullest extent permitted by applicable law, we disclaim all representations, warranties, and conditions related to our website and its use.
                </p>
                <p className="mb-6">
                  Nothing in this disclaimer will:
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-6">
                  <li>Limit or exclude our or your liability for death or personal injury;</li>
                  <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                  <li>Limit any of our or your liabilities in any way not permitted under applicable law; or</li>
                  <li>Exclude any of our or your liabilities that cannot be excluded under applicable law.</li>
                </ul>
                <p className="mb-6">
                  The limitations and prohibitions of liability set forth in this section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including those arising from contract, tort, or breach of statutory duty. As long as the website and the information and services it provides are offered free of charge, we will not be liable for any loss or damage of any nature.
                </p>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div id="contact" className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-4">
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <div className="space-y-3">
              <p><strong>Email:</strong> <a href="mailto:inquiry@spay.live" className="text-blue-600 hover:underline">inquiry@spay.live</a></p>
              <p><strong>Website:</strong> <a href="https://spay.live" className="text-blue-600 hover:underline">https://spay.live</a></p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-gray-500 text-sm">
          Last updated: February 16, 2026
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;