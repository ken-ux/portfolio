import Project from "./Project";
import url from "../assets/project_thumbnails/members_only.png";

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
        <Project imageUrl={url} links={links} tags={tags} />
        <Project imageUrl={url} links={links} tags={tags} />
        <Project imageUrl={url} links={links} tags={tags} />
        <Project imageUrl={url} links={links} tags={tags} />
        <Project imageUrl={url} links={links} tags={tags} />
      </div>
    </div>
  );
};

export default Projects;
