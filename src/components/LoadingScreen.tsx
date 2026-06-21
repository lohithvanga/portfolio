import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-paper"
    >
      <div className="relative flex h-16 w-16 items-center justify-center">
        <motion.span
          className="absolute h-full w-full rounded-full border-2 border-indigo-tint"
        />
        <motion.span
          className="absolute h-full w-full rounded-full border-2 border-t-indigo border-r-indigo border-b-transparent border-l-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
        />
        <motion.span
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="h-2.5 w-2.5 rounded-full bg-indigo"
        />
      </div>
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-mono text-xs tracking-[0.25em] text-ink-faint"
      >
        VL.LOADING
      </motion.p>
    </motion.div>
  );
}
