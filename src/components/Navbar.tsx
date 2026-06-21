import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personal } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrollProgress } from "../hooks/useScrollProgress";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.id));
  const progress = useScrollProgress();

  const handleNav = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Scroll progress bar */}
      <div className="h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-indigo via-blue to-teal transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <div className="px-4 pt-4 sm:px-6 lg:px-10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl glass px-4 py-3 shadow-[0_8px_30px_rgba(15,23,42,0.06)] sm:px-6">
          <button
            onClick={() => handleNav("hero")}
            className="font-display text-base font-bold tracking-tight text-ink"
          >
            VL<span className="text-indigo">.</span>
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNav(link.id)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active === link.id
                      ? "text-indigo"
                      : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-indigo-tint"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href={`mailto:${personal.email}`}
              className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition-transform hover:scale-[1.03] hover:bg-indigo"
            >
              Let's talk
            </a>
          </div>

          <button
            className="rounded-full p-2 text-ink md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-2 rounded-2xl glass p-4 shadow-lg md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium ${
                      active === link.id
                        ? "bg-indigo-tint text-indigo"
                        : "text-ink-soft"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href={`mailto:${personal.email}`}
                  className="block rounded-xl bg-ink px-4 py-3 text-center text-sm font-semibold text-paper"
                >
                  Let's talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
