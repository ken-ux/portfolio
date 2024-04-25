import { useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

interface ProjectProps {
  imageUrl: string;
  links: string[];
  tags: string[];
}

const Project = ({ imageUrl, links, tags }: ProjectProps) => {
  const [hover, setHover] = useState(false);

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
      <h3 className="mt-4 font-semibold">Project Title</h3>
      <ul className="flex flex-col sm:flex-row sm:gap-4">{linksList}</ul>
      <p className="mt-2 text-sm tracking-widest text-zinc-500 md:text-xs">
        Technologies Used: {tagsList}
      </p>
    </div>
  );
};

export default Project;
