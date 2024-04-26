const Skills = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-sm uppercase tracking-widest text-zinc-500">
        Skills
      </h2>

      <div>
        <h3 className="text-sm uppercase tracking-widest text-zinc-500">
          Programming Languages
        </h3>
        <ul className="mt-1 flex flex-wrap gap-2 text-sm *:rounded *:bg-zinc-500 *:px-2 *:py-1 *:text-zinc-50">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Python</li>
          <li>R</li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm uppercase tracking-widest text-zinc-500">
          Frameworks and Libraries
        </h3>
        <ul className="mt-1 flex flex-wrap gap-2 text-sm *:rounded *:bg-zinc-500 *:px-2 *:py-1 *:text-zinc-50">
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Next.js</li>
          <li>Pug</li>
          <li>Jest</li>
          <li>React Testing Library</li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm uppercase tracking-widest text-zinc-500">
          Utility
        </h3>
        <ul className="mt-1 flex flex-wrap gap-2 text-sm *:rounded *:bg-zinc-500 *:px-2 *:py-1 *:text-zinc-50">
          <li>MongoDB</li>
          <li>Git</li>
          <li>Vite</li>
          <li>Shell Script</li>
          <li>Netlify</li>
          <li>Vercel</li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm uppercase tracking-widest text-zinc-500">
          Design
        </h3>
        <ul className="mt-1 flex flex-wrap gap-2 text-sm *:rounded *:bg-zinc-500 *:px-2 *:py-1 *:text-zinc-50">
          <li>Ant Design</li>
          <li>Bootstrap</li>
          <li>MUI</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
