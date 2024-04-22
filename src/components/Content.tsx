import Project from "./Project";

const Content = () => {
  return (
    <>
      <h1>Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </>
  );
};

export default Content;
