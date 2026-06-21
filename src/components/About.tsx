import { motion } from "framer-motion";
import { Brain, Code2, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { aboutParagraphs } from "../data/content";

const pillars = [
  {
    icon: Brain,
    title: "AI & ML",
    desc: "Designing models that learn from data and generalize to the real world.",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    desc: "Shipping clean, scalable full-stack applications end to end.",
  },
  {
    icon: Sparkles,
    title: "Computer Vision",
    desc: "Turning pixels into structured, real-time understanding.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-paper-soft py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
              About
            </span>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Building with intention,
              <br />
              not just instruction.
            </h2>
            <div className="mt-8 space-y-3">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex items-start gap-4 rounded-2xl border border-transparent p-3 transition-colors hover:border-border-soft hover:bg-paper"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-tint text-indigo transition-transform group-hover:scale-110">
                    <p.icon size={20} />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-ink">{p.title}</p>
                    <p className="mt-0.5 text-sm text-ink-soft">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative rounded-3xl border border-border-soft bg-paper p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.15)] sm:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-lavender/15 blur-3xl" />
              <div className="space-y-5">
                {aboutParagraphs.map((p, i) => (
                  <p
                    key={i}
                    className={`leading-relaxed ${
                      i === 0
                        ? "text-lg font-medium text-ink"
                        : "text-base text-ink-soft"
                    }`}
                  >
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2 border-t border-border-soft pt-6">
                {["Malla Reddy Engineering College", "Secunderabad", "Class of 2027"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-paper-mist px-3 py-1.5 font-mono text-xs text-ink-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
