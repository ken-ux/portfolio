import { useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import url from "../assets/project_thumbnails/members_only.png";

const Project = () => {
  const [hover, setHover] = useState(false);
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
    <div>
      {/* <div className="flex items-center justify-center">
        <ul className="absolute flex flex-col sm:flex-row sm:gap-4">
          {linksList}
        </ul>
        <img
          src={url}
          alt=""
          className="w-full rounded-md border border-zinc-200 shadow-md"
        />
      </div> */}
      <img
        src={url}
        alt=""
        className={
          "w-full rounded-md border border-zinc-200 shadow-md transition-all duration-200 ease-linear" +
          (hover ? " opacity-70" : "")
        }
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      <h3 className="mt-2 font-semibold">Project Title</h3>
      <ul className="flex flex-col sm:flex-row sm:gap-4">{linksList}</ul>
      <div className="flex flex-wrap gap-x-2">{tagButtons}</div>
    </div>
  );
};

export default Project;
