import { useParams } from 'react-router-dom'

import { useGetProjectIdeaQuery } from '../../state/apiSlice'
import Navbar from '../Navbars/AuthNavbar'
import MentorData from './MentorData'

export default function OneProjectIdea() {

    const { idea } = useParams()

    const { data, isLoading } = useGetProjectIdeaQuery(idea)


    return (
        <>
            {isLoading && (
                <>
                    <div className='w-100 w-full h-full bg-blueGray-700 relative' >
                    </div>
                </>
            )}


            <div>
                <Navbar transparent />
                <div className='container mx-auto p-5'>

        <section className="pt-12 pb-48  lg:w-9/12 sm:w-full">
                <div className="container mx-auto py-5 text-center">
                       
                        <div className=" text-left mt-12 ">
                            <div className=' bg-indigo-700'>
                                <h3 className="text-4xl  font-semibold leading-normal  text-blueGray-700 mb-6 ">
                                    {data?.data.name}
                                </h3>
                                {data?.data.createdMentor && (

                                    <MentorData mentorId={data?.data.createdMentor} />

                                )}

                            </div>


                            <img src='https://t3.ftcdn.net/jpg/04/06/10/06/360_F_406100645_6dR0fgJbh9rtC4OvzRI3ieSNfJyvwJds.jpg'></img>


                        </div>
                        <div className="mt-10 py-8  border-blueGray-200 text-left ">
                            <div className="flex flex-wrap justify-left ">
                                <div className="w-full lg:w-9/12 ">
                                <h3 className="text-3xl  font-semibold leading-normal  text-blueGray-700 mb-1 ">
                                    Summary
                                </h3>

                                    <p className="text-left mb-4 text-lg leading-relaxed text-blueGray-700   ">
                                        {
                                            data?.data.description
                                        }
                                    </p>
                                    <a
                                        href="#pablo"
                                        className="font-normal text-lightBlue-500"
                                        onClick={e => e.preventDefault()}
                                    >
                                    </a>
                                </div>
                            </div>
                        </div>



                    </div>
                </section>
             


            </div>
            </div>
        </>
    )
}

