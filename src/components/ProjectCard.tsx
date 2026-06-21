import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/content";

const accentMap = {
  indigo: {
    grad: "from-indigo via-blue to-lavender",
    tint: "bg-indigo-tint",
    text: "text-indigo",
    glow: "rgba(79,70,229,0.18)",
  },
  teal: {
    grad: "from-teal via-blue to-indigo",
    tint: "bg-teal-tint",
    text: "text-teal",
    glow: "rgba(13,148,136,0.18)",
  },
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const accent = accentMap[project.accent];

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const background = useMotionTemplate`radial-gradient(420px circle at ${glowX}% ${glowY}%, ${accent.glow}, transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
    glowX.set(px * 100);
    glowY.set(py * 100);
    rotateX.set((0.5 - py) * 8);
    rotateY.set((px - 0.5) * 8);
  };

  const handleLeave = () => {
    setHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="gradient-border group relative overflow-hidden rounded-3xl border border-border-soft bg-paper p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.18)] sm:p-9"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background }}
        />

        <div className="relative" style={{ transform: "translateZ(30px)" }}>
          <div className="flex items-start justify-between gap-4">
            <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accent.grad} text-paper shadow-md`}>
              <span className="font-display text-sm font-bold">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <motion.div
              animate={{ rotate: hovered ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-ink-faint"
            >
              <ArrowUpRight size={22} />
            </motion.div>
          </div>

          <h3 className="font-display mt-6 text-2xl font-bold tracking-tight text-ink">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.highlights.map((h) => (
              <div
                key={h}
                className={`rounded-xl ${accent.tint} px-3.5 py-2 text-xs font-semibold ${accent.text}`}
              >
                {h}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2 border-t border-border-soft pt-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-paper-mist px-2.5 py-1 font-mono text-[11px] text-ink-soft"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
