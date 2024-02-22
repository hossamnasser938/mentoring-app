import { useParams } from 'react-router-dom';

import { useGetProjectIdeaQuery } from '../../state/apiSlice';
import Navbar from '../Navbars/AuthNavbar';
import MentorData from './MentorData';

export default function OneProjectIdea() {
    const { idea } = useParams();
    const { data, isFetching } = useGetProjectIdeaQuery(idea);
    console.log("🚀 ~ OneProjectIdea ~ isFetching:", isFetching)

    return (
        <>

            <div>
                <Navbar transparent />
                {isFetching && (
                    <div className='w-full bg-blueGray-700 relative' style={{ height: 'calc(100vh)' }}>
                        <div className='flex justify-center items-center h-full'>
                            <div className="loader"></div>
                            <p className="text-white">Loading...</p>
                        </div>
                    </div>
                )}
                <div className='container mx-auto pt-12'>
                    <section className="pt-12 pb-48">
                        <div className="mx-auto py-5 text-center">

                            <div className="text-left mt-12">
                                <div className='bg-indigo-700'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-6">
                                                {data?.data.name}
                                            </h3>
                                        </div>
                                        <div className='p-4'>
                                            <div className="mr-4 py-3 px-4 text-center">
                                                <a
                                                    href={data?.data?.PDF} // The link to the PDF file
                                                    download="idea.pdf"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-lightBlue-500 active:bg-red-800 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-3 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150 inline-block"
                                                >
                                                    Download PDF
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                    <div>

                                        {data?.data.createdMentor && (
                                            <MentorData mentorId={data?.data.createdMentor} />
                                        )}
                                    </div>

                                </div>

                                <img src='https://t3.ftcdn.net/jpg/04/06/10/06/360_F_406100645_6dR0fgJbh9rtC4OvzRI3ieSNfJyvwJds.jpg' alt="Project Thumbnail"></img>
                            </div>

                            <div className="mt-10 py-8 border-blueGray-200 text-left">
                                <div className="w-full  px-4">
                                    <div className='mb-6'>
                                        <h3 className="text-3xl font-semibold leading-normal text-blueGray-700 mb-1">
                                            Summary
                                        </h3>
                                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                            {data?.data?.summary}
                                        </p>
                                    </div>
                                    <div>
                                        <iframe
                                            width="560"
                                            height="315"
                                            src={`https://www.youtube.com/embed/${data?.data.youtubeLink}`}
                                            title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen
                                        ></iframe>
                                    </div>
                                    <div className='mt-6'>
                                        <h3 className="text-3xl font-semibold leading-normal text-blueGray-700 mb-1">
                                            description
                                        </h3>
                                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                            {data?.data.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div >
        </>
    );
}
