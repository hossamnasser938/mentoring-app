import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeProjectSection() {
    return (

        <section className="relative py-20">
            <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                style={{ transform: 'translateZ(0)' }}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon className="text-white fill-current" points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>

            <div className="container mx-auto px-4">
                <div className="items-center flex flex-wrap">



                    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div className="md:pr-12">

                            <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                Working with us is a pleasure
                            </h3>
                            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                Don't let your uses guess by attaching tooltips and popoves to any element. Just
                                make sure you enable them first via JavaScript.
                            </p>
                            <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                                The kit comes with three pre-built pages to help you get started faster. You can
                                change the text and images and you're good to go. Just make sure you enable them
                                first via JavaScript.
                            </p>
                            <Link to="/projectideas" className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150">
                                View more ideas
                            </Link>
                        </div>
                    </div>



                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                        <img
                            alt="..."
                            className="max-w-full rounded-lg shadow-lg"
                            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        />
                    </div>

                </div>
            </div>






        </section>


    )
}


