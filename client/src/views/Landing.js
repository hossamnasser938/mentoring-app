
import businessSectionImg from '../assets/img/48699a84-17e0-49fd-b960-0013cb7f2d5c.jpg'
import homeCover from '../assets/img/mainBackGround.jpg'
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
                        <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                    </div>

                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-5xl">Your story starts with us.</h1>
                                    <p className="mt-4 text-lg text-blueGray-200">
                                        {/* This is a simple example of a Landing Page you can build using Notus React. It
                                        features multiple CSS components based on the Tailwind CSS design system. */}


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
                                    Tech Dreams Realized: Mentor Bro's Method
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    At Mentor Bro, we're more than a tech education firm; we're a community of mentors dedicated to empowering students to reach their tech dreams. Our mission is to change perceptions of technology, unlocking students' potential and supporting them to achieve their goals
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                                    Through personalized mentoring and advanced resources, we guide students to professional excellence in technology, encouraging creativity and innovative problem-solving.
                                </p>

                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="..."
                                        src={businessSectionImg}
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
                                        <h4 className="text-xl font-bold text-white"> Unleashing Potential with Mentor Bro</h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Join us in building a bright, tech-driven future, where every student can realize their aspirations. Together at Mentor Bro, we empower, inspire, and achieve dreams..
                                        </p>
                                    </blockquote>

                                    {/* related to second section image decoration  */}
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
