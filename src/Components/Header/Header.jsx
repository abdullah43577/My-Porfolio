import NavBar from './NavBar';
import Hero from './Hero';

export default function Header() {
  return (
    <header id="home" className="relative w-full">
      <div className="nav flex items-center justify-center bg-navBar">
        <NavBar />
      </div>
      <Hero />
    </header>
  );
}
