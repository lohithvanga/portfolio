import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { personal } from "../data/content";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer className="relative border-t border-border-soft bg-paper-soft py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between sm:px-8 lg:px-10">
          <p className="font-display text-sm font-bold text-ink">
            Vanga Lohith<span className="text-indigo">.</span>
          </p>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="text-ink-faint transition-colors hover:text-indigo"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="text-ink-faint transition-colors hover:text-indigo"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-ink-faint transition-colors hover:text-indigo"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>

          <p className="text-xs text-ink-faint">
            &copy; {new Date().getFullYear()} Vanga Lohith. Built with React &amp; Tailwind.
          </p>
        </div>
      </footer>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            onClick={scrollTop}
            className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper shadow-lg transition-colors hover:bg-indigo"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
