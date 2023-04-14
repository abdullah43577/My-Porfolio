import { useEffect, useRef, useState } from 'react';

export default function GitHubStats() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const element = useRef(null);

  function revealSection(entries, observer) {
    const [entry] = entries;
    setIsIntersecting(entry.isIntersecting);
  }

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });

    sectionObserver.observe(element.current);

    return () => {
      sectionObserver.unobserve(element.current);
    };
  }, []);

  useEffect(() => {
    const img1 = element.current.querySelector('.el > :first-child');
    const img2 = element.current.querySelector('.el > :nth-child(2)');
    const img3 = element.current.querySelector('.el > :last-child');

    if (!isIntersecting) {
      img1.classList.remove('visible');
      img2.classList.remove('visible');
      img3.classList.remove('visible');
      return;
    }

    img1.classList.add('visible');
    img2.classList.add('visible');
    img3.classList.add('visible');
  }, [isIntersecting]);

  return (
    <section ref={element} id="git" className="w-full p-8">
      <h2 className="my-8 text-center text-4xl font-bold text-darkBlue">Github Stats</h2>

      <div id="githubstats" className="el mx-auto max-w-[1000px]">
        <img src="https://github-readme-stats.vercel.app/api/top-langs?username=abdullah43577&show_icons=true&locale=en&layout=compact" alt="github stat" className="hide mx-auto" />
        <img src="https://github-readme-stats.vercel.app/api?username=abdullah43577&show_icons=true&locale=en" alt="github stat" className="hide" />
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=abdullah43577&" alt="github stat" className="hide" />
      </div>
    </section>
  );
}
