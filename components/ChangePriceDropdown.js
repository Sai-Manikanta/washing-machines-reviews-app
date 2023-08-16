import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function ChangePriceDropdown() {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="text-xs inline-flex w-full justify-center rounded-md bg-secondary px-4 py-2 font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Change
            <ChevronDownIcon
              className="ml-2 -mr-1 h-4 w-4 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-50 w-32 right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={`${
                      active && "bg-primary text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    href="/best-washing-machines-under-40000"
                  >
                    Under ₹40,000
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={`${
                      active && "bg-primary text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    href="/best-washing-machines-under-35000"
                  >
                    Under ₹35,000
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={`${
                      active && "bg-primary text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    href="/best-washing-machines-under-30000"
                  >
                    Under ₹30,000
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={`${
                      active && "bg-primary text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    href="/best-washing-machines-under-25000"
                  >
                    Under ₹25,000
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={`${
                      active && "bg-primary text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    href="/best-washing-machines-under-20000"
                  >
                    Under ₹20,000
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={`${
                      active && "bg-primary text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    href="/best-washing-machines-under-15000"
                  >
                    Under ₹15,000
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={`${
                      active && "bg-primary text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    href="/"
                  >
                    Under ₹10,000
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
