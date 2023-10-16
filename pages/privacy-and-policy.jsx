import React from "react";
import Header from "@/components/Header";
import Link from "next/link";

function privacyAndPolicy() {
  return (
    <>
      <Header />
      <section className="max-w-5xl mx-auto px-7 lg:px-0 mt-16">
        <h1 className="font-bold text-3xl mb-6">Privacy Policy</h1>
        <p className="mb-4">
          Welcome to BestElectro's Privacy Policy. This document outlines how we
          collect, use, maintain, and disclose information from our users
          &#40;"Users"&#41; on the{" "}
          <Link href="/" className="text-blue-600">
            https://BestElectro.in
          </Link>{" "}
          website &#40;"Site"&#41; and applies to all products and services
          offered by BestElectro.
        </p>
        <h2 className="text-xl font-bold mb-1">
          Personal Identification Information
        </h2>
        <p className="mb-4">
          We may collect personal identification information from Users in
          various ways, such as when Users visit our site, subscribe to our
          newsletter, or engage with our services, features, or resources. The
          information collected may include names and email addresses. Users can
          choose to visit our Site anonymously. We only collect personal
          identification information when Users voluntarily submit it. While
          Users have the option to refuse to provide this information, doing so
          may limit their participation in certain Site-related activities.
        </p>
        <h2 className="text-xl font-bold mb-1">
          Non-Personal Identification Information
        </h2>
        <p className="mb-4">
          We may gather non-personal identification information when Users
          interact with our Site. This information can include the browser type,
          computer specifications, technical data about Users' connections to
          our Site &#40;like operating systems and internet service
          providers&#41;, and other similar information.
        </p>
        <h2 className="text-xl font-bold mb-1">Web Browser Cookies</h2>
        <p className="mb-4">
          BestElectro may use "cookies" to enhance the User experience. Cookies
          are placed on a User's hard drive for record-keeping and occasionally
          to track information about them. Users can configure their web
          browsers to block cookies or receive alerts when cookies are sent.
          However, please note that some parts of the Site may not function
          properly if cookies are disabled.
        </p>
        <h2 className="text-xl font-bold mb-1">
          How We Use Collected Information
        </h2>

        <p>
          BestElectro collects and uses Users' personal information for various
          purposes:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <span className="font-semibold">Personalization: </span>We analyze
            aggregate data to understand how Users collectively utilize the
            services and resources on our Site.
          </li>
          <li>
            <span className="font-semibold">Improvement: </span>Feedback
            provided by Users is used to enhance our products and services.
          </li>
          <li>
            <span className="font-semibold">
              Promotions and Communication:{" "}
            </span>{" "}
            We send Users information related to topics they've agreed to
            receive, such as promotions, contests, surveys, or other features.
          </li>

          <li>
            <span className="font-semibold">Periodic Emails: </span>
            We use email addresses to respond to inquiries, questions, or
            requests. Users who opt into our mailing list receive emails
            containing company news, updates, related product or service
            information, and more. Users can unsubscribe from future emails at
            any time using the instructions provided in the email or by
            contacting us via our Site.
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-1">
          How We Protect Your Information
        </h2>
        <p className="mb-4">
          BestElectro employs appropriate data collection, storage, and security
          practices to safeguard personal information, usernames, passwords,
          transaction details, and data stored on our Site. Sensitive and
          private data exchanged between the Site and Users are transmitted via
          a secure SSL channel and encrypted with digital signatures.
        </p>
        <h2 className="text-xl font-bold mb-1">
          Sharing Your Personal Information
        </h2>
        <p className="mb-4">
          We do not sell, trade, or rent Users' personal identification
          information to third parties. We may share generic, aggregated
          demographic information not linked to any personally identifiable data
          with our business partners, trusted affiliates, and advertisers for
          the purposes mentioned above.
        </p>
        <h2 className="text-xl font-bold mb-1">Advertising</h2>
        <p className="mb-4">
          Ads on our Site may be delivered by advertising partners who may use
          cookies. These cookies help ad servers recognize a User's computer,
          allowing them to compile non-personal identification information about
          you and others using your computer. This information aids ad networks
          in delivering targeted advertisements. Please note that this privacy
          policy does not cover the use of cookies by advertisers.
        </p>
        <h2 className="text-xl font-bold mb-1">External Links</h2>
        <p className="mb-4">
          Our Site may contain links to other websites or content from third
          parties. These external links are not monitored for accuracy or
          reliability by us. We do not endorse or guarantee the information
          provided by third-party websites linked through our Site or any
          website or feature linked in advertising banners.
        </p>
        <h2 className="text-xl font-bold mb-1">Affiliates Disclaimer</h2>
        <p className="mb-4">
          The Site may include affiliate links, and we may earn a commission for
          purchases made by Users on affiliate websites through these links.
          BestElectro is a participant in the Amazon.in Associates Program.
        </p>

        <h2 className="text-xl font-bold mb-1">
          Changes to this Privacy Policy
        </h2>
        <p className="mb-4">
          BestElectro reserves the right to update this privacy policy at any
          time. Any changes will be notified on the Site's main page, and the
          "Effective Date" at the bottom of this page will be revised. Users are
          encouraged to regularly check this page for updates.
        </p>
        <h2 className="text-xl font-bold mb-1">
          Your Acceptance of These Terms
        </h2>
        <p className="mb-4">
          By using this Site, you acknowledge and accept this policy. If you do
          not agree, please refrain from using our Site. Continued use of the
          Site following any policy changes constitutes acceptance.
        </p>
        <h2 className="text-xl font-bold mb-1">Contacting</h2>
        <p className="mb-4">
          If you have questions about this Privacy Policy, our site's practices,
          or your interactions with the site, please reach out to us at:
        </p>
        <p className="mb-4">
          BestElectro
          <br />
          <Link href="/" className="text-blue-600">
            https://BestElectro.in
          </Link>
          <br />
          <a href="mailto:devikiran333007@gmail.com" className="text-blue-600">
            contact@bestelectro.in
          </a>
        </p>
        <p className="mb-4">
          Thank you for your trust in BestElectro's privacy practices.
        </p>
      </section>

      <footer className="bg-primary px-5 py-6 text-white">
        <div className="max-w-5xl mx-auto">
          <p>&#169; Copyright 2023</p>
        </div>
      </footer>
    </>
  );
}

export default privacyAndPolicy;
