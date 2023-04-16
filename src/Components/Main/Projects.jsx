import { useEffect, useRef, useState } from 'react';
import projects from './projectData';
import GitHubStats from './GitHubStats';

export default function Projects() {
  const contentData = useRef([]);
  const [isIntersecting, setIsIntersecting] = useState([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(revealSections, {
      root: null,
      threshold: 0.15,
    });

    contentData.current.forEach((ref) => sectionObserver.observe(ref));

    return () => {
      contentData.current.forEach((ref) => sectionObserver.unobserve(ref));
    };
  }, []);

  function revealSections(entries, observer) {
    entries.forEach((entry) => {
      // getting the index of the element that called this function i.e the element that's intersecting
      const index = contentData.current.indexOf(entry.target);

      setIsIntersecting((prevValue) => {
        const newState = [...prevValue];
        newState[index] = entry.isIntersecting;
        return newState;
      });
    });
  }

  useEffect(() => {
    contentData.current.forEach((ref, index) => {
      if (!isIntersecting[index]) {
        ref.classList.remove('slide-in');
        return;
      }

      ref.classList.add('slide-in');
    });
  }, [isIntersecting]);

  const myProjects = projects.map((project) => {
    return (
      <div key={project.id} className={`project flex w-full cursor-pointer flex-col items-center rounded-2xl ${project.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:rounded-l-2xl`}>
        <div className={`imageContainer relative h-auto w-full cursor-pointer overflow-hidden ${project.reverse ? 'lg:rounded-r-2xl' : 'lg:rounded-l-2xl'} hidden w-1/2 lg:block`}>
          <img src={project.img} alt={project.alt} className={`w-full ${project.reverse ? 'lg:rounded-r-2xl' : 'lg:rounded-l-2xl'}`} />
          <div className={`cover flex items-center justify-center gap-4 overflow-hidden ${project.reverse ? 'lg:rounded-r-2xl' : 'rounded-l-2xl'}`}>
            <a href={project.githubURL} target="_blank">
              <div className="liveURL absolute left-0 top-6 bg-navBar px-16 py-3 text-background">
                <i className="fa-brands fa-github fa-lg"></i> View on Github
              </div>
            </a>

            <a href={project.liveURL} target="_blank">
              <div className="liveURL absolute bottom-6 right-0 bg-navBar px-16 py-3 text-background">
                <i className="fa-solid fa-arrow-up-right-from-square fa-lg"></i> Check it out
              </div>
            </a>
          </div>
        </div>

        <div ref={(ref) => (contentData.current[project.id - 1] = ref)} className="mainContent show w-full bg-background p-8 lg:w-1/2">
          <p className="text-lg text-cta2">Featured Project</p>
          <h2 className="my-4 text-2xl font-bold">{project.title}</h2>

          <p className="mb-6 text-darkBlue">{project.content}</p>

          <div className="tools-used flex flex-wrap items-center gap-3">
            {project.techStacks.map((techStack, i) => {
              return (
                <div key={i} className={`${techStack.toLowerCase()} cursor-pointer rounded border-2 border-dashed border-darkBlue bg-darkBlue px-3 py-2 text-sm font-bold text-background hover:bg-transparent hover:text-cta2 md:text-base`}>
                  {techStack}
                </div>
              );
            })}
          </div>

          <div className="socialIcons my-4 flex items-center gap-3 lg:hidden">
            <a href={project.githubURL} target="_blank">
              <div className="text-backgroun cursor-pointer rounded border-dashed border-darkBlue bg-darkBlue px-3 py-2 text-sm text-background hover:border-2 hover:bg-transparent hover:text-cta2 md:text-base">
                <i className="fa-brands fa-github fa-lg"></i>
              </div>
            </a>

            <a href={project.liveURL} target="_blank">
              <div className="text-backgroun cursor-pointer rounded border-dashed border-darkBlue bg-darkBlue px-3 py-2 text-sm text-background hover:border-2 hover:bg-transparent hover:text-cta2 md:text-base">
                <i className="fa-solid fa-arrow-up-right-from-square fa-lg"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <section id="myprojects" className="my-6 p-8">
        <h2 className="text-center text-3xl font-bold text-darkBlue">Projects</h2>

        <div className="projects--container mx-auto my-16 max-w-[400px] lg:max-w-[1200px]">{myProjects}</div>
      </section>

      <GitHubStats />
    </>
  );
}
