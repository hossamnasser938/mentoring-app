import { Link } from 'react-router-dom';

import { useGetProjectIdeasQuery } from '../../state/apiSlice';
import ProjectIdeaCard from './projectIdeaCard';

export default function ProjectIdeas(isHome = false) {
  const { data } = useGetProjectIdeasQuery();

  return (
    <section className="pt-20 pb-48 bg-white">
      <div className="container mx-auto py-5 text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-semibold">Here are our Ideas</h2>
          <p className="text-lg leading-relaxed m-4 text-blueGray-500 my-5 py-5">
            According to the National Oceanic and Atmospheric Administration, Ted Scambos, NSIDC
            lead scientist, puts the potentially record maximum.
          </p>
        </div>

        <div className="flex flex-wrap justify-center -mx-4">
          {data &&
            data.data &&
            Array.isArray(data.data) &&
            data.data.map(idea => <ProjectIdeaCard key={idea._id} idea={idea} />).slice(0, 7)}
          {isHome ? (
            <Link to={'/projectideas'} className="flex justify-end mt-4 lg-blue">
              see more
            </Link>
          ) : (
            <Link to={'/projectideas'} className="flex justify-end mt-4 lg-blue">
            </Link>)}
        </div>
      </div>
    </section>
  );
}
