import React from "react";
import Image from "next/image";
import Link from "next/link";

function WhyUs() {
  return (
    <div className="bg-white px-4 lg:px-0 py-16">
      <div className="max-w-5xl mx-auto grid grid-cols-12 text-center gap-6">
        <div className="col-span-full">
          <h3 className="text-4xl font-bold mb-3">WHY US?</h3>
          <p>
            <Link className="text-blue-600" href="/">
              BestElectro's
            </Link>{" "}
            dedicated team invests extensive time and effort into thorough
            product research, meticulous manual checks, rigorous verification,
            and meticulous product selection. Our product ranking system is
            founded on factors like product quality, performance, pricing, and
            customer feedback. BestElectro maintains a completely impartial
            stance, exclusively endorsing efficient and cost-effective products
            for our customers. Our utmost goal is to enhance the shopping
            journey for our customers, offering them not only the finest
            available products but also a seamless purchasing experience.
          </p>
        </div>
        <div className="col-span-full md:col-span-4 md:row-span-2 flex justify-center md:items-center">
          <Image
            className="w-[250px] md:w-full"
            src="/images/team-work.png"
            width="200"
            height="35"
            alt="bestelectro.in logo"
          />
        </div>
        <div className="col-span-full md:col-span-4">
          <h4 className="text-2xl font-semibold mb-2">Our Work</h4>
          <p>
            We engage in research, testing, verification, and selection of the
            top products in various categories and subcategories by considering
            customer reviews. Our coverage spans from "Home & Kitchen" to
            "Electronics & Large Appliances" and everything in between. Every
            day, we continuously expand our list with new and superior products.
          </p>
        </div>
        <div className="col-span-full md:col-span-4">
          <h4 className="text-2xl font-semibold mb-2">Our Approach</h4>
          <p>
            Our specially crafted ranking system scours major online
            marketplaces to access the most recent customer feedback, up-to-date
            pricing data, and value-for-money assessments to assign a score out
            of 10 to each product. Utilizing this score, we discern and
            highlight the top brand products tailored to your specific
            preferences and interests.
          </p>
        </div>
        <div className="col-span-full md:col-span-4">
          <h4 className="text-2xl font-semibold mb-2">Our Vision</h4>
          <p>
            Our motto revolves around simplifying the consumer's shopping
            experience, ensuring that the process of selecting the right product
            is neither time-consuming nor bewildering. We believe that if our
            users can shop with peace of mind, we will gain their complete
            trust.
          </p>
        </div>
        <div className="col-span-full md:col-span-4 md:row-span-2">
          <h4 className="text-2xl font-semibold mb-2">
          Our Algorithms
          </h4>
          <p>
            <Link className="text-blue-600" href="/">
              BestElectro's
            </Link>{" "}
            cutting-edge Our Algorithms are designed to provide you
            with comprehensive insights for informed product decisions. Our
            system calculates scores by considering a wide range of factors,
            including price, customer reviews, best seller rankings, and
            customer preferences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
