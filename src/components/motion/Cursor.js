"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Loose point-cloud of particles trailing the pointer, each with its own
// spring lag/offset so the cluster reads as a small 3D-ish cloud rather
// than a single dot — inspired by point-cloud "materializing" loaders.
const PARTICLES = [
  { dx: 0, dy: 0, size: 5, stiffness: 900, damping: 40, opacity: 1 },
  { dx: 10, dy: -6, size: 3, stiffness: 220, damping: 26, opacity: 0.85 },
  { dx: -12, dy: 4, size: 2.5, stiffness: 180, damping: 24, opacity: 0.7 },
  { dx: 6, dy: 12, size: 3.5, stiffness: 150, damping: 22, opacity: 0.75 },
  { dx: -8, dy: -10, size: 2, stiffness: 130, damping: 20, opacity: 0.55 },
  { dx: 14, dy: 8, size: 2, stiffness: 110, damping: 20, opacity: 0.45 },
  { dx: -16, dy: -2, size: 2.5, stiffness: 95, damping: 18, opacity: 0.4 },
  { dx: 2, dy: -16, size: 1.5, stiffness: 80, damping: 18, opacity: 0.3 },
];

function Particle({ x, y, config, scale }) {
  const px = useSpring(x, { stiffness: config.stiffness, damping: config.damping, mass: 0.4 });
  const py = useSpring(y, { stiffness: config.stiffness, damping: config.damping, mass: 0.4 });

  return (
    <motion.span
      className="fixed top-0 left-0 rounded-full pointer-events-none mix-blend-difference bg-white"
      style={{
        x: px,
        y: py,
        translateX: `calc(-50% + ${config.dx}px)`,
        translateY: `calc(-50% + ${config.dy}px)`,
        width: config.size,
        height: config.size,
        opacity: config.opacity,
        scale,
        zIndex: 100,
      }}
    />
  );
}

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const scaleMv = useMotionValue(1);
  const scale = useSpring(scaleMv, { stiffness: 300, damping: 22 });

  useEffect(() => {
    scaleMv.set(hovering ? 1.9 : 1);
  }, [hovering, scaleMv]);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return undefined;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover]")) setHovering(true);
    };
    const out = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover]")) setHovering(false);
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, [x, y]);

  const particles = useMemo(() => PARTICLES, []);

  if (!enabled) return null;

  return (
    <>
      {particles.map((config, i) => (
        <Particle key={i} x={x} y={y} config={config} scale={scale} />
      ))}
    </>
  );
}
