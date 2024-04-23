import { HomeIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="test sticky top-0 backdrop-blur-sm rounded-full px-6 py-2 m-auto w-4/5">
      <nav className="flex justify-between items-center">
        <a href="/">
          <HomeIcon className="h-8 w-8" />
        </a>
        <ul className="flex gap-8">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
