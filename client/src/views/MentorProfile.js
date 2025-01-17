import React from 'react';
import { useParams } from 'react-router-dom';

import mentorBg from '../assets/img/mentorDetails.jpg'
import Footer from '../component/Footers/Footer';
import Navbar from '../component/Navbars/AuthNavbar';
import { useGetMetorProfileQuery } from '../state/apiSlice';

export default function Profile() {
    const { id } = useParams()
    const { data,isFetching } = useGetMetorProfileQuery(id)
    const mentor = data?.mentor
    return (
        <>
         <div>
                {isFetching  && (
                    <div className='w-full bg-blueGray-700 relative' style={{ height: 'calc(100vh)' }}>
                        <div className='flex justify-center items-center h-full'>
                            <div className="loader"></div>
                            <p className="text-white">Loading...</p>
                        </div>
                    </div>
                )}
            </div>
            <Navbar transparent />
            <main className="profile-page">
                <section className="relative block h-500-px">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                `url(${mentorBg})`,
                            backgroundSize: "contain"


                        }}
                    >
                        <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                    </div>


                </section>



                <section className="relative py-16 bg-blueGray-200">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">
                                            <img
                                                alt="..."
                                                src={mentor?.profilePicture}
                                                className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        <div className="py-6 px-3 mt-32 sm:mt-0">
                                            <button
                                                className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                            >
                                                Connect
                                            </button>
                                            <a
                                                href={`https://${mentor?.youtubeLink}`}
                                                target="_blank"
                                                rel="noopener noreferrer"

                                                className="bg-red-500 active:bg-red-800 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150 inline-block"
                                            >
                                                <button
                                                    type="button"
                                                    className="focus:outline-none"
                                                >
                                                    Youtube link
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                            <div className="mr-4 p-3 text-center">
                                                <a
                                                    href={mentor?.cv}
                                                    target="_blank"
                                                    rel="noopener noreferrer"

                                                    className="bg-lightBlue-500 active:bg-red-800 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150 inline-block"
                                                >
                                                    <button
                                                        type="button"
                                                        className="focus:outline-none"
                                                    >
                                                        My CV
                                                    </button>
                                                </a>

                                            </div>
                                            {/* <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                    10
                                                </span>
                                                <span className="text-sm text-blueGray-400">Photos</span>
                                            </div>
                                            <div className="lg:mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                    89
                                                </span>
                                                <span className="text-sm text-blueGray-400">Comments</span>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-12">
                                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                        {
                                            mentor?.username
                                        }                                    </h3>
                                    {/* <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i> Los
                                        Angeles, California
                                    </div> */}
                                    <div className="mb-2 text-blueGray-600 mt-10">
                                        <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                        {
                                            mentor?.title
                                        }                                    </div>
                                    {/* <div className="mb-2 text-blueGray-600">
                                        <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                                        University of Computer Science
                                    </div> */}
                                </div>
                                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                                {
                                                    mentor?.description
                                                }
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
