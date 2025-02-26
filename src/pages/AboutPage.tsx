const AboutPage = () => {
  return (
    <main className="mt-12 flex flex-col gap-6">
      <div>
        <h1 className="text-sm uppercase tracking-widest text-zinc-500">
          About Me
        </h1>
        <p className="mt-4 md:w-4/5">
          I'm a full-stack developer based in Seattle with prior experience in the mobile gaming
          industry.
          <br />
          <br />
          In my free time, I enjoy making digital art and gaming. 3D modeling is
          one of my most recent hobbies. Feel free to reach out if you have any
          questions!
        </p>
      </div>
      <hr />
      <div>
        <h2 className="text-sm uppercase tracking-widest text-zinc-500">
          Education
        </h2>
        <div className="mt-4 flex flex-col gap-8">
          <div>
            <p className="font-semibold">University of Washington</p>
            <p>Master of Science in Information Management</p>
          </div>
          <div>
            <p className="font-semibold">University of Washington</p>
            <p>Bachelor of Science in Biology</p>
            <p className="mt-1 text-sm text-zinc-500">
              Concentration: Molecular, Cellular, and Developmental Biology
            </p>
          </div>
          <div>
            <p className="font-semibold">University of Washington</p>
            <p>Bachelor of Arts in Public Health</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
