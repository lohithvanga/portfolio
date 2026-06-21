import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import Reveal from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { personal } from "../data/content";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const contactLinks = [
  { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: "Phone", value: `+91 ${personal.phone}`, href: `tel:+91${personal.phone}` },
  { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/lohithvanga1910", href: personal.linkedin },
  { icon: GithubIcon, label: "GitHub", value: "github.com/lohithvanga", href: personal.github },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please share your name.";
    if (!form.email.trim()) {
      next.email = "Please share an email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "That email doesn't look quite right.";
    }
    if (!form.message.trim()) next.message = "Add a short message.";
    else if (form.message.trim().length < 10) next.message = "A few more details would help — at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xeebjzpq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Failed");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      window.setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error(error);
      setStatus("idle");
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-paper py-28 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo/8 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-indigo">
            Contact
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Let's build something intelligent
          </h2>
          <p className="mt-4 text-ink-soft">
            Open to AI/ML research internships, software engineering roles, and collaborative projects.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal delay={0.05}>
            <div className="space-y-3">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-border-soft bg-paper-soft p-5 transition-all hover:-translate-y-0.5 hover:border-indigo/25 hover:bg-indigo-tint"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper text-indigo shadow-sm transition-transform group-hover:scale-110">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-ink-faint">{item.label}</p>
                    <p className="font-mono text-sm text-ink">{item.value}</p>
                  </div>
                </a>
              ))}

              <div className="flex items-center gap-4 rounded-2xl border border-dashed border-border-soft p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper-mist text-ink-soft">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs font-medium text-ink-faint">Based in</p>
                  <p className="text-sm text-ink">{personal.location}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="relative rounded-3xl border border-border-soft bg-paper-soft p-7 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.18)] sm:p-9"
            >
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-3xl bg-paper-soft/95 backdrop-blur-sm"
                  >
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-tint text-teal"
                    >
                      <CheckCircle2 size={32} />
                    </motion.div>
                    <p className="font-display text-lg font-bold text-ink">Message sent</p>
                    <p className="text-sm text-ink-soft">Thanks for reaching out — I'll reply soon.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-ink-soft">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    className={`w-full rounded-xl border bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint ${
                      errors.name ? "border-red-300" : "border-border-soft focus:border-indigo/50"
                    }`}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-ink-soft">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="you@example.com"
                    className={`w-full rounded-xl border bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint ${
                      errors.email ? "border-red-300" : "border-border-soft focus:border-indigo/50"
                    }`}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-ink-soft">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Tell me a bit about the role or project…"
                    className={`w-full resize-none rounded-xl border bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint ${
                      errors.message ? "border-red-300" : "border-border-soft focus:border-indigo/50"
                    }`}
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-all hover:bg-indigo disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <>
                      <motion.span
                        className="h-4 w-4 rounded-full border-2 border-paper/40 border-t-paper"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
