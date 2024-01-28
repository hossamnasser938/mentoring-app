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
        <div className="flex flex-row justify-between items-start">

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
                <section className="  pt-64  bg-white py-5  lg:w-4/12 sm:w-full" >
                    <div className='container mx-auto border border-2 py-10  mx-auto border border-2 py-10  rounded-lg '>

                        <h4 className=' ml-3 text-2xl  font-semibold leading-normal  text-blueGray-700 mb-6'>Contact us</h4 >
                        <div className='flex flex-col'>
                            <h6 className=' text-lg ml-3 font-semibold text-blueGray-700 mb-3'>
                                Email :    <span className='text-lg ml-3 font-semibold text-black '>   mentor@gmail.com</span>
                            </h6>
                            <h6 className=' text-lg ml-3 font-semibold text-blueGray-700 mb-3'>
                                Phone : <span className='text-lg ml-2 font-semibold text-black'>0100111555</span>
                            </h6>
                        </div>

                    </div>
                </section>


            </div>
            </div>
            </div>
        </>
    )
}

