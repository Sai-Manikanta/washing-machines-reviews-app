import React from "react";
import Header from "./Header";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import HeroSection from "./HeroSection";
import ChangePriceDropdown from "./ChangePriceDropdown";
import WhyUs from "./WhyUs";
import Footer from "./Footer";

function Layout({ children, priceUnder }) {
  return (
    <>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-PVYNK6W112" />
      <Header priceUnder={priceUnder}/>
      <HeroSection />
      <main>
        <section className="max-w-5xl mx-auto py-6 px-3">
          <div className="sm:flex justify-between">
            <h1 className="text-md sm:text-xl md:text-2xl font-bold text-slate-800 mb-[-15px] sm:mb-0">
              Best washing machines under{" "}
              <span className="font-semibold">₹{priceUnder}</span>
            </h1>
            {/* <div className="flex justify-end">
              <ChangePriceDropdown priceUnder={priceUnder} />
            </div> */}
          </div>
          {children}
        </section>
      </main>
      <WhyUs/>
      <Footer />
    </>
  );
}

export default Layout;
