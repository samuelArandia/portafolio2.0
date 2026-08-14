"use client";

import { motion } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion";

export default function SplitText({
  text,
  as: Tag = "span",
  delay = 0,
  stagger = 0.045,
  duration = 0.9,
  className,
  style,
}) {
  const words = text.split(" ");

  return (
    <Tag className={className} style={style}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <motion.span
            style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
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
