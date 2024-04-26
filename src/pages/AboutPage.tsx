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
          I've always loved to be a generalist. Through a constant pursuit of
          knowledge, I am able to not only broaden the horizons of what I know,
          but also how I can empathize with others. The world becomes more
          vibrant when I get to experience it through different perspectives.
          <br />
          <br />
          After graduating college, I interned as a software engineer for a
          biotech start-up. Afterwards, I attended graduate school to learn more
          about the intersection of business and technology. I then landed a job
          as a UX designer at a multi-national corporation. After some time, I
          started to realize that bringing ideas to life felt more fulfilling
          than merely handing off the designs for them. So, now I'm back to
          focusing my career as a developer with the valuable experiences of a
          designer.
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
              Concentration: User Experience
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
