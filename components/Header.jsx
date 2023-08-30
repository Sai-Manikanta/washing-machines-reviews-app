import React from "react";
import WashingMachineGuideModal from "./WashingMachineGuideModal";
import Image from "next/image";

function Header() {
  return (
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
            <video autoPlay muted loop className="hidden sm:block w-100 mx-auto w-[600px] ">
              <source src="/videos/washingMachine.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>

            {/* <Image
              src="/images/washingMachine.gif"
              alt="Picture of the author"
              width={600}
              height={500}
              className="hidden sm:block w-100 mx-auto"
              priority={true}
            /> */}
          </div>
        </div>
        <hr
          className="mx-5 bg-tertiary mt-2 sm:hidden"
          style={{ height: "2px" }}
        />
      </header>
    </div>
  );
}

export default Header;
