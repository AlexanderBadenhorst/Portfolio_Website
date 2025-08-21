import { motion, useReducedMotion } from "framer-motion";

export default function BackgroundFX() {
  const reduce = useReducedMotion();
  const anim = (keyframes: number[], fallback = 0) =>
    reduce ? { y: fallback, x: 0 } : { y: keyframes, x: keyframes.map((v) => v * -0.66) };

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-60 dark:opacity-50"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, rgba(56,189,248,0.22), transparent 70%), radial-gradient(40% 40% at 100% 100%, rgba(147,197,253,0.22), transparent 70%)",
          }}
        />
      </div>

      <motion.div
        className="absolute -top-24 -right-16 h-[42vw] w-[42vw] rounded-full bg-cyan-400/20 blur-3xl"
        animate={anim([0, 28, 0])}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 h-[50vw] w-[50vw] rounded-full bg-indigo-400/20 blur-3xl"
        animate={anim([0, -20, 0])}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[28vw] w-[28vw] rounded-full bg-sky-300/10 blur-2xl"
        animate={reduce ? { scale: 1 } : { scale: [1, 1.06, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />

      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(100,116,139,.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(100,116,139,.35) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/50 dark:from-slate-950/70 dark:via-transparent dark:to-slate-950/80" />
    </div>
  );
}
