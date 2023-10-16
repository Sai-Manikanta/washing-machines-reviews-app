import React from "react";
import Header from "./Header";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import HeroSection from "./HeroSection";
import ChangePriceDropdown from "./ChangePriceDropdown";
import Footer from "./Footer";

function Layout({ children, priceUnder }) {
  return (
    <>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-PVYNK6W112" />
      <Header />
      <HeroSection />
      <main>
        <section className="max-w-5xl mx-auto mt-8 p-3">
          <div className="sm:flex justify-between">
            <h1 className="text-xl sm:text-2xl font-medium text-slate-800 mb-1.5 sm:mb-0">
              Best washing machines under{" "}
              <span className="font-semibold">₹{priceUnder}</span>
            </h1>
            <div className="flex justify-end">
              <ChangePriceDropdown priceUnder={priceUnder} />
            </div>
          </div>
          {children}
        </section>
      </main>
      <Footer />
      {/* <Footer /> */}
      {/* <footer className="bg-primary px-5 pt-10 pb-6 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg border-l-4 pl-2 mb-4 font-bold">
            Usefull Links of Top washing machines
          </h2>
          <div className="flex flex-col md:flex-row md:gap-12 mb-4">
            <div>
              <Link
                href="/best-washing-machines-under-40000"
                className="block hover:underline mb-2"
              >
                Best washing machines under ₹40,000
              </Link>

              <Link
                href="/best-washing-machines-under-35000"
                className="block hover:underline mb-2"
              >
                Best washing machines under ₹35,000
              </Link>

              <Link
                href="/best-washing-machines-under-30000"
                className="block hover:underline mb-2"
              >
                Best washing machines under ₹30,000
              </Link>

              <Link
                href="/best-washing-machines-under-25000"
                className="block hover:underline mb-2"
              >
                Best washing machines under ₹25,000
              </Link>
            </div>
            <div>
              <Link
                href="/best-washing-machines-under-20000"
                className="block hover:underline mb-2"
              >
                Best washing machines under ₹20,000
              </Link>

              <Link
                href="/best-washing-machines-under-15000"
                className="block hover:underline mb-2"
              >
                Best washing machines under ₹15,000
              </Link>

              <Link
                href="/best-washing-machines-under-10000"
                className="block hover:underline mb-2"
              >
                Best washing machines under ₹10,000
              </Link>
            </div>
          </div>
          <div className="max-w-5xl mx-auto flex justify-between">
            <div>
              <Link className="" href="/contact-us">
                contact us
              </Link>
              <span className="mx-2.5">|</span>
              <Link className="" href="/privacy-and-policy">
                Privacy
              </Link>
              <span className="mx-2.5">|</span>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </div>
            <div>
              <p className="inline-block">&#169; Copyright 2023</p>
              <span className="mx-2.5">|</span>
              <a href="#header">BACK To Top</a>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
}

export default Layout;
