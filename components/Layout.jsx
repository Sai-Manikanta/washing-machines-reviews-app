import React from "react";
import Image from "next/image";
import WashingMachineGuideModal from "./WashingMachineGuideModal";

function Layout({ children, priceUnder }) {
  return (
    <div>
      <div className="sm:bg-white">
        <header className="max-w-5xl mx-auto sm:bg-white">
          <div className="grid sm:grid-cols-2">
            <div className="sm:pt-5 md:pt-8 lg:pt-10 pl-0 sm:pl-5 md:pl-10 lg:pl-0">
              <span className="text-3xl block font-bold p-5 sm:pl-0 sm:text-3xl md:text-4xl lg:text-5xl sm:leading-[1.2] md:leading-[1.3] lg:leading-[1.2]">
                Find the best washing machine for you.
              </span>
              <Image
                src="/images/washingMachine.gif"
                alt="Picture of the author"
                width={600}
                height={500}
                className="sm:hidden w-100 mx-auto"
              />
              <div>
                <WashingMachineGuideModal />
              </div>
            </div>
            <div>
              <Image
                src="/images/washingMachine.gif"
                alt="Picture of the author"
                width={600}
                height={500}
                className="hidden sm:block w-100 mx-auto"
              />
            </div>
          </div>
          <hr
            className="mx-5 bg-tertiary mt-2 sm:hidden"
            style={{ height: "2px" }}
          />
        </header>
      </div>
        {children}
    </div>
  );
}

export default Layout;
