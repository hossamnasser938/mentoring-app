import Navbar from '../component/Navbars/AuthNavbar';
import ProjectIdeas from '../component/projectIdea/ProjectIdeas';
export default function ProjectIdeasPage() {
  return (
    <>
      <Navbar transparent />
      <main className="ProjectIdea-page ">
        <div className="flex flex-wrap items-center ">
          <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
            <div className="justify-center flex flex-wrap relative">
              <div className="my-4 w-full lg:w-12/12 px-4">
                <ProjectIdeas isHome={false} />

                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
                  target="_blank"
                >
                  <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">Svelte</p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                  target="_blank"
                >
                  <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">ReactJS</p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
                  target="_blank"
                >
                  <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">NextJS</p>
                  </div>
                </a>
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
