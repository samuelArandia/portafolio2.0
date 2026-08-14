"use client";

import { motion } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.9,
  once = true,
  amount = 0.3,
  className,
  style,
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE_PREMIUM }}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({ children, stagger = 0.1, delay = 0, once = true, amount = 0.2, className }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, y = 22, duration = 0.8, className, style }) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration, ease: EASE_PREMIUM } },
      }}
    >
      {children}
    </motion.div>
  );
}
