"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPause, FiPlay } from "react-icons/fi";
import { EASE_PREMIUM } from "@/lib/motion";
import { useMotionPaused, usePrefersReducedMotion } from "@/lib/motionPause";

// Rotating roles, restored from the previous hero. The box is one line tall so
// the swap never changes the layout height; reduced motion shows every role.
export default function RoleCycle({ roles, className, style, pauseLabel }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [paused, togglePaused] = useMotionPaused();
  const reduced = usePrefersReducedMotion();
  const rolesKey = roles.join("|");
  const still = paused || hovered;

  useEffect(() => {
    setIndex(0);
  }, [rolesKey]);

  useEffect(() => {
    if (still || reduced) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [rolesKey, roles.length, still, reduced]);

  return (
    <div className="flex items-center gap-2.5">
      <span className="status-dot h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
      <p className="sr-only">{roles.join(", ")}</p>
      {reduced ? (
        <p aria-hidden="true" className={className} style={style}>{roles.join(" · ")}</p>
      ) : (
        <>
          <div
            aria-hidden="true"
            className={className}
            style={{ ...style, position: "relative", overflow: "hidden", height: "1.6em", lineHeight: "1.6em" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={index}
                initial={{ y: "60%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-60%", opacity: 0 }}
                transition={{ duration: 0.55, ease: EASE_PREMIUM }}
                style={{ display: "inline-block", whiteSpace: "nowrap" }}
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </div>
          <button
            type="button"
            onClick={togglePaused}
            aria-pressed={paused}
            aria-label={pauseLabel}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface hover:text-fg"
          >
            {paused ? <FiPlay className="h-3.5 w-3.5" aria-hidden="true" /> : <FiPause className="h-3.5 w-3.5" aria-hidden="true" />}
          </button>
        </>
      )}
    </div>
  );
}
