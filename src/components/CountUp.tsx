import * as React from "react";
import { animate, useInView } from "framer-motion";

export function CountUp({
  from = 0,
  to,
  duration = 0.8,
  delay = 0,
  className = "",
  suffix = "",
  amount = 0.6, // how much needs to be visible before triggering
}: {
  from?: number;
  to: number;
  duration?: number;
  delay?: number;
  className?: string;
  suffix?: string;
  amount?: number;
}) {
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: false, amount }); // 👈 replay every time
  const [value, setValue] = React.useState(from);
  const controlsRef = React.useRef<ReturnType<typeof animate> | null>(null);

  React.useEffect(() => {
    // stop any in-flight animation
    controlsRef.current?.stop();

    if (isInView) {
      // reset to start, then animate to target
      setValue(from);
      controlsRef.current = animate(from, to, {
        duration,
        delay,
        ease: "easeOut",
        onUpdate: (v) => setValue(Math.round(v)),
      });
      return () => controlsRef.current?.stop();
    } else {
      // out of view → prep for next replay
      setValue(from);
    }
  }, [isInView, from, to, duration, delay]);

  return (
    <span ref={ref as any} className={`tabular-nums ${className}`} aria-live="polite">
      {value}
      {suffix}
    </span>
  );
}
