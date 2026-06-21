import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const numericMatch = value.match(/[\d.]+/);
  const numeric = numericMatch ? parseFloat(numericMatch[0]) : null;
  const suffix = numeric !== null ? value.replace(numericMatch![0], "") : "";
  const decimals = numeric !== null && numericMatch![0].includes(".") ? numericMatch![0].split(".")[1].length : 0;

  const [display, setDisplay] = useState(numeric === null ? value : "0");

  useEffect(() => {
    if (!inView || numeric === null) return;

    const duration = 1200;
    const startTime = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay((numeric * eased).toFixed(decimals));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplay(numeric.toFixed(decimals));
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, numeric, decimals]);

  return (
    <motion.span ref={ref}>
      {display}
      {suffix}
    </motion.span>
  );
}
