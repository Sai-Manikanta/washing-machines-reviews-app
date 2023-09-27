import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ReactPlayer from "react-player";
import { XCircleIcon } from "@heroicons/react/20/solid";

export default function WashingMachineGuideModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="inset-0 flex items-center justify-center sm:justify-start">
        <button
          type="button"
          onClick={openModal}
          className="pl-4 pr-3 py-2 text-sm md:pl-5 md:pr-4 md:py-3 md:text-lg bg-primary text-white mx-auto sm:mx-0 block rounded-full relative -top-5 sm:top-0 lg:mt-4 hover:scale-105 duration-200"
        >
          <span className="flex items-center gap-x-1">
            <span>Washing Machine Guide</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
              />
            </svg>
          </span>
        </button>
      </div>

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
            <div className="flex min-h-full backdrop-blur-sm items-center justify-center p-2 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel style={{fontFamily: "verdana"}} className="font-medium transform overflow-hidden rounded-md bg-white px-4 pt-3 pb-5 text-left align-middle shadow-xl transition-all w-[700px]">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg">
                      Washing Macine Buying Guide
                    </h2>
                    <button
                      onClick={closeModal}
                      className="cursor-none sm:cursor-pointer"
                    >
                      <XCircleIcon
                        className="ml-2 -mr-1 h-8 w-8 text-gray-700 hover:text-gray-900"
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  <div
                    className="mt-2"
                    style={{
                      position: "relative",
                      paddingTop: "56.25%",
                      borderRadius: "15px",
                    }}
                  >
                    <ReactPlayer
                      url="https://www.youtube.com/embed/AGTayHKbg-Q"
                      controls={true}
                      width="100%"
                      height="100%"
                      style={{
                        borderRadius: "15px",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
