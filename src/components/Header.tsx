const Header = () => {
  return (
    <header>
      <nav className="flex justify-between">
        <a href="/">Name</a>
        <ul className="flex gap-8">
          <li>
            <a href="#work">Work</a>
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
