import Link from "next/link";

const Footer = () => {
  return (
    <footer className="select-none bg-primary px-5 py-6 text-white">
      <div className="mb-3 text-xs">
        <p>©BestElectro.in<br/>"BestElectro.in is a participant in the Amazon.in Associates Program, which is 
          an affiliate advertising initiative created to enable websites to earn 
          advertising commissions by promoting and linking to Amazon.in. Please be 
          aware that Amazon, Amazon Prime, the Amazon logo, and Amazon Prime logo are 
          all registered trademarks owned by Amazon.com, Inc. or its affiliated 
          companies."</p>
      </div>
      <div className="max-w-5xl mx-auto flex flex-col-reverse sm:flex-row sm:justify-between">
        <p>&#169; Copyright 2023</p>
        <div className="mr-2 mb-2 sm:mb-0">
          <Link className="hidden sm:inline" href="/contact-us">
            Contact Us
            <span className="mx-2.5">|</span>
          </Link>
          <Link className="" href="/privacy-and-policy">
            Privacy
            <span className="mx-2.5">|</span>
          </Link>
          <Link href="/terms-and-conditions">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
