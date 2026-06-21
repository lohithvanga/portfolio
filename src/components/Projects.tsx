import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="relative bg-paper py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
            Projects
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 text-ink-soft">
            Two builds that pair applied machine learning with production-minded engineering.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-7 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
