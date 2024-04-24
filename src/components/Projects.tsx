import Project from "./Project";

const Projects = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2
        className="text-sm uppercase tracking-widest text-zinc-500"
        id="projects"
      >
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Projects;
