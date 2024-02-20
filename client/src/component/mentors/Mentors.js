import React from 'react'
import { Link } from 'react-router-dom'

import { useGetAllMentorsQuery } from '../../state/apiSlice'

export default function Mentors() {
    const { data } = useGetAllMentorsQuery()

    return (

        <section className="pt-20 pb-32">
            <div className="  container mx-auto px-4">
                <div className="  flex flex-wrap justify-center text-center mb-24">
                    <div className="  w-full  px-4 ">


                        <h2 className="text-4xl font-semibold">Here are our Mentors</h2>
                        <p className="text-lg leading-relaxed m-4 text-blueGray-500 ">
                            In this section, you will find numerous technical experts who have previously worked on various projects. They have transformed ideas from paper into reality multiple times through their own hands, gaining sufficient expertise to build innovative ideas that align with the job market. Now, it is their role to share and transfer this expertise to you, creating a new generation of capable experts who can independently execute their own projects.
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap ">
                    {data && data.mentors && Array.isArray(data.mentors) && (
                        data.mentors.map(mentor => (
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4" key={mentor._id}>

                                <div className="px-6" >
                                    <Link to={`profile/${mentor._id}`}>
                                        <img
                                            alt="..."
                                            src={mentor.profilePicture}
                                            className="shadow-lg rounded-full mx-auto max-w-120-px"
                                        />
                                        <div className="pt-6 text-center">
                                            <h5 className="text-xl font-bold">{mentor.username}</h5>
                                            <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                                {mentor.title}
                                            </p>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        ))
                    )}



                </div>
            </div>
        </section>
    )
}
