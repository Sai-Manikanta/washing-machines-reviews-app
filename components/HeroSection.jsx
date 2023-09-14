import React from "react";
import WashingMachineGuideModal from "./WashingMachineGuideModal";

function HeroSection() {
  return (
    <div className="sm:bg-white">
      <div className="max-w-5xl mx-auto sm:bg-white">
        <div className="grid sm:grid-cols-2">
          <div className="sm:pt-5 md:pt-8 lg:pt-10 pl-0 sm:pl-5 md:pl-10 lg:pl-0">
            <span className="text-3xl block font-bold pt-8 pl-5 pr-5 pb-3 sm:pl-0 sm:text-3xl md:text-4xl  lg:text-5xl sm:leading-[1.2] md:leading-[1.3] lg:leading-[1.2]">
              Find the best washing machine for you...
            </span>
            <video
              disableRemotePlayback
              autoPlay
              muted
              loop
              className="sm:hidden w-100 mx-auto w-[600px]"
            >
              <source src="/videos/washingMachine.webm" type="video/webm" />
              <track kind="subtitles" srcLang="en" />
              Your browser does not support the video tag.
            </video>
            <div>
              <WashingMachineGuideModal />
            </div>
          </div>
          <div>
            <video
              disableRemotePlayback
              autoPlay
              muted
              loop
              className="hidden sm:block w-100 mx-auto w-[600px] "
            >
              <source src="/videos/washingMachine.webm" type="video/webm" />
              <track kind="subtitles" srcLang="en" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <hr
          className="mx-5 bg-tertiary mt-2 sm:hidden"
          style={{ height: "2px" }}
        />
      </div>
    </div>
  );
}

export default HeroSection;
