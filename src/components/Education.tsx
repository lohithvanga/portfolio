import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import { education } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="relative bg-paper py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10">
        <Reveal className="text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-indigo">
            Education
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Academic journey
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo via-teal to-lavender/40 sm:left-1/2 sm:-translate-x-1/2" />

          <ul className="space-y-10">
            {education.map((item, i) => {
              const isRight = i % 2 === 1;
              return (
                <li key={item.degree} className="relative">
                  <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10">
                    {/* Node, centered on the line for desktop */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 260, damping: 18, delay: i * 0.05 }}
                      className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-paper bg-indigo text-paper shadow-[0_4px_14px_rgba(79,70,229,0.35)] sm:left-1/2 sm:-translate-x-1/2"
                    >
                      <GraduationCap size={16} />
                    </motion.div>

                    {/* Left column slot */}
                    <div className={isRight ? "hidden sm:block" : "sm:pr-10"}>
                      {!isRight && (
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{ duration: 0.55, delay: i * 0.05 }}
                          className="ml-14 rounded-2xl border border-border-soft bg-paper-soft p-6 transition-all hover:-translate-y-1 hover:border-indigo/25 hover:shadow-[0_18px_40px_-20px_rgba(79,70,229,0.25)] sm:ml-0"
                        >
                          <EduCardContent item={item} />
                        </motion.div>
                      )}
                    </div>

                    {/* Right column slot */}
                    <div className={!isRight ? "hidden sm:block" : "sm:pl-10"}>
                      {isRight && (
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{ duration: 0.55, delay: i * 0.05 }}
                          className="ml-14 rounded-2xl border border-border-soft bg-paper-soft p-6 transition-all hover:-translate-y-1 hover:border-indigo/25 hover:shadow-[0_18px_40px_-20px_rgba(79,70,229,0.25)] sm:ml-0"
                        >
                          <EduCardContent item={item} />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function EduCardContent({ item }: { item: (typeof education)[number] }) {
  return (
    <>
      <span className="font-mono text-xs font-medium text-teal">{item.period}</span>
      <h3 className="font-display mt-1.5 text-lg font-bold text-ink">{item.degree}</h3>
      <p className="mt-1 text-sm text-ink-soft">{item.institution}</p>
      {item.detail && (
        <span className="mt-3 inline-block rounded-full bg-indigo-tint px-3 py-1 text-xs font-semibold text-indigo">
          {item.detail}
        </span>
      )}
    </>
  );
}
