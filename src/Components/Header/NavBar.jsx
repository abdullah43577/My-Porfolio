import Resume from '../../assets/CV Resume.pdf';
import { useMediaQuery } from '@react-hook/media-query';

export default function NavBar(props) {
  const isSmallScreen = useMediaQuery('(max-width:380px)');

  return (
    <nav className="flex h-[80px] w-full max-w-[1300px] items-center justify-between px-8 py-3">
      <div className="brandLogoContainer flex w-[100px] cursor-pointer items-center border-2 border-dashed border-background p-1" draggable="true">
        <div className="name bg-cta px-2 py-1 text-xs font-bold text-background">AYO</div>
        <div className="stack mx-auto text-xs font-bold text-background">DEV</div>
      </div>

      <div
        className={`mobilenav fixed right-0 top-[80px] flex h-full ${isSmallScreen ? 'w-[70%]' : 'w-[50%]'} ${
          !props.navState ? 'translate-x-[100%]' : ''
        } z-[9999] h-screen flex-col items-center gap-[2rem] bg-navBar lg:relative lg:top-0 lg:h-auto lg:translate-x-0 lg:flex-row lg:justify-center lg:bg-transparent`}
      >
        <ul className="flex flex-col items-center lg:flex-row">
          <li className="py-4 text-xl text-background hover:text-cta lg:px-4 lg:py-0" onClick={props.handleNav}>
            <a href="#home">Home</a>
          </li>
          <li className="py-4 text-xl text-background hover:text-cta lg:px-4 lg:py-0" onClick={props.handleNav}>
            <a href="#about">About</a>
          </li>
          <li className="py-4 text-xl text-background hover:text-cta lg:px-4 lg:py-0" onClick={props.handleNav}>
            <a href="#skill-set">Tools</a>
          </li>
          <li className="py-4 text-xl text-background hover:text-cta lg:px-4 lg:py-0" onClick={props.handleNav}>
            <a href="#myprojects">Projects</a>
          </li>
          <li className="py-4 text-xl text-background hover:text-cta lg:px-4 lg:py-0" onClick={props.handleNav}>
            <a href="#git">Stats</a>
          </li>
          <li className="py-4 text-xl text-background hover:text-cta lg:px-4 lg:py-0" onClick={props.handleNav}>
            <a href="#contact-me">Contact</a>
          </li>
        </ul>

        <a href={Resume} download={true} className="lg:hidden">
          <button className="mx-4 rounded border-cta bg-cta px-8 py-3 text-white hover:border-2 hover:bg-transparent hover:text-cta">Download My CV</button>
        </a>
      </div>

      <a href={Resume} download={true} target="_blank" className="hidden lg:block">
        <button className="w-[200px] rounded border-dashed border-cta bg-cta px-8 py-3 text-white hover:border-2 hover:bg-transparent">Download My CV</button>
      </a>

      <div className={`burgerMenu cursor-pointer lg:hidden ${props.navState ? 'toggle' : ''}`} onClick={props.handleNav}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
