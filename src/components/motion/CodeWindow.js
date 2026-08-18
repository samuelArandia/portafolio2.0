"use client";

import React from "react";
import { motion } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion";

const c = {
  keyword: "#7aa2f7",
  type: "#5fc9b3",
  string: "#e0a458",
  func: "#e5c07b",
  comment: "rgba(255, 255, 255, 0.38)",
  plain: "rgba(255, 255, 255, 0.72)",
  decorator: "var(--accent-primary)",
};

function K({ children }) { return <span style={{ color: c.keyword }}>{children}</span>; }
function T({ children }) { return <span style={{ color: c.type }}>{children}</span>; }
function S({ children }) { return <span style={{ color: c.string }}>{children}</span>; }
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
  <Line key="1"><K>import</K> {"{ Injectable }"} <K>from</K></Line>,
  <Line key="2">{"  "}<S>{"'@nestjs/common'"}</S>;</Line>,
  <Line key="3" />,
  <Line key="4"><D>@Injectable()</D></Line>,
  <Line key="5"><K>export</K> <K>class</K> <T>SamuelArandia</T> {"{"}</Line>,
  <Line key="6">{"  "}<K>private readonly</K> stack = [</Line>,
  <Line key="7">{"    "}<S>{"'TypeScript'"}</S>, <S>{"'NestJS'"}</S>,</Line>,
  <Line key="8">{"    "}<S>{"'Next.js'"}</S>,</Line>,
  <Line key="9">{"  "}];</Line>,
  <Line key="10" />,
  <Line key="11">{"  "}<K>async</K> <F>solve</F>(</Line>,
  <Line key="12">{"    "}problem: <T>Challenge</T>,</Line>,
  <Line key="13">{"  "}): <T>Promise</T>{"<"}<T>Architecture</T>{">"} {"{"}</Line>,
  <Line key="14">{"    "}<K>const</K> design = <K>await</K> <K>this</K>.<F>think</F>(problem);</Line>,
  <Line key="15">{"    "}<K>return</K> <K>this</K>.<F>ship</F>(design);</Line>,
  <Line key="16">{"  "}{"}"}</Line>,
  <Line key="17" />,
  <Line key="18">{"  "}<D>@Available()</D></Line>,
  <Line key="19">{"  "}<K>private</K> <F>ship</F>(design: <T>Architecture</T>) {"{"}</Line>,
  <Line key="20">{"    "}<K>return</K> {"{ inProduction: "}<K>true</K>{" };"}</Line>,
  <Line key="21">{"  "}{"}"}</Line>,
  <Line key="22"><C>{"  // siempre listo para el próximo desafío"}</C></Line>,
  <Line key="23">{"}"}</Line>,
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
            samuel.service.ts
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
