import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skillGroups } from "../data/content";

const accentByIndex = [
  { tint: "bg-indigo-tint", text: "text-indigo", ring: "hover:border-indigo/30" },
  { tint: "bg-blue-tint", text: "text-blue", ring: "hover:border-blue/30" },
  { tint: "bg-teal-tint", text: "text-teal", ring: "hover:border-teal/30" },
  { tint: "bg-lavender-tint", text: "text-lavender", ring: "hover:border-lavender/30" },
  { tint: "bg-indigo-tint", text: "text-indigo", ring: "hover:border-indigo/30" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-paper-soft py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-indigo">
            Skills
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            A toolkit built for AI products
          </h2>
          <p className="mt-4 text-ink-soft">
            From model training to production deployment — the languages, frameworks, and tools I reach for.
          </p>
        </Reveal>

        <div className="mt-16 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => {
            const accent = accentByIndex[gi % accentByIndex.length];
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: gi * 0.06 }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-soft bg-paper p-6 transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.2)] ${accent.ring} ${
                  gi === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full ${accent.tint} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70`}
                />
                <div className="relative flex h-full flex-col">
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${accent.tint} ${accent.text} font-display text-sm font-bold`}>
                    {String(gi + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display mt-4 text-lg font-bold text-ink">{group.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{group.blurb}</p>

                  <div className="mt-5 flex flex-1 flex-wrap content-start gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-border-soft bg-paper-mist px-2.5 py-1.5 font-mono text-xs text-ink-soft transition-colors group-hover:border-transparent group-hover:bg-paper-soft group-hover:text-ink"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
