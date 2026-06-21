import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";
import { achievements, certifications, coreDomains } from "../data/content";

export default function CertificationsAndAchievements() {
  return (
    <section id="certifications" className="relative bg-paper-soft py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-lavender">
            Certifications &amp; Achievements
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Credentials that back the work
          </h2>
        </Reveal>

        {/* Certifications grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex items-center gap-4 rounded-2xl border border-border-soft bg-paper p-5 transition-all hover:-translate-y-1 hover:border-teal/30 hover:shadow-[0_18px_40px_-24px_rgba(13,148,136,0.3)]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-tint text-teal transition-transform group-hover:scale-110">
                <BadgeCheck size={20} />
              </div>
              <div>
                <p className="font-display text-sm font-bold text-ink">{cert.title}</p>
                <p className="font-mono text-xs text-ink-faint">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement stat cards */}
        <div className="mt-20 grid gap-5 sm:grid-cols-3">
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-border-soft bg-gradient-to-br from-paper to-paper-mist p-8 text-center"
            >
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-indigo/10 blur-2xl" />
              <p className="font-display text-4xl font-extrabold text-gradient sm:text-5xl">
                <AnimatedCounter value={item.value} />
              </p>
              <p className="mt-2 text-sm font-medium text-ink-soft">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Core domains */}
        <Reveal className="mt-16 text-center" delay={0.1}>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
            Core domains
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {coreDomains.map((domain) => (
              <span
                key={domain}
                className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-paper px-4 py-2 text-sm font-medium text-ink shadow-sm transition-colors hover:border-indigo/30 hover:text-indigo"
              >
                <Award size={14} className="text-indigo" />
                {domain}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
