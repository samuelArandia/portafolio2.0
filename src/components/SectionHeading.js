"use client"
import React from "react";
import { Reveal } from "@/components/motion/Reveal";

// Index + measuring rule + title. On wide screens the ring sits on the page
// rail (see .page-rail), tying every section to the same vertical line.
export default function SectionHeading({ index, title, meta, titleId, children }) {
  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className="absolute -left-8 top-[calc(0.5rem-4px)] hidden h-2 w-2 -translate-x-1/2 rounded-full border border-accent bg-bg xl:block"
      />
      <div className="flex items-center gap-4" aria-hidden="true">
        <span className="font-mono text-xs text-accent">{index}</span>
        <span className="relative h-px flex-1 bg-line-strong">
          <span className="absolute right-0 top-1/2 h-2 w-px -translate-y-1/2 bg-line-strong" />
        </span>
        {meta && <span className="kicker">{meta}</span>}
      </div>
      <Reveal y={16} amount={0.6}>
        <h2
          id={titleId}
          className="mt-6 text-[clamp(2.125rem,5vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.035em]"
        >
          {title}
        </h2>
        {children && (
          <div className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-fg-2">
            {children}
          </div>
        )}
      </Reveal>
    </div>
  );
}
