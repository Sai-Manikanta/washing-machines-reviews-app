import { useRouter } from "next/router";
import Image from "next/image";

export default function Custom404() {
  const router = useRouter();

  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" mt-[-60px] sm:mt-[-68px] md:mt-[-75px] lg:mt-[-105px] xl:mt-[-110px] 2xl:mt-[-120px]">
        <Image
          src="/images/thankyou.png"
          alt="thankyou"
          className="h-40 md:h-48 w-auto mx-auto"
          width="200"
          height="200"
        />
        {/* <div className="mb-10">
            <p className="text-center drop-shadow-md text-8xl font-black">
                <span>Thank</span><br/>
                <span>You</span>
            </p>
        </div> */}
        <h1 className="text-center text-primary font-bold text-lg my-2 sm:text-xl md:text-3xl">
          Thanks for reaching out!
        </h1>
        <p className="text-center text-slate-600 text-center font-medium text-lg mt-1 mb-4 px-6 sm:text-xl md:text-2xl sm:mt-2 md:mt-3 sm:mb-5 md:mb-6">
          Your message just showed up in my inbox. Talk to you soon!
        </p>
        <button
          onClick={() => router.push("/")}
          className="mx-auto block bg-primary text-white rounded-full px-6 py-2 text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl sm:px-7 md:px-8 lg:px-9 xl:px-10 2xl:px-12 sm:py-2 md:py-2 lg:py-2 xl:py-2 2xl:py-2 "
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
