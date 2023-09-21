import React from "react";
import Header from "@/components/Header";

function aboutUs() {
  return (
    <>
      <Header aboutUs />

      <section className="flex flex-col items-center max-w-5xl mx-auto px-7 lg:px-0">
        <h1 className="text-primary text-3xl font-extrabold my-6">About Us</h1>

        <p className="text-primar text-md font-medium indent-14 lg:text-lg">
          BestElectro.in is your premier online destination for electronics,
          gadgets, and home appliances. We provide expert reviews,
          comparisons,and recommendations to empower tech-savvy consumers in
          making informed purchasing decisions. Currently specializing in
          washing machines, we're expanding our coverage to include more
          electronics soon. Trust us to simplify your shopping experience and
          help you find the best products that suit your needs and budget. Thank
          you for choosing BestElectro.in as your trusted source for all things
          electronic.
        </p>

        <hr className="bg-slate-400 h-0.5 mt-9 mb-2 w-full" />

        <div className="w-full">
          <h2 className="text-primary text-3xl font-extrabold mt-6 mb-5 text-center">
            Meet Team
          </h2>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-6 text-center bg-white shadow-md lg:col-span-3 md:col-span-4">
              <img
                src="/images/teamMembers/kiran.jpg"
                alt="Kiran Teammate"
                className="w-full h-auto block
                "
              />
              <div className="p-2">
                <p className="text-md font-semibold">Devi Kiran</p>
                <hr className="bg-slate-400 h-0.5 mt-1 mb-2 mx-3" />
                <p className="text-sm font-medium">
                  Reviewer & <br /> Frontend developer
                </p>
              </div>
            </div>
            <div className="col-span-6 text-center bg-white shadow-md lg:col-span-3 md:col-span-4">
              <img
                src="/images/teamMembers/pradeep.jpg"
                alt="Pradeep Teammate"
                className="w-full h-auto block
                "
              />
              <div className="p-2">
                <p className="text-md font-semibold">Pradeep Kumar</p>
                <hr className="bg-slate-400 h-0.5 mt-1 mb-2 mx-3" />
                <p className="text-sm font-medium">Frontend developer</p>
              </div>
            </div>
            <div className="col-span-6 text-center bg-white shadow-md lg:col-span-3 md:col-span-4">
              <img
                src="/images/teamMembers/laxmi.jpg"
                alt="Laxmi Teammate"
                className="w-full h-auto block
                "
              />
              <div className="p-2">
                <p className="text-md font-semibold">Laxmi</p>
                <hr className="bg-slate-400 h-0.5 mt-1 mb-2 mx-3" />
                <p className="text-sm font-medium">Digitel marketer</p>
              </div>
            </div>
            <div className="col-span-6 text-center bg-white shadow-md lg:col-span-3 md:col-start-5 md:col-end-9">
              <img
                src="/images/teamMembers/manikanta.jpg"
                alt="SaiManikanta Teammate"
                className="w-full h-auto block
                "
              />
              <div className="p-2">
                <p className="text-md font-semibold">SaiManikanta</p>
                <hr className="bg-slate-400 h-0.5 mt-1 mb-2 mx-3" />
                <p className="text-sm font-medium">
                  UI UX & <br /> Full Stack Developer
                </p>
              </div>
            </div>
          </div>
        </div>

        <button className="bg-primary text-md px-12 py-3 text-white font-bold my-12 rounded shadow">
          <a href="mailto:contact@bestelectro.in">Contact Us</a>
        </button>
      </section>
      <footer className="bg-primary px-5 py-6 text-white">
        <div className="max-w-5xl mx-auto">
          <p>&#169; Copyright 2023</p>
        </div>
      </footer>
    </>
  );
}

export default aboutUs;
