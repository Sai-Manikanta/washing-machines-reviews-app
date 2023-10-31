import React from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import ChangePriceDropdown from "./ChangePriceDropdown";

function Header({ aboutUs, contactUS, privacy, terms }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(terms);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <header
        id="header"
        style={{ boxShadow: "0px 2px 10px rgba(0,0,0,0.5)" }}
        className={`${
          aboutUs ? "fixed top-0 left-0 right-0" : "relative"
        } z-10 bg-primary py-5 px-4`}
      >
        <div
          className="max-w-5xl mx-auto flex justify-between items-center"
        >
          <div>
            <Link href="/">
              <Image
                className="w-40 h-auto"
                src="/images/bestElectroLogo.png"
                width="200"
                height="35"
                alt="bestelectro.in logo"
              />
            </Link>
          </div>

          <div className="flex items-center">
            <div className="hidden sm:block">
              <Link
                href="/"
                className="text-white py-2 rounded-md px-4 font-medium hover:bg-white hover:text-primary"
              >
                Home
              </Link>
              {/* <Link
                href="/about-us"
                className={`text-white py-2 px-4 rounded-md font-medium hover:bg-white hover:text-primary  ${
                  aboutUs && "hidden"
                }`}
              >
                About Us
              </Link> */}
              {/* {(contactUS || aboutUs || terms || privacy) ? "" : <ChangePriceDropdown/>} */}
            </div>

            {/* <div>
              {contactUS || aboutUs || terms || privacy ? (
                ""
              ) : (
                <ChangePriceDropdown />
              )}
            </div> */}

            <div
              // style={{ border: "2px solid red" }}
              className="flex items-center"
            >
              {contactUS || aboutUs || terms || privacy ? (
                ""
              ) : (
                <ChangePriceDropdown />
              )}
              <span
                className="text-2xl text-white sm:hidden"
                onClick={openModal}
              >
                <RxHamburgerMenu />
              </span>
            </div>
          </div>
        </div>
      </header>

      <div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-500"
                  enterFrom="translate-x-[100%]"
                  enterTo="translate-x-0"
                  leave="ease-out duration-500"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-[100%]"
                >
                  <Dialog.Panel
                    style={{ fontFamily: "verdana" }}
                    className="fixed top-0 left-0 right-0 bottom-0 transform overflow-hidden bg-primary text-white pt-14 pb-8 text-center align-middle shadow-xl transition-all"
                  >
                    <div className="mb-5">
                      <Image
                        className="mx-auto w-40 h-auto"
                        src="/images/bestElectroLogo.png"
                        alt="bestelectro.in logo"
                        width="200"
                        height="35"
                      />
                    </div>
                    <div className="mb-5">
                      <Link
                        href="/"
                        className="block py-2 capitalize font-medium hover:bg-blue-900 outline-0"
                      >
                        Home
                      </Link>

                      <Link
                        href="/best-washing-machines-under-40000"
                        className="block py-2 capitalize font-medium hover:bg-blue-900 outline-0 cursor-none sm:cursor-pointer"
                      >
                        Best washing machines under ₹40,000
                      </Link>

                      <Link
                        href="/best-washing-machines-under-35000"
                        className="block py-2 capitalize font-medium hover:bg-blue-900 outline-0 cursor-none sm:cursor-pointer"
                      >
                        Best washing machines under ₹35,000
                      </Link>

                      <Link
                        href="/best-washing-machines-under-30000"
                        className="block py-2 capitalize font-medium hover:bg-blue-900 outline-0 cursor-none sm:cursor-pointer"
                      >
                        Best washing machines under ₹30,000
                      </Link>

                      <Link
                        href="/best-washing-machines-under-25000"
                        className="block py-2 capitalize font-medium hover:bg-blue-900 outline-0 cursor-none sm:cursor-pointer"
                      >
                        Best washing machines under ₹25,000
                      </Link>

                      <Link
                        href="/best-washing-machines-under-20000"
                        className="block py-2 capitalize font-medium hover:bg-blue-900 outline-0 cursor-none sm:cursor-pointer"
                      >
                        Best washing machines under ₹20,000
                      </Link>

                      <Link
                        href="/best-washing-machines-under-15000"
                        className="block py-2 capitalize font-medium hover:bg-blue-900 outline-0 cursor-none sm:cursor-pointer"
                      >
                        Best washing machines under ₹15,000
                      </Link>

                      <Link
                        href="/best-washing-machines-under-10000"
                        className="block py-2 capitalize font-medium hover:bg-blue-900 outline-0 cursor-none sm:cursor-pointer"
                      >
                        Best washing machines under ₹10,000
                      </Link>

                      <Link
                        href="/about-us"
                        className="block py-2 capitalize font-medium hover:bg-blue-900 outline-0 cursor-none sm:cursor-pointer"
                      >
                        About Us
                      </Link>
                      <Link
                        href="/contact-us"
                        className="block py-2 capitalize font-medium hover:bg-blue-900 outline-0 cursor-none sm:cursor-pointer"
                      >
                        Contact Us
                      </Link>
                    </div>

                    <button
                      className="rounded-full border-2 border-white text-4xl text-white focus:outline-none outline-0 cursor-none sm:cursor-pointer"
                      onClick={closeModal}
                    >
                      <div className="flex justify-center items-center w-16 h-16">
                        <RxCross2 />
                      </div>
                    </button>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
}

export default Header;
