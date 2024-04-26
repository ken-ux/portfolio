import { useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

interface ProjectProps {
  title: string;
  imageUrl: string;
  repo: string;
  live?: string;
  tags: string[];
}

const Project = ({ title, imageUrl, repo, live, tags }: ProjectProps) => {
  const [hover, setHover] = useState(false);

  const tagsList: string = tags.toString().replaceAll(",", ", ");

  const links = [{ name: "GitHub Repo", url: repo }];
  if (live) {
    links.push({ name: "Live", url: live });
  }

  const linksList: JSX.Element[] = links.map((link, index) => {
    return (
      <li key={index} className="self-start">
        <a href={link.url} className="flex items-center">
          {link.name}&nbsp;
          <ArrowTopRightOnSquareIcon className="h-5 w-5" />
        </a>
      </li>
    );
  });

  return (
    <div>
      <img
        src={imageUrl}
        alt=""
        className={
          "aspect-square w-full rounded-md border border-zinc-200 object-cover object-left-top transition-all duration-200 ease-linear" +
          (hover ? " scale-[1.01] shadow-lg" : " shadow-sm")
        }
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      <h2 className="mt-4 font-semibold">{title}</h2>
      <ul className="flex flex-col sm:flex-row sm:gap-4">{linksList}</ul>
      <p className="mt-2 text-sm tracking-widest text-zinc-500 md:text-xs">
        Technologies Used: {tagsList}
      </p>
    </div>
  );
};

export default Project;
