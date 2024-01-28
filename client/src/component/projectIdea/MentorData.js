import { Link } from 'react-router-dom';

import { useGetMentorOfIdeaDataQuery } from '../../state/apiSlice';

export default function MentorData({ mentorId }) {
    const { data: mentorData } = useGetMentorOfIdeaDataQuery(mentorId);

    return (
        <div>
            {mentorData && (

                <figcaption className="flex items-center justify-start m-2">
                    <img
                        className="rounded-full w-8 h-8"
                        src={mentorData?.mentor.profilePicture}
                        alt="profile picture"
                    />

                    <Link to={`/profile/${mentorData?.mentor._id}`}>
                        <div className="space-y-0.5 font-medium dark:text-white text-rig rtl:text-right ml-3">
                            <div>{mentorData?.mentor.username}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{mentorData?.mentor.title}</div>
                        </div>
                    </Link>



                </figcaption>
            )}
        </div>
    )
}
