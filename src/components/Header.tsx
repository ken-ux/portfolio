import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="sticky top-0 m-auto w-full rounded-full border-2 border-zinc-200 bg-zinc-200/50 px-6 py-2 backdrop-blur-sm md:w-4/5">
      <nav className="flex items-center justify-between">
        <a href="/">
          <HomeIcon className="h-8 w-8" />
        </a>
        <ul className="flex gap-4">
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
