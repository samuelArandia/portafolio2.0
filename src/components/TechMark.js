"use client"
import React from "react";
import { tech, techStyle, monogram } from "@/lib/tech";

// A technology's brand mark, sized by the parent's font-size (1em square).
// Decorative: the technology name is always rendered next to it.
export default function TechMark({ name, className = "" }) {
  const entry = tech[name];
  const Icon = entry?.Icon;
  return (
    <span aria-hidden="true" className={`tech-mark inline-flex shrink-0 items-center justify-center ${className}`} style={techStyle(name)}>
      {Icon ? (
        <Icon className="h-[1em] w-[1em]" />
      ) : (
        // The box keeps the parent's 1em; only the letters are scaled down.
        <span className="flex h-[1em] w-[1em] items-center justify-center rounded-[22%] border-[1.5px] border-current">
          <span className="font-mono text-[0.4em] font-semibold leading-none">{monogram(name)}</span>
        </span>
      )}
    </span>
  );
}
