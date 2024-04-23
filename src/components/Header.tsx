import { HomeIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="sticky top-0 rounded-full px-6 py-2 m-auto w-full md:w-4/5 border-2 border-zinc-200 backdrop-blur-sm bg-zinc-200/50">
      <nav className="flex justify-between items-center">
        <a href="/">
          <HomeIcon className="h-8 w-8" />
        </a>
        <ul className="flex gap-4">
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
