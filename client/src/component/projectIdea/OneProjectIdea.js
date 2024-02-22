import { useParams } from 'react-router-dom';

import { useGetProjectIdeaQuery } from '../../state/apiSlice';
import Navbar from '../Navbars/AuthNavbar';
import MentorData from './MentorData';

export default function OneProjectIdea() {
    const { idea } = useParams();
    const { data, isLoading } = useGetProjectIdeaQuery(idea);

    return (
        <>
            {isLoading && (
                <div className='w-full h-full bg-blueGray-700 relative'></div>
            )}

            <div>
                <Navbar transparent />
                {/* Retain the container for layout consistency */}
                <div className='container mx-auto p-5'>
                    <section className="pt-12 pb-48">
                        <div className="mx-auto py-5 text-center">

                            {/* Ensure utilization of available space without extra empty spaces */}
                            <div className="text-left mt-12">
                                <div className='bg-indigo-700'>
                                    <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-6">
                                        {data?.data.name}
                                    </h3>
                                    {data?.data.createdMentor && (
                                        <MentorData mentorId={data?.data.createdMentor} />
                                    )}
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
            </div>
        </>
    );
}
