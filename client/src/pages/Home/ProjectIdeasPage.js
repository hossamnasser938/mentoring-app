
import Navbar from '../component/Navbars/AuthNavbar';
import ProjectIdeaCard from '../component/projectIdea/projectIdeaCard';
// import ProjectIdeas from '../component/projectIdea/ProjectIdeas';
import { useGetProjectIdeasQuery } from '../state/apiSlice';
export default function ProjectIdeasPage() {
  const { data } = useGetProjectIdeasQuery();

  return (
    <>
      <Navbar />
      <main className="ProjectIdea-page ">

                <section className="pt-20 pb-48 bg-white">
              
                 

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
          data.data.map(idea => <ProjectIdeaCard idea={idea} />).slice(0, 8)}

      </div>
      {/* <Link to={'/projectideas'} className="flex justify-end mt-4 lg-blue">
        see more
      </Link> */}

    </div>
  </section>
             </section>
                
            
      </main>
    </>
  );
}
