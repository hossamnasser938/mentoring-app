import React from 'react'
import { Link } from 'react-router-dom'

import { useGetProjectIdeasQuery } from '../../state/apiSlice';
import ProjectIdeaCard from '../projectIdea/projectIdeaCard';

export default function HomeProjectSection() {
    const { data } = useGetProjectIdeasQuery();

    return (



        <main className="ProjectIdea-page ">

            <section className="pt-20  bg-white">



                <section className="pt-20 pb-48 bg-white">
                    <div className="container mx-auto py-5 text-center">
                        <div className="mb-12">
                            <h2 className="text-4xl font-semibold">Here are our Ideas</h2>
                            <p className="text-lg leading-relaxed m-4 text-blueGray-500 my-5 py-5">
                                In this section, you will find many different projects that you can implement yourself. You can also generate your ideas and develop your own project, as you will find new and modern ideas here tailored to the requirements and needs of the job market.
                            </p>
                        </div>


                        <div className=" flex flex-wrap mx-4  ">
                            {data &&
                                data.data &&
                                Array.isArray(data.data) &&
                                data.data.map(idea => <ProjectIdeaCard idea={idea} />).slice(0, 3)}

                        </div>

                        <Link to="/projectideas" className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150">
                            View more ideas
                        </Link>
                    </div>
                </section>
            </section>


        </main>

    )
}


