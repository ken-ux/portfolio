import { HomeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 mx-auto w-full rounded-full bg-zinc-200/40 px-6 py-2 text-zinc-500 outline outline-offset-4 outline-zinc-200 backdrop-blur-sm">
      <nav className="flex items-center justify-between">
        <Link to="/">
          <HomeIcon className="h-8 w-8" />
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link to="/projects" className="font-medium">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-medium">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
