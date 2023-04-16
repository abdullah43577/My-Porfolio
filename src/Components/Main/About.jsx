import { useState, useEffect, useRef } from 'react';
import myImage from '../../assets/my image file 2.jpg';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  const handleAboutSection = function () {
    setIsVisible((prevState) => !prevState);
  };

  // Intersection Observer API section
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionSlide = useRef(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });

    sectionObserver.observe(sectionSlide.current);

    return () => {
      sectionObserver.unobserve(sectionSlide.current);
    };
  }, []);

  function revealSection(entries, observer) {
    const [entry] = entries;

    setIsIntersecting(entry.isIntersecting);
  }

  useEffect(() => {
    const parent = sectionSlide.current.parentElement.parentElement;
    const navbar = parent.querySelector('.nav');

    const handleScroll = () => {
      if (window.scrollY >= sectionSlide.current.offsetTop) {
        navbar.classList.add('fixedNav');
      } else {
        navbar.classList.remove('fixedNav');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const img = sectionSlide.current.querySelector('img');
    const contentContainer = sectionSlide.current.querySelector('.text');

    if (!isIntersecting) {
      img.classList.remove('slide-in');
      contentContainer.classList.remove('slide-in');
      return;
    }

    img.classList.add('slide-in');
    contentContainer.classList.add('slide-in');
  }, [isIntersecting]);

  return (
    <section ref={sectionSlide} id="about" className="mx-auto my-32 max-w-[1300px] px-8">
      <h2 className="my-8 text-center text-4xl font-bold text-darkBlue">About Me</h2>
      <div className="content my-4 flex flex-col items-center gap-[3rem] text-center lg:flex-row-reverse lg:items-start lg:justify-center lg:text-left">
        <img src={myImage} alt="My image" className="slide-out mx-auto w-[350px] md:mx-0 md:w-[450px] lg:w-[600px]" />

        <div className="text slide-out flex flex-col gap-3 font-medium text-veryDarkBlue md:w-[40%]">
          <p className="md:text-lg">
            I'm a Frontend Developer from Lagos, Nigeria with 2+ years of experience. I am passionate about building fully interactive, responsive, and attractive websites using my skills. In 2022, I earned the Responsive Web Design certificate from
            freecodecamp.org, and in 2023, I successfully completed a JavaScript course on Udemy with over 69 hours of coding exercises.
          </p>
          <p className="md:text-lg">
            Since I was little, I've always been fascinated with computers and the endless possibilities they offer. Becoming a programmer has been the best decision of my life, as I get to use my creativity to make a positive impact on the online
            world.
          </p>

          <p className={`${!isVisible && 'hidden'} md:text-lg`}>
            I am also highly dedicated to improving my skills and knowledge, constantly working on coding challenges and projects. To date, I have completed over 41 coding challenges on{' '}
            <a href="https://www.frontendmentor.io/profile/abdullah43577" target="_blank" className="text-cta2 underline">
              Frontend Mentor's website
            </a>
            , with over 1000 points accumulated.
          </p>
          <p className={`${!isVisible && 'hidden'} md:text-lg`}>
            In my free time, I enjoy exploring new technologies and contributing to open-source projects. You can find my latest projects and contributions on my{' '}
            <a href="https://github.com/abdullah43577" target="_blank" className="text-cta2 underline">
              GitHub profile
            </a>
            , where I am highly active and consistent with my commits.
          </p>

          <button className="mx-auto mt-4 max-w-[150px] rounded-md border-2 bg-cta px-4 py-3 font-bold text-background hover:border-dashed hover:border-cta hover:bg-transparent hover:text-cta lg:mx-0" onClick={handleAboutSection}>
            {!isVisible ? 'Read More' : 'Truncate'}
          </button>
        </div>
      </div>
    </section>
  );
}
