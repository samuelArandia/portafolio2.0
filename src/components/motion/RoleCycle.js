"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPause, FiPlay } from "react-icons/fi";
import { EASE_PREMIUM } from "@/lib/motion";
import { useMotionPaused, usePrefersReducedMotion } from "@/lib/motionPause";

// Rotating roles, restored from the previous hero. The box is one line tall so
// the swap never changes the layout height; reduced motion shows every role.
// `ready` holds the first role back until the page language is settled, so a
// visitor never sees the same role twice (once per language) on load.
export default function RoleCycle({ roles, ready = true, className, style, pauseLabel }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [paused, togglePaused] = useMotionPaused();
  const reduced = usePrefersReducedMotion();
  const rolesKey = roles.join("|");
  const still = paused || hovered || !ready;

  useEffect(() => {
    setIndex(0);
  }, [rolesKey]);

  useEffect(() => {
    if (still || reduced) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [rolesKey, roles.length, still, reduced]);

  return (
    <div className="flex items-center gap-2">
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
              {ready && (
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
              )}
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
