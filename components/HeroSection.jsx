import React from "react";
import Link from "next/link";
// import WashingMachineGuideModal from "./WashingMachineGuideModal";

function HeroSection({ priceUnder, home }) {
  console.log(priceUnder);
  return (
    <div className="sm:bg-white border-b-2">
      <div className="max-w-5xl mx-auto sm:bg-white">
        <div className="grid sm:grid-cols-2">
          <div className="sm:pt-5 md:pt-8 lg:pt-10 pl-0 sm:pl-5 md:pl-10 lg:pl-0">
            <h1 className="text-2xl sm:lowercase sm:text-4xl block font-bold pt-6 sm:pt-8 pl-5 pr-5 pb-1 sm:pl-0 md:text-5xl  lg:text-5xl leading-[1.5] sm:leading-[1.2] md:leading-[1.3] lg:leading-[1.3]">
              {home ? (
                <span>
                  <span className="uppercase">F</span>ind Best Washing Machines
                  For Your Family...
                </span>
              ) : (
                <span>
                  <span className="uppercase">B</span>est Washing Machines Under
                  ₹{priceUnder}
                </span>
              )}
            </h1>

            <video
              disableRemotePlayback
              autoPlay
              muted
              loop
              className="sm:hidden w-100 mx-auto w-[600px]"
            >
              <source src="/videos/washingMachine3.webm" type="video/webm" />
              <track kind="subtitles" srcLang="en" />
              Your browser does not support the video tag.
            </video>

            <div className="bg-white px-4 pb-5 sm:hidden">
              <h3 className="text-center font-bold mb-4">LOOKING UNDER</h3>

              {/* grid grid-cols-3 gap-3 */}
              <div className="grid grid-cols-3 gap-3">
                {/* <WashingMachineGuideModal /> */}

                <Link
                  rel="nofollow"
                  href="/best-washing-machines-under-10000"
                  className={`${
                    priceUnder == "10,000"
                      ? "bg-primary text-white border-slate-700"
                      : "bg-yellow-400 border-yellow-500"
                  } border-b-4 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70`}
                >
                  ₹10,000
                </Link>

                <Link
                  rel="nofollow"
                  href="/best-washing-machines-under-15000"
                  className={`${
                    priceUnder == "15,000"
                      ? "bg-primary text-white border-slate-700"
                      : "bg-yellow-400 border-yellow-500"
                  } border-b-4 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70`}
                >
                  ₹15,000
                </Link>

                <Link
                  rel="nofollow"
                  href="/best-washing-machines-under-20000"
                  className={`${
                    priceUnder == "20,000"
                      ? "bg-primary text-white border-slate-700"
                      : "bg-yellow-400 border-yellow-500"
                  } border-b-4 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70`}
                >
                  ₹20,000
                </Link>

                <Link
                  rel="nofollow"
                  href="/best-washing-machines-under-25000"
                  className={`${
                    priceUnder == "25,000"
                      ? "bg-primary text-white border-slate-700"
                      : "bg-yellow-400 border-yellow-500"
                  } border-b-4 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70`}
                >
                  ₹25,000
                </Link>

                <Link
                  rel="nofollow"
                  href="/best-washing-machines-under-30000"
                  className={`${
                    priceUnder == "30,000"
                      ? "bg-primary text-white border-slate-700"
                      : "bg-yellow-400 border-yellow-500"
                  } border-b-4 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70`}
                >
                  ₹30,000
                </Link>

                <Link
                  rel="nofollow"
                  href="/best-washing-machines-under-35000"
                  className={`${
                    priceUnder == "35,000"
                      ? "bg-primary text-white border-slate-700"
                      : "bg-yellow-400 border-yellow-500"
                  } border-b-4 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70`}
                >
                  ₹35,000
                </Link>

                <Link
                  rel="nofollow"
                  href="/best-washing-machines-under-40000"
                  className={`${
                    priceUnder == "40,000"
                      ? "bg-primary text-white border-slate-700"
                      : "bg-yellow-400 border-yellow-500"
                  } border-b-4 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70`}
                >
                  ₹40,000
                </Link>

                {/* <Link
                rel="nofollow"
                href="/best-washing-machines-under-45000"
                className={`${priceUnder == "45,000" ? "bg-primary text-white border-slate-700" : "bg-yellow-400 border-yellow-500"} border-b-4 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70`}
              >
                 ₹45,000
              </Link>

              <Link
                rel="nofollow"
                href="/best-washing-machines-under-50000"
                className={`${priceUnder == "50,000" ? "bg-primary text-white border-slate-700" : "bg-yellow-400 border-yellow-500"} border-b-4 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70`}
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
              <source src="/videos/washingMachine3.webm" type="video/webm" />
              <track kind="subtitles" srcLang="en" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="bg-[#F0EDF1] sm:bg-white pb-5 md:px-8 lg:px-0  hidden sm:block">
          {/* grid grid-cols-3 gap-3 */}
          <h3 className="mb-4 text-xl font-semibold text-center md:text-left">
            LOOKING UNDER
          </h3>
          <div className="flex flex-wrap gap-3 relative z-5">
            {/* <WashingMachineGuideModal /> */}

            <Link
              rel="nofollow"
              href="/best-washing-machines-under-10000"
              className={`${
                priceUnder == "10,000"
                  ? "bg-primary text-white border-slate-700"
                  : "bg-yellow-400 border-yellow-500"
              } border-b-4 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70`}
            >
              ₹10,000
            </Link>

            <Link
              rel="nofollow"
              href="/best-washing-machines-under-15000"
              className={`${
                priceUnder == "15,000"
                  ? "bg-primary text-white border-slate-700"
                  : "bg-yellow-400 border-yellow-500"
              } border-b-4 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70`}
            >
              ₹15,000
            </Link>

            <Link
              rel="nofollow"
              href="/best-washing-machines-under-20000"
              className={`${
                priceUnder == "20,000"
                  ? "bg-primary text-white border-slate-700"
                  : "bg-yellow-400 border-yellow-500"
              } border-b-4 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70`}
            >
              ₹20,000
            </Link>

            <Link
              rel="nofollow"
              href="/best-washing-machines-under-25000"
              className={`${
                priceUnder == "25,000"
                  ? "bg-primary text-white border-slate-700"
                  : "bg-yellow-400 border-yellow-500"
              } border-b-4 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70`}
            >
              ₹25,000
            </Link>

            <Link
              rel="nofollow"
              href="/best-washing-machines-under-30000"
              className={`${
                priceUnder == "30,000"
                  ? "bg-primary text-white border-slate-700"
                  : "bg-yellow-400 border-yellow-500"
              } border-b-4 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70`}
            >
              ₹30,000
            </Link>

            <Link
              rel="nofollow"
              href="/best-washing-machines-under-35000"
              className={`${
                priceUnder == "35,000"
                  ? "bg-primary text-white border-slate-700"
                  : "bg-yellow-400 border-yellow-500"
              } border-b-4 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70`}
            >
              ₹35,000
            </Link>

            <Link
              rel="nofollow"
              href="/best-washing-machines-under-40000"
              className={`${
                priceUnder == "40,000"
                  ? "bg-primary text-white border-slate-700"
                  : "bg-yellow-400 border-yellow-500"
              } border-b-4 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70`}
            >
              ₹40,000
            </Link>

            {/* <Link
                rel="nofollow"
                href="/best-washing-machines-under-45000"
                className={`${priceUnder == "45,000" ? "bg-primary text-white border-slate-700" : "bg-yellow-400 border-yellow-500"} border-b-4 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70`}
              >
                 ₹45,000
              </Link>

              <Link
                rel="nofollow"
                href="/best-washing-machines-under-50000"
                className={`${priceUnder == "50,000" ? "bg-primary text-white border-slate-700" : "bg-yellow-400 border-yellow-500"} border-b-4 text-sm px-10 py-2 sm:px-4 text-[#1c1105] inline-flex justify-center rounded-full bg-primary font-bold hover:opacity-70`}
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
