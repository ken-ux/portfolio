import { useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import url from "../assets/project_thumbnails/members_only.png";

const Project = () => {
  const [hover, setHover] = useState(false);
  const links: string[] = ["Github Repo", "Live"];
  const tags: string[] = ["HTML", "CSS", "JavaScript", "React", "MongoDB"];

  const tagsList: string = tags.toString().replaceAll(",", ", ");

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
      {/* <div
        className="relative flex items-center"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={url}
          alt=""
          className={
            "w-full rounded-md border border-zinc-200 transition-all duration-200 ease-linear" +
            (hover ? " scale-[1.01] shadow-lg" : " shadow-sm")
          }
        />
        <div
          className={
            "absolute flex h-full flex-wrap content-center items-center justify-center gap-2 rounded-md transition-all duration-200 ease-linear" +
            (hover ? " scale-[1.01] bg-zinc-200/90 opacity-100" : " opacity-0")
          }
        >
          <p>Technology Used:</p>
          {tagButtons}
        </div>
      </div> */}
      <img
        src={url}
        alt=""
        className={
          "w-full rounded-md border border-zinc-200 transition-all duration-200 ease-linear" +
          (hover ? " scale-[1.01] shadow-lg" : " shadow-sm")
        }
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      <h3 className="mt-4 font-semibold">Project Title</h3>
      <ul className="flex flex-col sm:flex-row sm:gap-4">{linksList}</ul>
      <p className="mt-2 text-sm md:text-xs tracking-widest text-zinc-500">
        Technology: {tagsList}
      </p>
    </div>
  );
};

export default Project;
