import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="select-none bg-primary px-5 py-6 text-white">
      <div className="max-w-5xl mx-auto flex justify-between">
        <p className="mr-2">&#169; Copyright 2023</p>
        <div>
          <Link className="" href="/contact-us">
            Contact Us
          </Link>
          <span className="mx-2.5">|</span>
          <Link className="" href="/privacy-and-policy">
            Privacy
          </Link>
          <span className="mx-2.5">|</span>
          <Link href="/terms-and-conditions">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
