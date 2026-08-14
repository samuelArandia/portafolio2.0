"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const TAGS = { button: motion.button, a: motion.a, div: motion.div };

export default function MagneticButton({
  children,
  as = "button",
  strength = 0.3,
  className,
  style,
  onClick,
  ...rest
}) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(fine && !reduced);
  }, []);

  const handleMove = useCallback(
    (e) => {
      if (!enabled || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      setOffset({ x, y });
    },
    [enabled, strength]
  );

  const handleLeave = useCallback(() => setOffset({ x: 0, y: 0 }), []);

  const Comp = TAGS[as] || motion.button;

  return (
    <Comp
      ref={ref}
      className={className}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.2 }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
