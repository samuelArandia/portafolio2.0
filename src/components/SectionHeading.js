"use client"
import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export default function SectionHeading({ title, titleId, children, className = "" }) {
  return (
    <Reveal y={16} amount={0.6} className={className}>
      <h2
        id={titleId}
        className="text-[clamp(2.25rem,5.5vw,4rem)] font-semibold leading-[1] tracking-[-0.04em]"
      >
        {title}
      </h2>
      {children && (
        <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-fg-2">{children}</p>
      )}
    </Reveal>
  );
}
