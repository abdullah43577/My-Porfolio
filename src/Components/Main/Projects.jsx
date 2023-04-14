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
      <div key={project.id} className="project mx-auto flex w-full max-w-[400px] cursor-pointer flex-col items-center rounded-2xl bg-glass lg:max-w-[1200px] lg:flex-row lg:rounded-l-2xl">
        <div className="imageContainer relative h-auto w-full cursor-pointer overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-r-none">
          <img src={project.img} alt={project.alt} className="w-full rounded-t-2xl lg:rounded-l-2xl lg:rounded-r-none" />
          <div className="cover flex items-center justify-center gap-4 overflow-hidden">
            <a href={project.githubURL} target="_blank">
              <i className="fa-brands fa-github fa-2xl fa-flip text-cta2"></i>
            </a>

            <a href={project.liveURL} target="_blank">
              <i className="fa-solid fa-arrow-up-right-from-square fa-bounce fa-2xl text-cta2"></i>
            </a>
          </div>
        </div>

        <div ref={(ref) => (contentData.current[project.id - 1] = ref)} className="mainContent show w-full p-8">
          <p className="mb-6 text-darkBlue">{project.content}</p>

          <div className="tools-used flex flex-wrap items-center gap-3">
            {project.techStacks.map((techStack, i) => {
              return (
                <div key={i} className={`${techStack.toLowerCase()} cursor-pointer rounded border-dashed border-darkBlue bg-darkBlue px-3 py-2 font-bold text-background hover:border-2 hover:bg-transparent hover:text-cta2`}>
                  {techStack}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <section id="myprojects" className="my-6 bg-white p-8">
        <h2 className="text-center text-3xl font-bold text-darkBlue">Projects</h2>

        <div className="projects--container my-16">{myProjects}</div>
      </section>

      <GitHubStats />
    </>
  );
}
