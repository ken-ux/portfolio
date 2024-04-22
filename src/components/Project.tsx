import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

const Project = () => {
  const links: string[] = ["Github Repo", "Live"];
  const listItems: JSX.Element[] = links.map((link) => {
    return (
      <li className="self-start">
        <a href="" className="test flex items-center">
          {link}&nbsp;
          <ArrowTopRightOnSquareIcon className="icon" />
        </a>
      </li>
    );
  });

  return (
    <div className="test">
      <img src="" alt="" className="w-full h-64" />
      <h1>Project Title</h1>
      <ul className="flex flex-col">{listItems}</ul>
    </div>
  );
};

export default Project;
