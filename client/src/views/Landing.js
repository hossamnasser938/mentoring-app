import { Link } from 'react-router-dom';

import homeCover from '../assets/img/20196826-296b-42f2-a3cc-0b15b547cab3.jpg'
import Footer from '../component/Footers/Footer.js';
import HomeProjectSection from '../component/homeprojectIdea/HomeProjectSection.js';
import Mentors from '../component/mentors/Mentors.js';
import Navbar from '../component/Navbars/AuthNavbar.js';


export default function Landing() {



    return (
        <>
            <Navbar transparent />
            <main>
                {/* fisrt section  */}

                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                `url(${homeCover})`,
                        }}
                    >
                        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>

                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-5xl">Your story starts with us.</h1>
                                    <p className="mt-4 text-lg text-blueGray-200">
                                        This is a simple example of a Landing Page you can build using Notus React. It
                                        features multiple CSS components based on the Tailwind CSS design system.


                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* 1st section end */}

                {/* cards */}

                <section className="pb-20 bg-blueGray-200 -mt-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                {/* first two classes for card curving */}

                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                            <i className="fas fa-award"></i>
                                        </div>

                                        <h6 className="text-xl font-semibold">Project</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            From this road, you will find all you need from different projects, tailored ideas for you or craft your creations  .                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                            <i className="fas fa-retweet"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Mentoring</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            {/* Keep you user engaged by providing meaningful information. Remember that by
                                            this time, the user is curious. */}
                                            You  can find your mentors who have technical experience in your field, their role to share and transfer this expertise to you
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                            <i className="fas fa-fingerprint"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Assist</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            {/* Write a few lines about each one. A paragraph describing a feature will be
                                            enough. Keep you user engaged! */}
                                            You can share your challenges with us. We are here to actively engage with you, helpping to resolve your issues effectively.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* cards end */}

                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-user-friends text-xl"></i>
                                </div>
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
                                <Link to="/" className="font-bold text-blueGray-700 mt-8">
                                    Check Notus React!
                                </Link>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="..."
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                                        className="w-full align-middle rounded-t-lg"
                                    />
                                    <blockquote className="relative p-8 mb-4">
                                        <svg
                                            preserveAspectRatio="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 583 95"
                                            className="absolute left-0 w-full block h-95-px -top-94-px"
                                        >
                                            <polygon
                                                points="-30,95 583,95 583,65"
                                                className="text-lightBlue-500 fill-current"
                                            ></polygon>
                                        </svg>
                                        <h4 className="text-xl font-bold text-white">Top Notch Services</h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            The Arctic Ocean freezes every winter and much of the sea-ice then thaws every
                                            summer, and that process will continue whatever happens.
                                        </p>
                                    </blockquote>

                                    {/* related to second section image decoration  */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
                            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                                <img
                                    alt="..."
                                    className="max-w-full rounded-lg shadow-lg"
                                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                />
                            </div>
                            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                                <div className="md:pr-12">
                                    <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                                        <i className="fas fa-rocket text-xl"></i>
                                    </div>
                                    <h3 className="text-3xl font-semibold">A growing company</h3>
                                    <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                        The extension comes with three pre-built pages to help you get started faster.
                                        You can change the text and images and you're good to go.
                                    </p>
                                    <ul className="list-none mt-6">
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                                                        <i className="fas fa-fingerprint"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">Carefully crafted components</h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                                                        <i className="fab fa-html5"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">Amazing page examples</h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                                                        <i className="far fa-paper-plane"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">Dynamic components</h4>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Mentors section  */}
                <Mentors isHomePage={true} />
                {/* Mentors section  */}



                {/* projectIdeas section  */}

                <HomeProjectSection />
                {/* projectIdeas section  */}


                <UserMessagesHomeSection />
            </main>
            <Footer />
        </>
    );
}
