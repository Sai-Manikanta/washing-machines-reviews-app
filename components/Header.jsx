import React from "react";
import Image from "next/image";
import logo from "../public/images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <header className="relative z-10 bg-white py-5 px-4 flex justify-between items-center shadow-md">
        <div>
          <Image src={logo} width="200" height="200" />
        </div>
        <div>
          <span className="text-2xl" onClick={openModal}>
            <RxHamburgerMenu />
          </span>
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
                //   enter="ease-out duration-300"
                //   enterFrom="opacity-0 scale-95"
                //   enterTo="opacity-100 scale-100"
                //   leave="ease-in duration-200"
                //   leaveFrom="opacity-100 scale-100"
                //   leaveTo="opacity-0 scale-95"
                enter="ease-out duration-500"
                enterFrom="translate-x-[100%]"
                enterTo="translate-x-0"
                leave="ease-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-[-100%]"
                >
                  <Dialog.Panel className="fixed top-0 left-0 right-0 bottom-0 transform overflow-hidden bg-primary text-white p-6 text-center align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Payment successful
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Got it, thanks!
                      </button>
                    </div>
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
