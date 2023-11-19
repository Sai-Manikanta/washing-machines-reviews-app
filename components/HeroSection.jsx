import React from "react";
import Link from "next/link";
// import WashingMachineGuideModal from "./WashingMachineGuideModal";

function HeroSection() {
  return (
    <div className="sm:bg-white border-b-2">
      <div className="max-w-5xl mx-auto sm:bg-white">
        <div className="grid sm:grid-cols-2">
          <div className="sm:pt-5 md:pt-8 lg:pt-10 pl-0 sm:pl-5 md:pl-10 lg:pl-0">
            <h1 className="text-3xl block font-bold pt-8 pl-5 pr-5 pb-1 sm:pl-0 sm:text-3xl md:text-4xl  lg:text-5xl sm:leading-[1.2] md:leading-[1.3] lg:leading-[1.2]">
              Find the best washing machine for your family...<br />
              {/* Find the Best Washing Machine for You'r Family... */}
            </h1>

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

            
            


            <div className="bg-white px-4 pb-5 -mt-10 sm:hidden">
              <h3 className="text-lg text-center font-bold mb-4">LOOKING UNDER 1</h3>
            
              {/* grid grid-cols-3 gap-3 */}
            <div className="grid grid-cols-3 gap-3">
              {/* <WashingMachineGuideModal /> */}

              <Link
                rel="nofollow"
                href="/best-washing-machines-under-10000"
                className="bg-yellow-400 border-b-4 border-yellow-500 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70"
              >
                 ₹10,000
              </Link>

              <Link
                rel="nofollow"
                href="/best-washing-machines-under-15000"
                className="bg-yellow-400 border-b-4 border-yellow-500 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70"
              >
                 ₹15,000
              </Link>

              <Link
                rel="nofollow"
                href="/best-washing-machines-under-20000"
                className="bg-yellow-400 border-b-4 border-yellow-500 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70"
              >
                 ₹20,000
              </Link>

              <Link
                rel="nofollow"
                href="/best-washing-machines-under-25000"
                className="bg-yellow-400 border-b-4 border-yellow-500 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70"
              >
                 ₹25,000
              </Link>

              <Link
                rel="nofollow"
                href="/best-washing-machines-under-30000"
                className="bg-yellow-400 border-b-4 border-yellow-500 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70"
              >
                 ₹30,000
              </Link>

              <Link
                rel="nofollow"
                href="/best-washing-machines-under-35000"
                className="bg-yellow-400 border-b-4 border-yellow-500 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70"
              >
                 ₹35,000
              </Link>

              <Link
                rel="nofollow"
                href="/best-washing-machines-under-45000"
                className="bg-yellow-400 border-b-4 border-yellow-500 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70"
              >
                 ₹40,000
              </Link>

              {/* <Link
                rel="nofollow"
                href="/best-washing-machines-under-45000"
                className="bg-yellow-400 border-b-4 border-yellow-500 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70"
              >
                 ₹45,000
              </Link>

              <Link
                rel="nofollow"
                href="/best-washing-machines-under-50000"
                className="bg-yellow-400 border-b-4 border-yellow-500 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70"
              >
                 ₹50,000
              </Link> */}
            </div>
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



        <div className="bg-white pb-5 md:px-8 lg:px-0 md:-mt-20 hidden sm:block">
              {/* grid grid-cols-3 gap-3 */}
            <h3 className="mb-4 text-lg font-bold text-center md:text-left">LOOKING UNDER</h3>
            <div className="flex flex-wrap gap-3 relative z-5">
              {/* <WashingMachineGuideModal /> */}

              <Link
                rel="nofollow"
                href="/best-washing-machines-under-10000"
                className="bg-yellow-400 border-b-4 border-yellow-500 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70"
              >
                 ₹10,000
              </Link>

              <Link
                rel="nofollow"
                href="/best-washing-machines-under-15000"
                className="bg-yellow-400 border-b-4 border-yellow-500 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70"
              >
                 ₹15,000
              </Link>

              <Link
                rel="nofollow"
                href="/best-washing-machines-under-20000"
                className="bg-yellow-400 border-b-4 border-yellow-500 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70"
              >
                 ₹20,000
              </Link>

              <Link
                rel="nofollow"
                href="/best-washing-machines-under-25000"
                className="bg-yellow-400 border-b-4 border-yellow-500 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70"
              >
                 ₹25,000
              </Link>

              <Link
                rel="nofollow"
                href="/best-washing-machines-under-30000"
                className="bg-yellow-400 border-b-4 border-yellow-500 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70"
              >
                 ₹30,000
              </Link>

              <Link
                rel="nofollow"
                href="/best-washing-machines-under-35000"
                className="bg-yellow-400 border-b-4 border-yellow-500 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70"
              >
                 ₹35,000
              </Link>

              <Link
                rel="nofollow"
                href="/best-washing-machines-under-40000"
                className="bg-yellow-400 border-b-4 border-yellow-500 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70"
              >
                 ₹40,000
              </Link>

              {/* <Link
                rel="nofollow"
                href="/best-washing-machines-under-45000"
                className="bg-yellow-400 border-b-4 border-yellow-500 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70"
              >
                 ₹45,000
              </Link>

              <Link
                rel="nofollow"
                href="/best-washing-machines-under-50000"
                className="bg-yellow-400 border-b-4 border-yellow-500 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70"
              >
                 ₹50,000
              </Link> */}
            </div>
            </div>

        
        {/* <hr
          className="mx-5 bg-tertiary mt-2 sm:hidden"
          style={{ height: "2px" }}
        /> */}
      </div>
    </div>
  );
}

export default HeroSection;
