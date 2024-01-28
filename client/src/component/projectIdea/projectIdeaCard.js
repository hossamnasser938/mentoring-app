import { Link } from 'react-router-dom';

import { useGetMentorOfIdeaDataQuery } from '../../state/apiSlice';

export default function ProjectIdeaCard({ idea }) {
  const { data: mentorData } = useGetMentorOfIdeaDataQuery(idea.createdMentor);

  return (

    //projects ideas card
    <figure key={idea._id} className="  mx-4  md:w-6/10 lg:w-3/10 sm:w-10/10 mb-12 border border-gray-700 rounded-lg light:bg-gray-200 dark:border-gray-700 shadow-md ">

      <Link to={`/projectideas/${idea._id}`}>
        <img src='https://t3.ftcdn.net/jpg/04/06/10/06/360_F_406100645_6dR0fgJbh9rtC4OvzRI3ieSNfJyvwJds.jpg'></img>
        <blockquote className="max-w-md mx-auto mb-4 text-gray-500 dark:text-gray-400">

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-left ml-2 mt-2">{idea.name}</h3>
          <p className="my-2 px-2 text-left ">{idea.description?.split(" ").slice(0, 15).join(" ") + "..."}</p>
        </blockquote>

        <figcaption className="flex items-center justify-end m-2">
          <img
            className="rounded-full w-8 h-8"
            src={mentorData?.mentor.profilePicture}
            alt="profile picture"
          />
          {mentorData && (
            <Link to={`/profile/${mentorData?.mentor._id}`}>        
                <div className="space-y-0.5 font-medium dark:text-white text-rig rtl:text-right ml-3">
              <div>{mentorData?.mentor.username}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{mentorData?.mentor.title}</div>
            </div>
            </Link>
          )}


        </figcaption>
      </Link>
    </figure>
  );
}
