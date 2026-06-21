import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Mail } from "lucide-react";
import NodeField from "./NodeField";
import { personal, rotatingRoles } from "../data/content";

function useTypewriter(words: string[], typingSpeed = 55, pause = 1700) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    if (!deleting && text.length < current.length) {
      const timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
      return () => clearTimeout(timeout);
    }
    if (!deleting && text.length === current.length) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }
    if (deleting && text.length > 0) {
      const timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), typingSpeed / 1.6);
      return () => clearTimeout(timeout);
    }
    // deleting && text.length === 0: advance to next word on the following tick
    const timeout = setTimeout(() => {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }, 0);
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(rotatingRoles);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-paper pt-28 pb-20"
    >
      {/* Signature animated node graph */}
      <div className="absolute inset-0">
        <NodeField />
      </div>

      {/* Soft gradient wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(99,102,241,0.08),transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo/10 via-blue/10 to-teal/10 blur-3xl animate-blob" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-border-soft bg-paper-soft px-4 py-1.5 text-xs font-medium text-ink-soft"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
          </span>
          Open to AI/ML &amp; Software Engineering internships
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
        >
          Vanga Lohith
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-5 flex h-9 items-center font-mono text-lg text-indigo sm:text-xl"
        >
          <span className="text-ink-faint mr-2 select-none">&gt;</span>
          <span>{typed}</span>
          <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-indigo" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg"
        >
          {personal.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper shadow-[0_8px_24px_rgba(15,23,42,0.18)] transition-all hover:scale-[1.03] hover:bg-indigo hover:shadow-[0_10px_28px_rgba(79,70,229,0.3)]"
          >
            View Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </button>

          <a
            href={personal.resumeUrl}
            download
            className="group inline-flex items-center gap-2 rounded-full border border-border-soft bg-paper px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:scale-[1.03] hover:border-indigo/30 hover:bg-indigo-tint hover:text-indigo"
          >
            <Download size={16} />
            Download Resume
          </a>

          <button
            onClick={() => scrollTo("contact")}
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-ink-soft transition-all hover:text-indigo"
          >
            <Mail size={16} />
            Contact Me
          </button>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full border border-border-soft bg-paper-soft p-2.5 text-ink-faint transition-colors hover:text-indigo"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={18} />
      </motion.button>
    </section>
  );
}
