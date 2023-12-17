import { useGetMetorProfileQuery } from '../../state/apiSlice';

export default function ProjectIdeaCard({ createdMentor, name, description }) {
  const { data: mentorData } = useGetMetorProfileQuery(createdMentor);

  return (
    <figure className="flex flex-col items-center justify-center p-4 text-center bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-md mx-4 my-4 sm:w-full md:w-1/3 lg:w-1/3">
      <blockquote className="max-w-md mx-auto mb-4 text-gray-500 dark:text-gray-400">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
        <p className="my-4">{description}</p>
      </blockquote>
      <figcaption className="flex items-center justify-center">
        <img
          className="rounded-full w-8 h-8" // Adjust size by changing w-8 and h-8
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
          alt="profile picture"
        />
        (mentorData&&(
        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ml-3">
          <div>{mentorData.username}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">{mentorData.title}</div>
        </div>
        ))
      </figcaption>
    </figure>
  );
}
