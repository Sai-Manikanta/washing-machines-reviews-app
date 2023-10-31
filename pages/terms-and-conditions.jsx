import React from "react";
import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";

function termsAndConditions() {
  return (
    <>
      <Header terms/>
      <section className="max-w-5xl mx-auto px-7 lg:px-0 mt-16">
        <p className="mb-4">
          Certainly, I can help you revise and expand the content. Here's a more
          detailed and refined version:
        </p>
        <h2 className="text-xl font-medium mb-2">Terms of Service</h2>
        <p className="mb-4">
          Welcome to{" "}
          <Link href="/" className="text-blue-600">
            BestElectro.in
          </Link>
          ! Before you start using our website &#40;referred to as the
          "Service"&#41;, please take a moment to carefully review the following
          Terms of Service &#40;"Terms"&#41;. Best Electro &#40;"us," "we," or
          "our"&#41; operates this service, and your access to and use of the
          website are subject to your acceptance of and compliance with these
          Terms.
        </p>
        <h2 className="text-xl font-medium mb-2">Acceptance of Terms</h2>
        <p className="mb-4">
          Your use of the Service signifies your agreement to be bound by these
          Terms. Should you disagree with any part of these terms, we kindly
          request that you refrain from accessing the Service. These Terms apply
          to all users, including visitors and others who interact with the
          Service.
        </p>
        <h2 className="text-xl font-medium mb-2">Offer Listings</h2>
        <p className="mb-4">
          <Link href="/" className="text-blue-600">
            BestElectro.in
          </Link>{" "}
          provides a platform where you can find a curated selection of offers
          and discounts from various e-commerce websites. However, we do not
          guarantee that you will receive free samples, discounted products, or
          recharges through our service.
        </p>
        <p className="mb-4">
          We want to make it clear that{" "}
          <Link href="/" className="text-blue-600">
            BestElectro.in
          </Link>{" "}
          does not sell any products. While we make every effort to ensure the
          quality and authenticity of the product information listed on our
          site, we cannot guarantee the authenticity or originality of products
          ordered or purchased from the e-commerce websites we feature.
        </p>
        <p className="mb-4">
          It's important to note that all content, trademarks, and logos
          displayed on our site are the copyright of their respective owners.
        </p>
        <p className="mb-4">
          <Link href="/" className="text-blue-600">
            BestElectro.in
          </Link>{" "}
          will not be held responsible for any loss or damage resulting from
          transactions or disputes between users or between users and third
          parties.
        </p>
        <p className="mb-4">
          To use our services, you must be at least 15 years of age.
        </p>
        <h2 className="text-xl font-medium mb-2">Links to Other Websites</h2>
        <p className="mb-4">
          Our Service may include links to third-party websites or services that
          are not owned or controlled by Best Electro. We advise you to be aware
          that we have no control over the content, privacy policies, or
          practices of these third-party websites or services.
        </p>
        <p className="mb-4">
          Best Electro cannot be held directly or indirectly responsible for any
          damage or loss caused or alleged to be caused by, or in connection
          with, the use of or reliance on any content, goods, or services
          available on or through these third-party websites or services.
        </p>
        <p className="mb-4">
          We strongly recommend that you carefully review the terms and
          conditions and privacy policies of any third-party websites or
          services that you visit.
        </p>
        <h2 className="text-xl font-medium mb-2">Governing Law</h2>
        <p className="mb-4">
          These Terms are governed by the laws of Uttar Pradesh, India, without
          regard to conflict of law provisions.
        </p>
        <p className="mb-4">
          If we do not enforce any right or provision in these Terms, it does
          not waive those rights. If any provision of these Terms is held to be
          invalid or unenforceable by a court, the remaining provisions will
          remain in effect. These Terms constitute the entire agreement between
          us regarding the Service, superseding any prior agreements.
        </p>
        <h2 className="text-xl font-medium mb-2">Changes</h2>
        <p className="mb-4">
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. If a revision is significant, we will make
          reasonable efforts to provide at least 30 days' notice before the new
          terms take effect.
        </p>
        <p className="mb-4">
          By continuing to access or use our Service after these revisions
          become effective, you agree to be bound by the updated terms. If you
          do not agree with the new terms, please discontinue using the Service.
        </p>
        <h2 className="text-xl font-medium mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns regarding these Terms, please do
          not hesitate to contact us. We are here to assist you.
        </p>
      </section>
      <Footer/>
    </>
  );
}

export default termsAndConditions;
