"use client";

import React from "react";
import { motion } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion";

const c = {
  keyword: "#7aa2f7",
  type: "#5fc9b3",
  func: "#e5c07b",
  comment: "rgba(255, 255, 255, 0.38)",
  plain: "rgba(255, 255, 255, 0.72)",
  decorator: "var(--accent-primary)",
};

function K({ children }) { return <span style={{ color: c.keyword }}>{children}</span>; }
function T({ children }) { return <span style={{ color: c.type }}>{children}</span>; }
function F({ children }) { return <span style={{ color: c.func }}>{children}</span>; }
function D({ children }) { return <span style={{ color: c.decorator, fontWeight: 600 }}>{children}</span>; }
function C({ children }) { return <span style={{ color: c.comment, fontStyle: "italic" }}>{children}</span>; }

function Line({ children }) {
  return (
    <div className="whitespace-pre" style={{ color: c.plain }}>
      {children ?? " "}
    </div>
  );
}

const lines = [
  <Line key="1"><D>@Service</D></Line>,
  <Line key="2"><D>@RequiredArgsConstructor</D></Line>,
  <Line key="3"><K>public class</K> <T>ArchitectureService</T> {"{"}</Line>,
  <Line key="4" />,
  <Line key="5">{"    "}<K>private final</K> <T>RepositoryPort</T> repo;</Line>,
  <Line key="6" />,
  <Line key="7">{"    "}<D>@Transactional</D></Line>,
  <Line key="8">{"    "}<K>public</K> <T>Solution</T> <F>solve</F>(<T>Problem</T> problem) {"{"}</Line>,
  <Line key="9">{"        "}<K>var</K> design = <F>think</F>(problem);</Line>,
  <Line key="10">{"        "}<K>return</K> <F>ship</F>(design);</Line>,
  <Line key="11">{"    "}{"}"}</Line>,
  <Line key="12" />,
  <Line key="13">{"    "}<D>@Async</D></Line>,
  <Line key="14">{"    "}<K>private</K> <T>Solution</T> <F>ship</F>(<T>Design</T> design) {"{"}</Line>,
  <Line key="15">{"        "}<K>return</K> <K>new</K> <T>Solution</T>(<K>true</K>);</Line>,
  <Line key="16">{"    "}{"}"}</Line>,
  <Line key="17" />,
  <Line key="18">{"    "}<C>{"// siempre listo para el próximo desafío"}</C></Line>,
  <Line key="19">{"}"}</Line>,
];

export default function CodeWindow({ className, style }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: EASE_PREMIUM }}
    >
      <div
        className="rounded-2xl overflow-hidden border"
        style={{
          background: "#0a1420",
          borderColor: "rgba(255, 255, 255, 0.08)",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.35), 0 2px 8px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-4 px-4 py-3 border-b"
          style={{ background: "rgba(255, 255, 255, 0.03)", borderColor: "rgba(255, 255, 255, 0.06)" }}
        >
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f56" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#27c93f" }} />
          </div>
          <span className="font-mono text-[11px]" style={{ color: "rgba(255, 255, 255, 0.4)" }}>
            ArchitectureService.java
          </span>
        </div>

        {/* Code body */}
        <div className="px-5 py-5 sm:px-6 sm:py-6 font-mono text-[11.5px] sm:text-[12.5px] leading-[1.85] overflow-x-auto">
          {lines}
        </div>
      </div>
    </motion.div>
  );
}
