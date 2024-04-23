import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

const Project = () => {
  const links: string[] = ["Github Repo", "Live"];
  const tags: string[] = ["HTML", "CSS", "JavaScript", "React", "MongoDB"];

  const tagButtons: JSX.Element[] = tags.map((tag) => {
    return <p key={tag}>{tag}</p>;
  });

  const linksList: JSX.Element[] = links.map((link) => {
    return (
      <li key={link} className="self-start">
        <a href="" className="flex items-center">
          {link}&nbsp;
          <ArrowTopRightOnSquareIcon className="h-5 w-5" />
        </a>
      </li>
    );
  });

  return (
    <div className="test">
      <img src="" alt="" className="h-64 w-full" />
      <h1>Project Title</h1>
      <ul className="flex flex-col sm:flex-row sm:gap-4">{linksList}</ul>
      <div className="flex flex-wrap gap-x-2">{tagButtons}</div>
    </div>
  );
};

export default Project;
