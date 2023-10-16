import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="select-none bg-primary px-5 py-6 text-white">
      <div className="max-w-5xl mx-auto flex flex-col-reverse sm:flex-row sm:justify-between ">
        <p>&#169; Copyright 2023</p>
        <div className="mr-2 mb-2 sm:bm-0">
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
