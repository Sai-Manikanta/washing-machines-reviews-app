import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import ReactPlayer from 'react-player'
import { XCircleIcon } from '@heroicons/react/20/solid'
import { PlayCircleIcon } from '@heroicons/react/20/solid'

export default function WatchVideoReview({ videoReview }) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="flex-grow inset-0 flex items-center cursor-pointer">
                {/* <button type="button" onClick={openModal} className="pl-4 pr-3 py-2 text-sm bg-primary text-white mx-auto block rounded-full relative -top-5">
                    <span className="flex items-center gap-x-1">
                        <span>Washing Machine Guide</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                        </svg>
                    </span>
                </button> */}
                <span onClick={openModal} className="text-sm flex items-center gap-x-1 text-slate-700 hover:text-slate-800">
                    <PlayCircleIcon className="h-6 w-6 text-slate-700 hover:text-slate-800" />
                    <span>Watch video review</span>
                </span>
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
                                <Dialog.Panel className="w-[700px] transform overflow-hidden rounded-md bg-white px-4 pt-3 pb-5 text-left align-middle shadow-xl transition-all">
                                    <div className="flex justify-between items-center">
                                        <h2 className="font-sans text-lg">
                                            {videoReview.title}
                                        </h2>
                                        <button onClick={closeModal} className="cursor-none md:cursor-pointer">
                                            <XCircleIcon
                                                className="ml-2 -mr-1 h-8 w-8 text-gray-700 hover:text-gray-800"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>

                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, beatae blanditiis distinctio modi dolorem officiis suscipit pariatur perferendis excepturi laborum maiores expedita ipsum maxime eaque natus dignissimos, repudiandae debitis recusandae molestias quaerat? Fugiat omnis consequuntur fuga eveniet facilis voluptatum dolorem?</p> */}

                                    <div className="mt-2" style={{ position: 'relative', paddingTop: '56.25%', borderRadius: '15px' }}>
                                        <ReactPlayer
                                            url={`https://www.youtube.com/embed/${videoReview.id}`}
                                            controls={true}
                                            width='100%'
                                            height='100%'
                                            style={{ borderRadius: '15px', position: 'absolute', top: 0, left: 0 }}
                                        />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
