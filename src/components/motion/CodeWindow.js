"use client";

import React from "react";

// The panel stays dark in both themes, like an editor, so syntax colors are fixed.
const c = {
  keyword: "#7aa2f7",
  type: "#5fc9b3",
  func: "#e5c07b",
  comment: "rgba(231, 239, 235, 0.45)",
  plain: "rgba(231, 239, 235, 0.78)",
  decorator: "#3ccb72",
};

function K({ children }) { return <span style={{ color: c.keyword }}>{children}</span>; }
function T({ children }) { return <span style={{ color: c.type }}>{children}</span>; }
function F({ children }) { return <span style={{ color: c.func }}>{children}</span>; }
function D({ children }) { return <span style={{ color: c.decorator, fontWeight: 600 }}>{children}</span>; }
function C({ children }) { return <span style={{ color: c.comment, fontStyle: "italic" }}>{children}</span>; }

function Line({ children }) {
  return (
    <div className="whitespace-pre" style={{ color: c.plain }}>
      {children ?? " "}
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

export default function CodeWindow({ className }) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-md border border-line-strong" style={{ background: "#0d1619" }}>
        <div
          className="border-b px-4 py-2.5 font-mono text-[0.6875rem]"
          style={{ borderColor: "rgba(205, 228, 220, 0.1)", color: "rgba(231, 239, 235, 0.55)" }}
        >
          ArchitectureService.java
        </div>
        <div className="overflow-x-auto px-5 py-5 font-mono text-[0.75rem] leading-[1.85] sm:text-[0.8125rem]">
          {lines}
        </div>
      </div>
      <figcaption className="mt-2.5 flex items-center justify-between font-mono text-[0.6875rem] text-muted">
        <span>Spring Boot</span>
        <span>Java</span>
      </figcaption>
    </figure>
  );
}
