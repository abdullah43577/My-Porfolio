import NavBar from './NavBar';
import Hero from './Hero';
import { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

export default function Header() {
  //false = closed true = open
  const [navState, setNavState] = useState(false);

  const [fixed, setFixed] = useState(false);

  const isLargeScreen = useMediaQuery('(min-width:968px)');

  useEffect(() => {
    const body = document.querySelector('body');
    if (fixed) {
      body.classList.add('becomeFixed');
      document.documentElement.classList.add('becomeFixed');
    } else {
      body.classList.remove('becomeFixed');
      document.documentElement.classList.remove('becomeFixed');
    }
  }, [fixed]);

  const handleNav = (e) => {
    setNavState((prevState) => !prevState);

    if (e.target.tagName === 'A' && isLargeScreen) return;
    setFixed((prevState) => !prevState);
  };

  return (
    <>
      <header id="home" className="relative w-full">
        <div className="nav relative z-[9999] flex items-center justify-center bg-navBar">
          <NavBar navState={navState} handleNav={handleNav} setNavState={setNavState} />
        </div>
        <Hero />
      </header>

      <div className={`overlay fixed left-0 top-0 z-[6000] ${!fixed ? 'hidden' : ''} h-full w-full bg-[#33333333]`} onClick={handleNav}></div>
    </>
  );
}
