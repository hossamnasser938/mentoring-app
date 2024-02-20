import React from 'react';

import { useGetProjectIdeasQuery } from '../../state/apiSlice';

export default function ProjectIdeas() {

  const { data } = useGetProjectIdeasQuery()

  console.log("🚀 ~ file: ProjectIdeas.js:7 ~ ProjectIdeas ~ data:", data)
  return (
    <section className="pt-20 pb-48 bg-white">
      <div className="container mx-auto py-5 text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-semibold">Here are our Ideas</h2>
          <p className="text-lg leading-relaxed m-4 text-blueGray-500 my-5 py-5">
            According to the National Oceanic and Atmospheric Administration, Ted Scambos, NSIDC lead scientist, puts the potentially record maximum.
          </p>
        </div>


        <div className="flex flex-wrap justify-center -mx-4">

          {data && data.data && Array.isArray(data.data) && (
            data.data.map(idea=>(     
                       <figure className="flex flex-col items-center justify-center p-4 text-center bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-md mx-4 my-4 sm:w-full md:w-1/3 lg:w-1/3">
              <blockquote className="max-w-md mx-auto mb-4 text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{idea.name}</h3>
                <p className="my-4">{idea.description}</p>
              </blockquote>
              <figcaption className="flex items-center justify-center">
                <img
                  className="rounded-full w-8 h-8" // Adjust size by changing w-8 and h-8
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ml-3">
                  <div>Bonnie Green</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                </div>
              </figcaption>
            </figure>
            ))

         

          )}






        </div>
      </div>
    </section>
  );
}
