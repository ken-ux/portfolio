const AboutPage = () => {
  return (
    <>
      <div>
        <h1 className="text-sm uppercase tracking-widest text-zinc-500">
          About Me
        </h1>
        <p className="mt-4 md:w-4/5">
          I'm a software developer based in Seattle, Washington. Previously, a
          UX designer in the gaming industry.
          <br />
          <br />
          After graduating college, I interned as a software engineer for a
          biotech start-up developing a laboratory management SaaS. Afterwards,
          I attended graduate school to learn more about the intersection of
          business and technology. During this time, I also worked at a research
          lab studying visualization tools and their use in understanding media.
          <br />
          <br />I then worked at a multi-national corporation designing the user
          experience for mobile games. While getting to know the technical side
          of game development, I realized that building apps felt more
          fulfilling to me than handing off the designs for them. A full-circle
          moment, but I'm now a full-stack developer bringing along the holistic
          insights of a designer in the tech industry.
        </p>
      </div>
      <hr />
      <div>
        <h2 className="text-sm uppercase tracking-widest text-zinc-500">
          Education
        </h2>
        <div className="mt-4 flex flex-col gap-8">
          <div>
            <p>University of Washington</p>
            <p>Master of Science in Information Management</p>
            <p className="mt-1 text-sm text-zinc-500">
              Concentration: Data Science
            </p>
          </div>
          <div>
            <p>University of Washington</p>
            <p>Bachelor of Science in Biology</p>
            <p className="mt-1 text-sm text-zinc-500">
              Concentration: Molecular, Cellular, and Developmental Biology
            </p>
          </div>
          <div>
            <p>University of Washington</p>
            <p>Bachelor of Arts in Public Health</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
