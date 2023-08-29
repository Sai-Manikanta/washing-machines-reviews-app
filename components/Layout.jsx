import React from "react";
import ChangePriceDropdown from "./ChangePriceDropdown";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, priceUnder}) {
  return (
    <>
      <Header />
      <main>
        <section className="max-w-5xl mx-auto mt-8 p-3">
          <div className="sm:flex justify-between">
            <h1 className="text-xl sm:text-2xl font-medium text-slate-800">
              Best washing machines under <span className="font-semibold">₹{priceUnder}</span>
            </h1>
            <div className="flex justify-end">
              <ChangePriceDropdown priceUnder={priceUnder}/>
            </div>
          </div>
          {children}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Layout;