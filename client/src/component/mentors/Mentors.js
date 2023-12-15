import React from 'react'
import { Link } from 'react-router-dom'

import { useGetAllMentorsQuery } from '../../state/apiSlice'

export default function Mentors() {
    const { data } = useGetAllMentorsQuery()

  return (
 
    <section className="pt-20 pb-48">
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">


                <h2 className="text-4xl font-semibold">Here are our heroes</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                    According to the National Oceanic and Atmospheric Administration, Ted, Scambos,
                    NSIDClead scentist, puts the potentially record maximum.
                </p>
            </div>
        </div>
        <div className="flex flex-wrap">
            {data && data.mentors && Array.isArray(data.mentors) && (
                data.mentors.map(mentor => (
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" key={mentor._id}>

                        <div className="px-6" >
                            <Link to={`profile/${mentor._id}`}>
                                <img
                                    alt="..."
                                    // src={require('../assets/img/team-1-800x800.jpg').default}
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
