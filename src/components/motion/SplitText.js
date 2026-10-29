"use client";

import { motion } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion";

// Word-by-word masked reveal (restored from the previous design). Screen
// readers get the whole text once, from the sr-only copy. The mask padding
// keeps descenders visible on tight line-heights.
export default function SplitText({
  text,
  as: Tag = "span",
  delay = 0,
  stagger = 0.045,
  duration = 0.9,
  className,
  style,
  id,
}) {
  const words = text.split(" ");

  return (
    <Tag id={id} className={className} style={style}>
      <span className="sr-only">{text}</span>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} aria-hidden="true">
          <motion.span
            style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", paddingBottom: "0.14em", marginBottom: "-0.14em" }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.span
              style={{ display: "inline-block" }}
              variants={{
                hidden: { y: "115%" },
                show: { y: "0%", transition: { duration, delay: delay + i * stagger, ease: EASE_PREMIUM } },
              }}
            >
              {word}
            </motion.span>
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
