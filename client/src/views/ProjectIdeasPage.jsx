import Navbar from '../component/Navbars/AuthNavbar';
import ProjectIdeas from '../component/projectIdea/ProjectIdeas';
export default function ProjectIdeasPage() {
  return (
    <>
      <Navbar  />
      <main className="ProjectIdea-page ">
        <div className="flex flex-wrap items-center ">
          <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
            <div className="justify-center flex flex-wrap relative">
              <div className="my-4 w-full lg:w-12/12 px-4">
                <ProjectIdeas />

            
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
