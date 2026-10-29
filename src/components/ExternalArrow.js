"use client"
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

// Shared external-link affordance; the parent link needs the `group` class.
export default function ExternalArrow({ className = "" }) {
  return (
    <FiArrowUpRight
      className={`h-4 w-4 shrink-0 text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${className}`}
      aria-hidden="true"
    />
  );
}
