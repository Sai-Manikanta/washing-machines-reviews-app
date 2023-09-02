import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { PiDressLight } from "react-icons/pi";
import { TbWash, TbWashMachine } from "react-icons/tb";
import { ImSpinner10 } from "react-icons/im";
import { SlSpeedometer } from "react-icons/sl";
import { RiSettingsLine } from "react-icons/ri";
import WatchVideoReview from "./WatchVideoReview";

const ProductCard = ({ washingMachineData }) => {
  const {
    orderNumber,
    productName,
    rating,
    highlights,
    specs,
    productImage,
    stores,
    videoReview,
  } = washingMachineData;

  return (
    <div className="bg-white p-4 pt-10 sm:py-8 sm:px-10 rounded-md drop-shadow-sm relative sm:flex ">
      <div className="w-36 md:w-56 mx-auto shrink-0">
        <Image
          src={`${productImage.url}`}
          alt={productImage.alt}
          className="h-40 md:h-48 w-auto mx-auto"
          width="200"
          height="200"
          // BEST PRACTICES
          decoding="async"
          loading="lazy"
          style="color:transparent"
          // srcset="/_next/image?url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31WeMu6f8…"
        />

        <div className=" flex flex-col bg-primary items-center p-4 text-white absolute top-0 right-0 rounded-tr-md rounded-bl-md">
          <span className="text-2xl font-medium">{rating}</span>
          <div className="flex mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3 h-3"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3 h-3"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3 h-3"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3 h-3"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3 h-3"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-xs mt-1">Exeptional</span>
        </div>



        <span className="text-2xl sm:text-lg absolute top-6 sm:top-6 left-7 sm:left-7 text-slate-700">
          {orderNumber}
        </span>
      </div>

      <div className="flex-grow">
        <h2 className="mt-4 sm:text-lg sm:mt-0 text-slate-900 line-clamp-3 sm:mr-20">
          {productName}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-4 mb-6 rounded-sm">
          {specs.functionType && (
            <div className="flex items-center lg:justify-center shrink-0 pl-3 py-1 lg:pl-0 border gap-1">
              <RiSettingsLine size="1.6rem" />
              <div>
                <span className="text-slate-500 text-xs">Function type</span>
                <span className="block text-bold text-sm">
                  {specs?.functionType}
                </span>
              </div>
            </div>
          )}

          {specs.type && (
            <div className="flex items-center lg:justify-center shrink-0 pl-3 py-1 lg:pl-0 border gap-1">
              <TbWashMachine size="2rem" />
              <div>
                <span className="text-slate-500 text-xs">Type</span>
                <span className="block text-bold text-sm">{specs?.type}</span>
              </div>
            </div>
          )}

          {specs.capacity && (
            <div className="flex items-center lg:justify-center shrink-0 pl-3 py-1 lg:pl-0 border gap-1">
              <PiDressLight size="2rem" />
              <div>
                <span className="text-slate-500 text-xs">Capacity</span>
                <span className="block text-bold text-sm">
                  {specs?.capacity} Kilograms
                </span>
              </div>
            </div>
          )}

          {specs.tubeType && (
            <div className="flex items-center lg:justify-center shrink-0 pl-3 py-1 lg:pl-0 border gap-1">
              <TbWash size="2rem" />
              <div>
                <span className="text-slate-500 text-xs">Tub type</span>
                <span className="block text-bold text-sm">
                  {specs?.tubeType}
                </span>
              </div>
            </div>
          )}

          {specs.rotationSpeed && (
            <div className="flex items-center lg:justify-center shrink-0 pl-3 py-1 lg:pl-0 border gap-1">
              <ImSpinner10 size="1.6rem" />
              <div>
                <span className="text-slate-500 text-xs">Rotation speed</span>
                <span className="block text-bold text-sm">
                  {specs?.rotationSpeed}
                </span>
              </div>
            </div>
          )}

          {specs.weight && (
            <div className="flex items-center lg:justify-center shrink-0 pl-3 py-1 lg:pl-0 border  gap-1 lg:hidden">
              <SlSpeedometer size="1.5rem" />
              <div>
                <span className="text-slate-500 text-xs">Weight</span>
                <span className="block text-bold text-sm">{specs?.weight}</span>
              </div>
            </div>
          )}
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <div
                className={`max-w-lg flex sm:justify-between items-center mt-4`}
              >
                <Disclosure.Button className="flex flex-grow gap-x-2 cursor-none sm:cursor-pointer items-center">
                  <span className="text-sm w-[6rem] flex justify-between items-center text-slate-600 hover:text-slate-900 hover:font-semibold">
                    {open ? "View Less" : "View More"}
                    {open ? (
                      <ChevronUpIcon
                        className="h-6 w-6 text-primary"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="h-6 w-6 text-primary"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                </Disclosure.Button>

                {videoReview?.id && (
                  <WatchVideoReview videoReview={videoReview} />
                )}
              </div>
              <Disclosure.Panel className="text-slate-700 mt-4">
                <hr className="mb-4" />
                <span className="border-l-2 pl-2 font-medium">
                  Main highlights
                </span>
                <ul className="list-disc list-inside space-y-3 text-sm mt-3">
                  {highlights.map((text, i) => (
                    <li key={i} className="leading-6">
                      {text}
                    </li>
                  ))}
                </ul>
                <hr className="my-3" />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <div className="max-w-lg flex gap-x-3 mt-4">
          {stores.amazon && (
            <a
              href={stores.amazon}
              target="_blank"
              className="border-2 rounded bg-slate-100 flex justify-center items-center w-44 hover:brightness-[95%]"
            >
              <span class="sr-only">Visit Amazon Store</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={110}
                height={50}
                fillRule="evenodd"
              >
                <path
                  d="M72.038 40.703c-5.8 4.283-14.234 6.57-21.486 6.57-10.168 0-19.323-3.76-26.248-10.016-.544-.492-.057-1.162.596-.78 7.474 4.35 16.715 6.965 26.26 6.965 6.438 0 13.52-1.332 20.032-4.096.984-.418 1.806.644.844 1.358m2.418-2.764c-.74-.95-4.9-.448-6.782-.226-.57.07-.657-.427-.144-.784 3.32-2.338 8.77-1.663 9.407-.88s-.165 6.25-3.286 8.858c-.48.4-.936.187-.723-.344.7-1.75 2.272-5.672 1.528-6.625"
                  fill="#f90"
                />
                <path
                  d="M67.803 20.427v-2.272a.56.56 0 0 1 .575-.575H78.55c.326 0 .588.235.588.575V20.1c-.004.326-.28.753-.766 1.428l-5.27 7.526c1.96-.048 4.026.244 5.802 1.245.4.226.5.557.54.884v2.425c0 .33-.366.718-.75.518-3.13-1.64-7.287-1.82-10.747.017-.353.192-.723-.192-.723-.522v-2.303c0-.37.004-1 .374-1.563l6.107-8.758H68.4c-.326 0-.588-.23-.588-.57M30.694 34.605H27.6c-.296-.022-.53-.244-.553-.527V18.194c0-.318.266-.57.596-.57h2.886c.3.013.54.244.562.53v2.076h.057c.753-2.007 2.168-2.943 4.074-2.943 1.937 0 3.147.936 4.018 2.943.75-2.007 2.45-2.943 4.275-2.943 1.297 0 2.716.535 3.582 1.737.98 1.336.78 3.278.78 4.98L47.87 34.03c0 .318-.266.575-.596.575h-3.1c-.3-.022-.557-.27-.557-.575V25.6c0-.67.06-2.342-.087-2.977-.23-1.066-.923-1.367-1.82-1.367-.75 0-1.532.5-1.85 1.302s-.287 2.142-.287 3.043v8.42c0 .318-.266.575-.596.575h-3.1c-.313-.022-.557-.27-.557-.575l-.004-8.42c0-1.772.292-4.38-1.907-4.38-2.224 0-2.137 2.542-2.137 4.38v8.42c0 .318-.266.575-.596.575M87.896 17.3c4.592 0 7.078 3.944 7.078 8.958 0 4.845-2.747 8.688-7.078 8.688-4.5 0-6.965-3.944-6.965-8.858 0-4.945 2.486-8.8 6.965-8.8m.026 3.243c-2.28 0-2.425 3.108-2.425 5.045s-.03 6.085 2.398 6.085c2.398 0 2.512-3.343 2.512-5.38 0-1.34-.057-2.943-.46-4.214-.348-1.106-1.04-1.537-2.024-1.537m13.007 14.075h-3.082c-.3-.022-.557-.27-.557-.575l-.004-15.888c.026-.292.283-.518.596-.518h2.87c.27.013.492.196.553.444v2.43h.057c.866-2.172 2.08-3.208 4.218-3.208 1.4 0 2.742.5 3.613 1.872.8 1.27.8 3.408.8 4.945v10c-.035.28-.292.5-.596.5H106.3c-.283-.022-.518-.23-.548-.5V25.48c0-1.737.2-4.28-1.937-4.28-.753 0-1.445.505-1.8 1.27-.435.97-.492 1.937-.492 3.008v8.554c-.004.318-.274.575-.605.575m-41.225-7.6c0 1.206.03 2.2-.58 3.282-.492.87-1.275 1.406-2.142 1.406-1.188 0-1.885-.905-1.885-2.242 0-2.638 2.364-3.117 4.605-3.117v.67m3.12 7.544c-.205.183-.5.196-.73.074-1.027-.853-1.214-1.25-1.776-2.063-1.698 1.732-2.903 2.25-5.102 2.25-2.607 0-4.632-1.606-4.632-4.823 0-2.512 1.358-4.222 3.3-5.058 1.68-.74 4.026-.87 5.82-1.075v-.4c0-.736.057-1.606-.38-2.242-.374-.57-1.097-.805-1.737-.805-1.18 0-2.23.605-2.486 1.86-.052.28-.257.553-.54.566l-3-.322c-.252-.057-.535-.26-.46-.65.688-3.64 3.98-4.736 6.92-4.736 1.506 0 3.474.4 4.662 1.54 1.506 1.406 1.362 3.282 1.362 5.324v4.823c0 1.45.6 2.085 1.167 2.87.196.28.24.614-.013.823L62.82 34.57l-.004-.01M19.12 27.017c0 1.206.03 2.2-.58 3.282-.492.87-1.27 1.406-2.142 1.406-1.188 0-1.88-.905-1.88-2.242 0-2.638 2.364-3.117 4.6-3.117v.67m3.12 7.544c-.205.183-.5.196-.73.074-1.027-.853-1.2-1.25-1.776-2.063-1.698 1.732-2.9 2.25-5.102 2.25C12.028 34.822 10 33.216 10 30c0-2.512 1.362-4.222 3.3-5.058 1.68-.74 4.026-.87 5.82-1.075v-.4c0-.736.057-1.606-.374-2.242-.38-.57-1.1-.805-1.737-.805-1.18 0-2.233.605-2.5 1.86-.052.28-.257.553-.535.566l-3.004-.322c-.252-.057-.53-.26-.46-.65.692-3.64 3.98-4.736 6.92-4.736 1.506 0 3.474.4 4.662 1.54 1.506 1.406 1.362 3.282 1.362 5.324v4.823c0 1.45.6 2.085 1.167 2.87.2.28.244.614-.01.823l-2.36 2.052-.01-.01"
                  fill="#221f1f"
                />
              </svg>
            </a>
          )}
          {stores.flipkart && (
            <a
              href={stores.flipkart}
              target="_blank"
              className="border-2 rounded bg-slate-100 flex justify-center items-center w-44 hover:brightness-[95%]"
            >
              <span class="sr-only">Visit  Store</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={100}
                height={50}
                viewBox="-1925.465 47.012 2683.286 707.398"
              >
                <linearGradient
                  id="a"
                  gradientUnits="userSpaceOnUse"
                  x1="400.91"
                  y1="539.855"
                  x2="400.91"
                  y2="-47.91"
                  gradientTransform="matrix(1 0 0 -1 .14 706.454)"
                >
                  <stop offset={0} stopColor="#f7e830" />
                  <stop offset={1} stopColor="#fdcb06" />
                </linearGradient>
                <path
                  fill="url(#a)"
                  stroke="#FCD109"
                  strokeWidth=".094"
                  d="M757.3 169.6c-.3-1-.602-2-1-3-236.9.1-473.7 0-710.5.1-.6.7-1 1.4-1.1 2.3 0 183.7 0 367.299-.102 551 1.5 9.799 6.9 18.699 14.102 25.4.3.1 1 .197 1.3.299 3.7 3.898 9 5.801 14 7.6 3.7-.199 7.3 1.4 11 1h294c2.8-.1 5.698.4 8.398-.699.102-.398.2-1.1.3-1.5.102-.5.2-1.6.301-2.199 6.301-35.199 12.399-70.5 19.101-105.699l.6-4.5c-27.199-.102-54.5 0-81.699-.102-6.601-.199-13.399 0-20-.801-11.299-.5-22.699-.1-33.999-1.199-14 0-27.9-1.301-41.9-1.301-11-1.1-22.1-.699-33.2-1.199-7.198-.898-14.6-.5-21.898-.801-11.9-1.299-24-.398-35.9-1.699-12.6.102-25.2-1-37.8-1.301.1-.1.2-.5.2-.6 4.2.1 8.3-.199 12.5-.299 9.3-1.201 18.7-.4 28-1.701 9.7 0 19.3-1.299 29-1.299 8.6-1.201 17.3-.5 25.898-1.701 10.102 0 20-1.299 30.102-1.4 8.3-1.1 16.7-.5 25-1.6 9.7.1 19.3-1.4 29-1.299 9.5-1.102 19.198-.803 28.698-1.803-.898-3.697-1.6-7.398-2.398-11.1-.7-2.299-3.5-1.799-5.3-2.1-21.7-3.102-43.3-6.199-64.9-9.199 1.4-1.102 3.3-.602 4.9-.801 16.8-1.301 33.5-2.801 50.3-4 3.8-.199 7.5-.9 11.3-1-1.7-5.199-2.7-10.9-5-15.699-35.898-5.5-71.8-10.4-107.6-16.301 9.3-1.5 18.7-2.199 28-3.199l.8-.301c29.7-3.102 59.5-6.602 89.2-9.5 37.698-.199 75.3-.102 113 0 1.198-.199 3.3.398 3.5-1.301 3.1-16.199 6.1-32.398 9.198-48.6 4.3-22.498 11.1-44.699 21.6-65.199 16.5-33 42.6-61 74.398-79.599 29.7-17.4 64.102-25.8 98.302-27.4 11.1-1 22.3-.7 33.3.7 7.2 1.7 14.6 3.7 20.3 8.6 4.7 3.8 7.5 9.4 9.6 15 4.602 13.3 7.2 27.1 9.4 41 .1 5.6 1.1 11.9-1.9 17-2.8 5-8.398 7.4-13.699 8.9-19.301 5-39.5.299-58.801 5-15.898 3.4-30.699 12.199-40.8 24.9-11.899 14.799-18.2 33.197-21.7 51.6-2.699 16.4-6.1 32.799-8.8 49.299 19 .102 38.101-.1 57.2.102 7.6 0 15.4 4.199 18.5 11.398 4 9.201 3.1 19.602 1.8 29.301-1.6 10.9-4.2 21.699-9.1 31.699-4.102 8.5-10.9 16.301-20.2 19.301-4.8 1.9-10 1.5-15.1 1.5-16.802 0-33.602.199-50.4 0-2.7 12.301-4.5 24.9-6.9 37.4-4.398 24.299-8.699 48.699-13.1 73.1-.1.801-.2 2.5-.2 3.4 7.9.4 15.8 0 23.7.199 58.6 0 117.3-.102 176 0 6.3.201 12.7-1.299 18.2-4.4 3.3-1.199 5.3-4.1 8.2-5.699 2.8-1.6 3.6-4.898 6-7 2.6-4.6 5.3-9.398 5.5-14.801.3 0 1.1-.1 1.5-.199C757.198 537.6 757.5 353.6 757.3 169.6z"
                />
                <path
                  fill="#F8F3B5"
                  stroke="#F8F3B5"
                  strokeWidth=".094"
                  d="M137.9 48.6c8.5-2.7 17.4-.9 26.102-1.5 163.3.1 326.6 0 489.898 0 9.7-.4 18.2 5.1 27.2 7.9 7.2 2.9 14.7 5.2 21.9 8.3 1.5.6 2.6 1.9 3.698 3-.1 13.2 0 26.5 0 39.8.102 3.5-.5 7.1.7 10.5 2.102.3 3.2 1.9 4.602 3.2 6.6 3 12.198 7.9 18.198 11.9 9 6.4 18.602 12 27.4 18.6.399 2.6.1 5.3-.7 7.7-.898 2.8-.3 5.8-.6 8.6-236.9.1-473.7 0-710.5.1-.5-3.3.4-6.6-1-9.7-.2-2.6-1.1-6 1.4-7.8 10-7 20.6-13.3 30.398-20.7 6.102-3.9 12-7.9 17.9-11.9 1.2-2 .8-4.5.8-6.7 0-14.5 0-29 .1-43.5 3.4-4.4 9.302-4.9 14-7.1 9.504-3.6 19.104-7.1 28.504-10.7m.6 1.7c-12.8 4.9-25.7 9.6-38.5 14.5-1.7.3-2.602 1.8-3.5 3.1.1.8.2 2.2.2 3-.102 12 0 24-.102 36 .102 3-.3 6 .8 8.7-1.3 1.3-2.698 2.6-4.3 3.6-14.5 9.4-28.5 19.6-43 28.9-2.5 1.5-5.3 3.5-4.5 6.8-.5 1.8.4 3.3 2.3 2.8 31.4-.2 62.7.2 94.102-.3 46.7 0 93.3.1 140 0l.7-.3c2.1.5 4.198.3 6.398.3 84.6 0 169.2.1 253.899 0 26.601.1 53.301 0 80 0 44 0 88.101.4 132.101.2 1.3-.3 1.7-1.2 1.2-2.8-.102-1.6.5-3.8-1.2-4.8-7-3.3-13-8.4-19.7-12.4-2.398-2-5.5-3.1-7.3-5.8-6.9-3.9-13.3-8.7-20.101-13-1.301-.8-2.301-2.1-3.399-3.2.6-2.1.8-4.4.8-6.6-.1-12.7 0-25.4-.1-38.1.3-2 .199-4.3-1.602-5.6-12-4.3-23.898-8.9-35.8-13.3-3.7-1.8-7.8-2.8-11.8-3.4h-511.1c-2.196.1-4.296 1.2-6.496 1.7z"
                />
                <path
                  fill="#F7B402"
                  stroke="#F7B402"
                  strokeWidth=".094"
                  d="M96.7 70.9c8.8 3.7 18.198 5.8 27.1 9.4 4.8 1.9 6.3 7.1 8.4 11.3-2.102 2.1-4.602 3.8-7.102 5.4-9.2 6.2-18.6 12.2-27.7 18.6-1.1-2.7-.698-5.7-.8-8.7.102-12 .002-24 .102-36zM678.198 80.3c8.9-3.5 18.2-5.9 27.102-9.4.1 12.7 0 25.4.1 38.1 0 2.2-.2 4.5-.8 6.6-7.8-5.4-15.7-10.5-23.5-15.8-3.8-2.8-8-4.9-11.4-8.3 2.1-4.2 3.7-9.3 8.498-11.2z"
                />
                <path
                  fill="#BDA727"
                  stroke="#BDA727"
                  strokeWidth=".094"
                  d="M249.3 84.4c11-2.6 23.3 7.2 22.4 18.7.1 11.3-11.802 20.5-22.7 17.9-4.4-1.5-8.602-3.8-11.3-7.7-3.5-5.3-4.302-12.4-1.5-18.2 2-5.6 7.4-9.4 13.1-10.7zM534.6 90.7c4.6-5.1 11.9-8 18.7-6.2 5.1 1.5 10.1 4.8 12.3 9.8 4.4 8.6 1 20.2-7.6 24.7-7.602 4.2-17.2 2.2-23-3.9-5.9-6.7-6.302-17.7-.4-24.4z"
                />
                <path
                  fill="#F7E62D"
                  stroke="#F7E62D"
                  strokeWidth=".094"
                  d="M125.1 97c2.5-1.6 5-3.3 7.102-5.4l.698.7c.7 5.2.2 10.5.4 15.7-.3 15.6.3 31.3-.4 46.9-29.1 0-58.198-.2-87.3 0-.8-3.3 2-5.3 4.5-6.8 14.5-9.3 28.5-19.5 43-28.9 1.602-1 3-2.3 4.3-3.6 9.1-6.4 18.5-12.4 27.7-18.6zM668.698 95c0-1.3.302-2.4 1-3.5 3.4 3.4 7.602 5.5 11.4 8.3 7.8 5.3 15.7 10.4 23.5 15.8 1.1 1.1 2.1 2.4 3.399 3.2 6.801 4.3 13.199 9.1 20.101 13 1.8 2.7 4.899 3.8 7.3 5.8 6.7 4 12.7 9.1 19.7 12.4 1.7 1 1.1 3.2 1.2 4.8-29.102.1-58.102-.1-87.2.1-.5-4-.2-8-.3-11.9.002-16-.198-32-.1-48z"
                />
                <radialGradient
                  id="b"
                  cx="397.845"
                  cy="271.776"
                  r="478.08"
                  gradientTransform="matrix(1 0 0 -1 .14 706.454)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".596" stopColor="#f29405" />
                  <stop offset=".736" stopColor="#f7d01e" />
                  <stop offset={1} stopColor="#fdcb06" />
                </radialGradient>
                <path
                  fill="url(#b)"
                  stroke="#FCD109"
                  strokeWidth=".094"
                  d="M756.3 154.8c-29.102.1-58.102-.1-87.2.1-.5-4-.2-8-.3-11.9 0-16-.2-32-.102-48 0-1.3.302-2.4 1-3.5 2.102-4.2 3.7-9.3 8.5-11.2 8.9-3.5 18.2-5.9 27.102-9.4.3-2 .2-4.3-1.602-5.6-12-4.3-23.898-8.9-35.8-13.3-3.7-1.8-7.8-2.8-11.8-3.4h-511.1c-2.2.1-4.3 1.2-6.5 1.7-12.8 4.9-25.7 9.6-38.5 14.5-1.7.3-2.602 1.8-3.5 3.1.1.8.2 2.2.2 3 8.8 3.7 18.198 5.8 27.1 9.4 4.8 1.9 6.3 7.1 8.4 11.3l.698.7c.7 5.2.2 10.5.4 15.7-.3 15.6.3 31.3-.4 46.9-29.1 0-58.198-.2-87.3 0-.5 1.8.4 3.3 2.3 2.8 31.4-.2 62.7.2 94.102-.3 46.7 0 93.3.1 140 0l.7-.3c2.1.5 4.198.3 6.398.3 84.6 0 169.2.1 253.899 0 26.601.1 53.301 0 80 0 44 0 88.101.4 132.101.2 1.304-.3 1.704-1.2 1.204-2.8zM236.2 95.1c2-5.6 7.398-9.4 13.1-10.7 11-2.6 23.3 7.2 22.4 18.7.1 11.3-11.802 20.5-22.7 17.9-4.4-1.5-8.602-3.8-11.3-7.7-3.5-5.3-4.3-12.4-1.5-18.2zm298.4-4.4c4.6-5.1 11.9-8 18.7-6.2 5.1 1.5 10.1 4.8 12.3 9.8 4.4 8.6 1 20.2-7.6 24.7-7.602 4.2-17.2 2.2-23-3.9-5.9-6.7-6.302-17.7-.4-24.4z"
                />
                <linearGradient
                  id="c"
                  gradientUnits="userSpaceOnUse"
                  x1="564.459"
                  y1="518.642"
                  x2="564.626"
                  y2="490.809"
                  gradientTransform="matrix(1 0 0 -1 .14 706.454)"
                >
                  <stop offset={0} stopColor="#fada1c" />
                  <stop offset={1} stopColor="#fdcb06" />
                </linearGradient>
                <path
                  fill="url(#c)"
                  stroke="#FCD109"
                  strokeWidth=".094"
                  d="M560.088 198.746c1.398.3-7.288-8.346-5.588-8.746 1.6.2 7.666-4.509 15-.667 7.332 3.842 5.514 12.833 4.682 16.167-.99 3.968-3.516 6.5-5.516 8.5-1.1.9-3.566 2.3-5.066 2.2.9-4.9-2-5.7-2.2-10.7l-1.312-6.754z"
                />
                <linearGradient
                  id="d"
                  gradientUnits="userSpaceOnUse"
                  x1="2320.231"
                  y1="519.975"
                  x2="2320.398"
                  y2="492.142"
                  gradientTransform="rotate(180 1278.723 353.227)"
                >
                  <stop offset={0} stopColor="#fada1c" />
                  <stop offset={1} stopColor="#fdcb06" />
                </linearGradient>
                <path
                  fill="url(#d)"
                  stroke="#FCD109"
                  strokeWidth=".094"
                  d="M240.416 204.167c-.2 5-3.102 5.8-2.2 10.7-1.5.1-3.968-1.3-5.067-2.2-2-2-4.523-4.532-5.515-8.5-.832-3.333-2.651-12.324 4.682-16.167s13.4.866 15 .667c1.7.4-6.986 9.046-5.588 8.746l-1.312 6.754z"
                />
                <path
                  fill="#BDA727"
                  stroke="#BDA727"
                  strokeWidth=".094"
                  d="M546.996 262.806c1.504-1.306 2.504-1.306 4.504-1.306-12 26-26 52-47.049 72.243a70.571 70.571 0 0 1-7.119 5.578c-2.41 1.763-4.772 3.417-7.121 5.102-2.3 1.597-4.586 3.203-6.812 4.878-5.7 3.1-10.7 7.401-17 9.3-11.5 5.5-23.898 9.2-36.398 11.8-4.9.801-9.9 2-14.9 2.1-6.2 1.801-12.8.5-19.1.9-3.5.6-6.602-1.4-10-1-2.95-.417-5.893-.917-8.818-1.501a144.087 144.087 0 0 1-8.841-2.099C322.5 354.5 277.5 319.5 264.39 272.165a53.171 53.171 0 0 1-.89-9.665c1.399 2.8 2.85 5.58 4.351 8.334C286.5 311.5 323.5 343.5 367.212 353.149c3.548 1.618 7.388 1.051 10.789 2.451 3.1 0 6.1-.1 9.1.9 10.3.199 20.6.1 30.9.1 1.398.1 2.698-.6 4.1-.9 17.166-.582 33.986-5.264 49.647-12.364 3.134-1.42 6.22-2.937 9.253-4.537a101.766 101.766 0 0 0 7.768-4.538 104.621 104.621 0 0 0 7.217-5.096C514.5 314.5 530.5 295.5 541.365 273.651c2.068-3.932 3.96-7.573 5.631-10.845z"
                />
                <path
                  fill="#0D69B3"
                  stroke="#0D69B3"
                  strokeWidth=".094"
                  d="M530.698 351.7c29.7-17.4 64.102-25.8 98.302-27.4 11.1-1 22.3-.7 33.3.7 7.2 1.7 14.6 3.7 20.3 8.6-2.9.2-5.7-1.1-8.6-1.5-8.2-1.6-16.7-1-25-1.2-24.102 0-48.4 1.9-71.7 8.5-12.2 3.7-24.4 8-35.5 14.4-19.2 10.6-36.5 24.6-50.5 41.4-25 28.701-39.7 65.1-46.8 102.201-3.4 19.898-7.302 39.697-10.4 59.697-5 .5-10.1.201-15.1.201-22-.1-44-.201-66-.398-4.7.197-9.302-.9-14-.602-40 .199-80-.1-120-.1l.8-.301c29.7-3.102 59.5-6.602 89.2-9.5 37.698-.199 75.3-.102 113 0 1.198-.199 3.3.398 3.5-1.301 3.1-16.199 6.1-32.398 9.198-48.6C439 474 445.8 451.799 456.3 431.299c16.5-33 42.6-61 74.398-79.599z"
                />
                <path
                  fill="#107BD4"
                  stroke="#107BD4"
                  strokeWidth=".094"
                  d="M577.3 339.4c23.3-6.6 47.6-8.5 71.7-8.5 8.3.2 16.8-.4 25 1.2 2.898.4 5.698 1.7 8.6 1.5 4.7 3.8 7.5 9.4 9.6 15 4.602 13.3 7.2 27.1 9.4 41 .1 5.6 1.1 11.9-1.9 17-2.8 5-8.398 7.4-13.699 8.9-19.301 5-39.5.299-58.801 5-15.898 3.4-30.699 12.199-40.8 24.9-11.899 14.799-18.2 33.197-21.7 51.6-2.699 16.4-6.1 32.799-8.8 49.299-1.2 3.701-1.899 7.701-2.6 11.602 18.898.301 37.8 0 56.7.199 7.198-.199 14.398.199 21.6-.301 4 9.201 3.1 19.602 1.8 29.301-1.6 10.9-4.2 21.699-9.1 31.699-4.102 8.5-10.9 16.301-20.2 19.301-4.8 1.9-10 1.5-15.1 1.5-16.802 0-33.602.199-50.4 0-2.7 12.301-4.5 24.9-6.9 37.4-4.398 24.299-8.699 48.699-13.1 73.1-.1.801-.2 2.5-.2 3.4v.1c-43.7 0-87.3.102-131 0 .101-.398.2-1.1.3-1.5.102-.5.2-1.6.301-2.199.101.801.199 2.301.301 3 2.699.301 7.6 1.699 8.3-2.199 6.8-36.801 13.1-73.801 20.1-110.602-2.699-.6-5.5-.6-8.3-.1-.398 1.4-.8 2.799-1.3 4.199l.6-4.5c-27.198-.102-54.5 0-81.698-.102-6.602-.197-13.4 0-20-.799-11.3-.5-22.7-.1-34-1.201-14 0-27.9-1.299-41.9-1.299-11-1.1-22.1-.701-33.2-1.201-7.198-.898-14.6-.5-21.898-.799-11.9-1.301-24-.398-35.9-1.701-12.6.102-25.2-1-37.8-1.299.1-.1.2-.5.2-.6 4.2.1 8.3-.201 12.5-.301 9.3-1.199 18.7-.4 28-1.699 9.7 0 19.3-1.301 29-1.301 8.6-1.199 17.3-.5 25.898-1.699 10.102 0 20-1.301 30.102-1.4 8.3-1.1 16.7-.5 25-1.6 9.7.1 19.3-1.4 29-1.301 9.5-1.102 19.198-.801 28.698-1.801-.898-3.699-1.6-7.398-2.398-11.1-.7-2.301-3.5-1.801-5.3-2.1-21.7-3.102-43.3-6.201-64.9-9.201 1.4-1.102 3.3-.602 4.9-.799 16.8-1.303 33.5-2.803 50.3-4 3.8-.201 7.5-.9 11.3-1-1.7-5.201-2.7-10.9-5-15.701-35.898-5.5-71.8-10.4-107.6-16.299 9.3-1.5 18.7-2.201 28-3.201 40 0 80 .301 120 .1 4.698-.299 9.3.801 14 .602 22 .199 44 .301 66 .398 5 0 10.1.301 15.1-.199 3.1-20 7-39.801 10.4-59.699 7.1-37.102 21.8-73.5 46.8-102.199 14-16.801 31.3-30.801 50.5-41.401C552.9 347.4 565.1 343.1 577.3 339.4z"
                />
                <path
                  fill="#0D69B3"
                  stroke="#0D69B3"
                  strokeWidth=".094"
                  d="M555.9 546.299c19 .102 38.102-.1 57.2.102 7.6 0 15.4 4.199 18.5 11.398-7.2.5-14.4.102-21.6.301-18.9-.199-37.802.102-56.7-.199.7-3.901 1.398-7.901 2.6-11.602zM408.4 640c2.8-.5 5.602-.5 8.3.1-7 36.801-13.3 73.801-20.1 110.602-.7 3.898-5.601 2.5-8.3 2.199-.102-.699-.2-2.199-.3-3 6.3-35.199 12.398-70.5 19.1-105.699.5-1.403.9-2.801 1.3-4.202z"
                />
                <path
                  fill="#FFF"
                  stroke="#FFF"
                  strokeWidth=".094"
                  d="M564.646 201.546c-.8-1.5-.899-3.3-.899-5l-.801.1c-1.199-4.4-4.898-8.6-9.699-8.8-3.601-.3-8.101-.2-10.199 3.2-4 5.4-2.102 12.3-2.301 18.4 0 .4.101 1.1.101 1.5 0 4.1-.5 8.1-1.2 12.1-.6 1.2-.899 2.5-.899 3.9-1.699 9.4-5.101 18.7-9.699 27.2-.9 1.2-1.602 2.5-1.9 3.9-3 5.2-6.6 10-10.3 14.8-.601.5-1.101 1.1-1.601 1.7-2.601 3.2-5.399 5.9-8.301 8.7-.699.4-1.199.9-1.8 1.3-3.399 3.3-7.2 6.4-11.3 8.9-.5.3-1 .7-1.601 1.1-25.601 16.9-56.699 23.9-87 24.2-25.699.8-51.601-4.7-74.801-15.8-.398-.2-1.398-.6-1.8-.8-3.899-2.1-7.899-3.9-11.5-6.5-.8-.4-1.6-.9-2.5-1.3-3.7-2.2-7.2-4.6-10.5-7.4-1.1-1-2.3-1.8-3.5-2.7-3.6-2.9-7.3-6-10.398-9.5-.8-.9-1.602-1.7-2.4-2.5-10.898-11.3-19.398-25.1-23.898-40.1-4.302-11.9-3.7-24.9-4.2-37.4-3.602-5.5-11.2-8.6-17.2-5.2-2.5 1.8-2.8 5.1-4.7 7.4-3.1 33 11 65.9 33.5 89.7 0 .8.4 1.3 1.102 1.6 4 3.7 7.898 7.5 11.898 11.1.7.7 1.5 1.4 2.4 2 4 3.3 8.3 6.3 12.5 9.4.8.6 1.6 1.1 2.5 1.6 5.5 3.2 10.698 7 16.6 9.2.4.3 1.1.8 1.5 1 19 9.1 39.5 15.3 60.5 17.3 2.3 0 4.6.2 6.9.7 10 .6 20 .3 30 .1 30.898-2.7 62.8-10.2 88.6-28.4l.3.4c.8-.7 1.5-1.3 2.3-1.9 4.102-3 8.102-6.2 12.102-9.5.898-.7 1.898-1.5 2.8-2.4 4.399-4.8 9.5-9.2 13.2-14.7l.6.3c.3-.5.8-1.5 1.102-2 3.398-4.6 6.5-9.4 9.5-14.2.198-.3.698-.8.898-1.1l-.398-.4c.3-.4 1-1.2 1.3-1.6 5.5-11.2 10.398-22.9 12.1-35.3.7-.3 1.101-.9 1.101-1.6.101-4 1.5-7.8 1.101-11.8.889-4.9.99-9.9.79-14.9z"
                />
                <defs>
                  <path
                    id="e"
                    d="M564.646 201.546c-.8-1.5-.899-3.3-.899-5l-.801.1c-1.199-4.4-4.898-8.6-9.699-8.8-3.601-.3-8.101-.2-10.199 3.2-4 5.4-2.102 12.3-2.301 18.4 0 .4.101 1.1.101 1.5 0 4.1-.5 8.1-1.2 12.1-.6 1.2-.899 2.5-.899 3.9-1.699 9.4-5.101 18.7-9.699 27.2-.9 1.2-1.602 2.5-1.9 3.9-3 5.2-6.6 10-10.3 14.8-.601.5-1.101 1.1-1.601 1.7-2.601 3.2-5.399 5.9-8.301 8.7-.699.4-1.199.9-1.8 1.3-3.399 3.3-7.2 6.4-11.3 8.9-.5.3-1 .7-1.601 1.1-25.601 16.9-56.699 23.9-87 24.2-25.699.8-51.601-4.7-74.801-15.8-.398-.2-1.398-.6-1.8-.8-3.899-2.1-7.899-3.9-11.5-6.5-.8-.4-1.6-.9-2.5-1.3-3.7-2.2-7.2-4.6-10.5-7.4-1.1-1-2.3-1.8-3.5-2.7-3.6-2.9-7.3-6-10.398-9.5-.8-.9-1.602-1.7-2.4-2.5-10.898-11.3-19.398-25.1-23.898-40.1-4.302-11.9-3.7-24.9-4.2-37.4-3.602-5.5-11.2-8.6-17.2-5.2-2.5 1.8-2.8 5.1-4.7 7.4-3.1 33 11 65.9 33.5 89.7 0 .8.4 1.3 1.102 1.6 4 3.7 7.898 7.5 11.898 11.1.7.7 1.5 1.4 2.4 2 4 3.3 8.3 6.3 12.5 9.4.8.6 1.6 1.1 2.5 1.6 5.5 3.2 10.698 7 16.6 9.2.4.3 1.1.8 1.5 1 19 9.1 39.5 15.3 60.5 17.3 2.3 0 4.6.2 6.9.7 10 .6 20 .3 30 .1 30.898-2.7 62.8-10.2 88.6-28.4l.3.4c.8-.7 1.5-1.3 2.3-1.9 4.102-3 8.102-6.2 12.102-9.5.898-.7 1.898-1.5 2.8-2.4 4.399-4.8 9.5-9.2 13.2-14.7l.6.3c.3-.5.8-1.5 1.102-2 3.398-4.6 6.5-9.4 9.5-14.2.198-.3.698-.8.898-1.1l-.398-.4c.3-.4 1-1.2 1.3-1.6 5.5-11.2 10.398-22.9 12.1-35.3.7-.3 1.101-.9 1.101-1.6.101-4 1.5-7.8 1.101-11.8.889-4.9.99-9.9.79-14.9z"
                  />
                </defs>
                <clipPath id="f">
                  <use xlinkHref="#e" overflow="visible" />
                </clipPath>
                <g
                  clipPath="url(#f)"
                  fill="none"
                  stroke="#D1D1D1"
                  strokeWidth={2}
                >
                  <path d="M230.167 198.168c8.106 2.543 26.729-3.855 32 2M234.834 222.834c7.768-2.703 24.425-9.103 31.333-5.333M242.834 247.501c3.755 1.216 11.157-5.381 14.834-7.314 5.47-2.877 11.082-5.082 17.166-6.019M254.834 273.501c3.873-5.504 8.509-10.075 14.104-13.985 5.546-3.874 20.718-14.225 27.229-10.682M266.167 292.168c4.396-3.495 6.186-9.677 10.802-13.349 5.584-4.442 14.139-5.239 19.865-7.985M285 306c1.315-9.668 11.132-21.335 20.5-20.5M299.5 319.501c4.95-.496 9.138-11.576 12.485-15.331 5.016-5.625 10.212-7.355 16.847-9.336M328.166 331.501c-.32-6.996 6.909-27.055 15.334-26M349.5 338.168c-.351-8.268 3.924-33.137 14-34M371.5 351.501c-1.911-11.562-1.787-28.288 7.332-36.667M398.834 354.168c-1.017-9.638-10.594-29.121 0-36.667M428.166 347.501c-4.572-5.301-7.23-26.211-5.334-32M456.166 342.834c-3.526-6.403-7.896-12.416-9.232-19.849-.798-4.442.601-10.77-.102-14.151M479.5 332.834c-7.649-5.003-9.772-23.391-7.334-31.333M502.166 322.834c-5.44-11.671-11.241-20.72-11.334-34M524.166 301.501c-8.454-5.687-19.242-16.025-18-27.333M547.5 283.501c-12.845-2.846-28.26-14.339-36-24.667M558.166 261.501c-9.266-1.987-39.883-13.932-38-26M568.166 238.168c-12.91-4.733-31.692-8.988-42-18M574.832 216.834c-8.132.696-19.782-3.241-28.047-4.667-9.178-1.583-17.688-4.676-26.619-6.667M566.832 196.168c-15.685.939-30.402-4.428-44.666-9.333" />
                </g>
                <g fill="#107BD4" stroke="#107BD4" strokeWidth=".101">
                  <path d="M-1440.124 244.25c14.493-2.187 31.17-3.554 43.473 5.468 7.655 5.74 10.389 16.129 9.842 25.427.547 15.31-6.561 31.715-20.229 39.645-12.032 6.562-26.521 7.106-39.92 5.74-9.022-1.092-18.044-6.012-22.692-14.215-10.392-23.787 2.459-57.417 29.526-62.065zM-1873.753 261.475c.819-8.203 8.202-15.585 16.677-15.31 63.16 0 126.044.272 188.929 0 6.835-.547 14.218 2.459 17.497 8.474 4.647 8.203.547 17.225 0 25.702-1.912 11.481-1.367 26.794-14.762 31.167-45.934 1.367-91.868 0-137.802.547-4.374 28.98-8.475 57.688-12.851 86.396 0 1.094.275 3.557.275 4.647 33.629-.272 67.258 0 100.887-.272 9.297-.547 19.138 7.385 18.318 17.225-.819 10.117-3.007 19.959-4.373 30.076-1.096 6.834-6.563 13.123-13.672 14.49-37.458.82-75.463-.82-112.917.82-6.017 41.285-13.126 82.568-19.415 123.855-.818 8.203-7.382 15.311-15.584 15.582a1324.8 1324.8 0 0 1-46.752 0c-10.116.275-18.319-10.938-15.586-20.506 16.683-107.719 33.907-215.168 51.131-322.893zM-1595.969 246.709c14.219-1.092 28.708-.272 42.927-.544 8.75-.547 17.499 6.287 18.317 15.31 0 7.107-1.914 14.217-2.733 21.325-11.484 73.275-23.24 146.55-34.725 219.824-1.64 11.756-4.647 24.332-1.092 36.363 4.101 12.029 22.417 6.834 26.793 19.41 2.734 10.117-.275 20.779-1.095 31.17-.819 13.67-16.404 16.676-27.065 19.688-23.239 4.373-51.403 1.092-68.081-18.049-12.03-13.941-12.851-33.629-10.388-51.125 14.49-92.959 28.98-185.918 43.746-279.153.821-6.836 6.288-13.124 13.396-14.219zM-1053.248 261.475c.818-8.203 8.202-15.31 16.404-15.31h41.559c10.389-.275 18.867 10.936 16.405 20.777-9.569 60.698-19.411 121.396-28.98 182.09 14.49-2.186 30.896-4.92 41.012-16.676 16.949-19.141 30.896-41.283 41.284-64.523 3.553-9.024 5.468-22.147 17.225-23.788 15.585-.547 31.441-.274 47.026 0 10.664-.274 18.592 11.756 15.038 21.598-4.101 14.494-10.936 27.889-18.044 40.74-15.859 25.701-33.355 51.127-56.324 71.359 10.116 30.348 22.968 59.877 34.177 89.68 3.28 9.842 11.212 21.324 3.828 30.896-8.478 11.482-24.335 5.738-36.091 7.105-12.304-1.367-30.075 4.922-36.911-9.021-12.851-29.803-23.512-60.422-36.638-90.225-7.655.271-15.583.547-23.24-.273-.544 1.094-1.639 3.279-2.187 4.375-4.102 27.34-8.475 54.682-12.851 82.021-1.641 6.562-6.836 12.305-13.943 12.852-14.49.547-29.255.271-44.019.271-6.29 0-12.03-4.1-14.765-9.568-2.734-5.471-1.095-11.756-.271-17.771 16.949-105.537 33.627-211.074 50.306-316.609zM-293.44 291.277c1.915-7.658 9.295-12.851 16.953-12.579 10.937.275 22.146-.272 33.354.275 9.024.272 16.132 9.295 15.037 18.044-1.64 15.585-5.469 31.17-6.561 46.752 10.662 0 21.598-.272 32.262 0 9.57 0 17.5 9.844 15.858 19.138-1.368 8.479-3.282 16.682-4.649 25.154-1.367 7.111-7.38 12.852-14.215 13.945-13.125.82-25.974-.547-38.825.82-5.468 36.635-11.483 73.271-17.225 109.912-.822 8.475-1.367 18.043 3.554 25.426 7.383 9.023 20.231 5.74 30.623 6.836 8.202 2.459 13.396 11.484 12.028 19.688-1.367 9.293-1.64 18.59-3.826 27.611-3.281 10.115-15.038 12.031-24.062 14.49-24.88 6.564-53.588 6.564-75.732-7.928-20.505-13.945-23.788-41.012-21.601-63.979 5.74-44.293 14.766-88.311 19.686-132.877-7.655.272-16.952 1.367-22.692-5.469-6.562-6.834-3.281-16.951-2.188-25.429 1.642-9.022 1.367-20.778 11.211-25.7 7.927-3.009 16.952-.819 25.427-1.914 5.194-17.495 10.115-34.992 15.583-52.216zM-447.917 379.86c17.225-17.225 38.003-31.442 61.79-38.549 10.389-4.649 23.787 4.101 23.515 15.584-1.914 15.038-5.469 29.8-7.93 44.564-1.096 7.383-7.383 13.672-14.766 14.492-26.794 4.646-50.033 20.775-68.625 39.916-4.647 5.744-11.483 11.211-12.303 19.139-5.74 38.277-11.756 76.555-17.771 114.832-.819 8.201-7.931 16.133-16.405 15.586h-41.56c-9.568.547-18.043-9.021-16.95-18.592 12.03-75.736 24.062-151.195 35.817-226.932.547-7.654 6.016-15.036 13.943-15.857 10.117-.547 20.232-.274 30.623-.274 8.202 0 15.856 7.382 15.856 15.859 0 11.756-1.092 23.785-1.366 35.815 6.563-4.098 10.664-10.661 16.132-15.583zM-1469.926 345.137c14.764-3.006 30.075-.545 44.839-1.367 8.477-1.092 17.499 4.375 18.865 12.852 1.096 7.654-1.095 15.037-1.915 22.42-11.208 70.268-22.42 140.533-33.356 210.799-.82 7.932-7.379 15.859-15.857 15.584-14.763 0-29.528.275-44.564-.271-9.297-1.096-16.133-11.756-13.671-20.781 11.757-72.998 22.968-145.727 34.724-218.729.547-7.929 2.734-17.226 10.935-20.507zM-585.17 348.694c-40.739-7.658-82.295-13.126-123.582-9.025-36.91 4.649-74.094 21.328-96.785 51.676-31.443 39.917-42.107 93.507-35 143.269 3.83 23.785 14.218 47.846 33.632 62.609 18.044 13.945 42.378 15.857 64.252 12.303 30.619-6.016 56.593-25.697 77.921-47.572 1.092 9.295-1.095 18.592-.547 27.615.547 8.473 8.202 16.402 16.677 15.855h27.89c8.202 0 15.038-7.652 15.585-15.584 11.756-74.094 23.512-147.916 34.996-221.735 1.638-9.297-5.741-18.319-15.039-19.411zm-76.826 128.775c-10.938 20.506-26.25 39.098-43.475 54.953-9.841 8.203-22.42 16.68-35.814 13.947-13.125-2.734-19.414-16.404-22.42-28.162-6.835-30.621-.547-63.979 16.676-90.498 7.656-12.306 19.959-21.6 34.177-25.429 19.958-4.922 41.013-2.461 60.426 3.007l1.092 1.096c-2.46 23.785-7.109 47.299-10.662 71.086zM-1121.873 436.458c-.275-27.342-7.656-56.049-26.794-76.556-13.123-14.49-32.81-21.872-51.948-21.601-31.717-1.091-61.518 14.494-84.757 35.271-5.197 4.103-8.75 10.118-14.49 13.398 0-9.025.819-18.046.544-27.341.275-8.478-7.655-15.859-15.857-15.859h-27.889c-8.747 0-15.857 7.657-16.404 16.131-17.225 109.365-34.721 218.729-51.947 328.094-2.459 10.115 6.291 20.506 16.68 20.232 15.31-.273 30.895 1.094 45.932-1.096 12.031-3.281 11.756-17.225 13.671-27.34 4.373-24.061 7.383-48.121 10.116-72.455 53.862 10.389 116.473 3.283 156.664-37.457 32.808-35.814 48.118-85.302 46.479-133.421zm-76.555 27.613c-1.639 25.154-10.663 50.582-28.16 68.898-22.692 21.602-57.145 18.592-85.032 11.213-.544-.822-1.367-2.463-1.64-3.281 4.374-23.787 6.562-47.848 12.031-71.361 15.311-25.152 33.901-50.582 60.422-64.524 9.843-4.647 23.24-3.554 30.349 5.469 12.03 15.037 13.124 35.269 12.03 53.586z" />
                </g>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
