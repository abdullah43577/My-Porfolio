import { useEffect, useRef } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import myImage from '../../assets/my Image-min.png';
import Typed from 'typed.js';

export default function Hero() {
  const programRef = useRef(null);

  useEffect(() => {
    const type = new Typed(programRef.current, {
      strings: ['HTML5', 'CSS3', 'JAVASCRIPT', 'REACTJS + VITE', 'TAILWINDCSS', 'SASS', 'GIT'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      type.destroy();
    };
  }, []);

  const isSmallScreen = useMediaQuery('(max-width:330px)');

  return (
    <section id="hero-section" className="mx-auto my-[60px] flex max-w-[1366px] flex-col items-center justify-center gap-[3rem] px-8 md:flex-row-reverse">
      <div className={`relative max-w-[500px] rounded-full border-4 border-veryDarkBlue p-6 md:h-auto md:w-1/2 ${isSmallScreen ? 'w-[300px]' : 'w-[350px]'} ${isSmallScreen ? 'h-[300px]' : 'h-[350px]'}`}>
        <img src={myImage} alt="my image" />

        <div className={`experiencebar absolute bottom-[20%] left-0 cursor-pointer rounded-md bg-veryDarkBlue p-3 font-bold text-background ${isSmallScreen ? 'translate-x-[2%]' : 'translate-x-0'}`}>2+ Years Experience</div>

        <div className={`experiencebar absolute left-0 top-[5%] cursor-pointer rounded-md bg-cta p-3 font-bold text-background sm:top-[20%] ${isSmallScreen ? 'translate-x-[2%]' : 'translate-x-0'} sm:translate-x-[-22%]`}>
          <i className="fa-solid fa-bars-progress"></i> 50+ Projects Completed
        </div>
      </div>

      <section className="hero-content text-center md:w-1/2 md:text-left">
        <p className="text-base font-medium italic text-darkBlue md:text-xl">Hello👋 I am____</p>
        <h1 className="py-3 text-3xl font-bold text-veryDarkBlue">
          Abdullah Ayoola, I'm a <span className="text-4xl text-cta2 md:text-5xl">Frontend Developer</span> From Nigeria
        </h1>
        <p className="text-base font-medium text-darkBlue md:text-xl">
          Elevating the online world building Responsive, Interactive and Attractive Web Interfaces using tools such as <span ref={programRef} className="font-bold text-cta2"></span>
        </p>

        <a href="#contact-me">
          <button className="mt-4 rounded-md border-2 bg-cta px-4 py-3 font-bold text-background hover:border-dashed hover:border-cta hover:bg-transparent hover:text-cta">Contact Me</button>
        </a>
      </section>
    </section>
  );
}
