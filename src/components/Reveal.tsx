import * as React from "react";
import { motion, useInView } from "framer-motion";

export function Reveal({
  children,
  y = 12,
  duration = 0.5,
  delay = 0,
  amount = 0.35, // percent of element that must be visible
  className = "",
}: {
  children: React.ReactNode;
  y?: number;
  duration?: number;
  delay?: number;
  amount?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: false, amount });

  return (
    <motion.div
      ref={ref as any}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration, delay } },
      }}
    >
      {children}
    </motion.div>
  );
}
