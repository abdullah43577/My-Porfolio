import NavBar from './NavBar';
import Hero from './Hero';
import { useState, useEffect } from 'react';

export default function Header() {
  //false = closed true = open
  const [navState, setNavState] = useState(false);

  const [fixed, setFixed] = useState(false);
  const body = document.querySelector('body');

  useEffect(() => {
    if (fixed) {
      body.classList.add('becomeFixed');
      document.documentElement.classList.add('becomeFixed');
    } else {
      body.classList.remove('becomeFixed');
      document.documentElement.classList.remove('becomeFixed');
    }
  }, [fixed]);

  const handleNav = () => {
    setNavState((prevState) => !prevState);
    setFixed((prevState) => !prevState);
  };

  return (
    <>
      <header id="home" className="relative w-full">
        <div className="nav relative z-[9999] flex items-center justify-center bg-navBar">
          <NavBar navState={navState} handleNav={handleNav} />
        </div>
        <Hero />
      </header>

      <div className={`overlay fixed left-0 top-0 z-[6000] ${!navState ? 'hidden' : ''} h-full w-full bg-[#33333333]`} onClick={handleNav}></div>
    </>
  );
}
