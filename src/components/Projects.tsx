import Project from "./Project";
import members_only_thumbnail from "../assets/project_thumbnails/members_only.gif";
import inventory_app_thumbnail from "../assets/project_thumbnails/inventory_application.gif";
import calculator_thumbnail from "../assets/project_thumbnails/calculator.png";
import tic_tac_toe_thumbnail from "../assets/project_thumbnails/tic_tac_toe.png";

const Projects = () => {
  const links: string[] = ["Github Repo", "Live"];
  const tags: string[] = ["HTML", "CSS", "JavaScript", "React", "MongoDB"];

  return (
    <div className="flex flex-col gap-4">
      <h2
        className="text-sm uppercase tracking-widest text-zinc-500"
        id="projects"
      >
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-4">
        <Project imageUrl={members_only_thumbnail} links={links} tags={tags} />
        <Project imageUrl={inventory_app_thumbnail} links={links} tags={tags} />
        <Project imageUrl={calculator_thumbnail} links={links} tags={tags} />
        <Project imageUrl={tic_tac_toe_thumbnail} links={links} tags={tags} />
      </div>
    </div>
  );
};

export default Projects;
