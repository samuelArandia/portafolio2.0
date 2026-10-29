"use client"
import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";

export default function SectionHeading({ title, titleId, children, className = "" }) {
  return (
    <div className={className}>
      <SplitText
        as="h2"
        id={titleId}
        text={title}
        stagger={0.06}
        className="block text-[clamp(2.25rem,5.5vw,4rem)] font-semibold leading-[1] tracking-[-0.04em]"
      />
      {children && (
        <Reveal y={16} amount={0.6} delay={0.15}>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-fg-2">{children}</p>
        </Reveal>
      )}
    </div>
  );
}
