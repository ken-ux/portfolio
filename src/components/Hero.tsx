import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="mt-12 md:w-4/5">
      <div className="font-display text-5xl leading-tight tracking-tight">
        <h1 className="inline">Hi, I'm Kenny Nguyen.</h1>
        <span>
          &nbsp;A full-stack software developer building applications that
          highlight intuitive, approachable design.
        </span>
      </div>

      <div className="mt-12 flex flex-wrap gap-6 text-2xl">
        <a href="https://github.com/ken-ux" className="flex items-center gap-1">
          GitHub
          <ArrowTopRightOnSquareIcon className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/kennyhn/"
          className="flex items-center gap-1"
        >
          LinkedIn
          <ArrowTopRightOnSquareIcon className="h-6 w-6" />
        </a>
        <a
          href="mailto:kennynguyenx@gmail.com ?subject=Portfolio Inquiry"
          className="flex items-center gap-1"
        >
          Email
          <ArrowTopRightOnSquareIcon className="h-6 w-6" />
        </a>
      </div>

      <div className="mt-12 flex text-xl">
        <Link to="/projects" className="flex items-center gap-1">
          View my projects here.
          <ArrowLongRightIcon className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
