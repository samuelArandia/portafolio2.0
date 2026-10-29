"use client";

import React from "react";

// The panel stays dark in both themes, like an editor. Every token color is
// at least 6.5:1 against the panel background (#0d1619).
const c = {
  keyword: "#7aa2f7",
  type: "#5fc9b3",
  func: "#e5c07b",
  string: "#e9a47a",
  annotation: "#3ccb72",
  comment: "rgba(231, 239, 235, 0.62)",
  plain: "rgba(231, 239, 235, 0.86)",
};

const K = ({ children }) => <span style={{ color: c.keyword }}>{children}</span>;
const T = ({ children }) => <span style={{ color: c.type }}>{children}</span>;
const F = ({ children }) => <span style={{ color: c.func }}>{children}</span>;
const S = ({ children }) => <span style={{ color: c.string }}>{children}</span>;
const A = ({ children }) => <span style={{ color: c.annotation }}>{children}</span>;
const C = ({ children }) => <span style={{ color: c.comment, fontStyle: "italic" }}>{children}</span>;

// A small Spring Boot REST controller: validate, persist, publish an event.
const lines = [
  <><A>@RestController</A></>,
  <><A>@RequestMapping</A>(<S>{'"/api/v1/projects"'}</S>)</>,
  <><A>@RequiredArgsConstructor</A></>,
  <><K>public class</K> <T>ProjectController</T> {"{"}</>,
  null,
  <>{"    "}<K>private final</K> <T>ProjectService</T> projects;</>,
  <>{"    "}<K>private final</K> <T>EventPublisher</T> events;</>,
  null,
  <>{"    "}<A>@PostMapping</A></>,
  <>{"    "}<K>public</K> <T>ResponseEntity</T>{"<"}<T>ProjectDto</T>{">"} <F>create</F>(</>,
  <>{"        "}<A>@Valid</A> <A>@RequestBody</A> <T>NewProject</T> req) {"{"}</>,
  <>{"        "}<K>var</K> p = projects.<F>create</F>(req);</>,
  <>{"        "}events.<F>publish</F>(<T>ProjectCreated</T>.<F>of</F>(p));</>,
  <>{"        "}<K>return</K> <T>ResponseEntity</T>.<F>ok</F>(p);</>,
  <>{"    "}{"}"}</>,
  null,
  <>{"    "}<C>{"// siempre listo para el próximo desafío"}</C></>,
  <>{"}"}</>,
];

export default function CodeWindow({ className, label }) {
  return (
    <figure className={`min-w-0 ${className || ""}`}>
      <div className="overflow-hidden rounded-lg border border-line-strong" style={{ background: "#0d1619", boxShadow: "var(--shadow)" }}>
        <div className="flex items-center justify-between border-b px-4" style={{ borderColor: "rgba(205, 228, 220, 0.1)" }}>
          <span
            className="-mb-px border-b-2 py-2.5 font-mono text-[0.6875rem]"
            style={{ borderColor: "#3ccb72", color: "rgba(231, 239, 235, 0.86)" }}
          >
            ProjectController.java
          </span>
          <span className="font-mono text-[0.6875rem]" style={{ color: "rgba(231, 239, 235, 0.62)" }}>
            Spring Boot
          </span>
        </div>
        {/* Scrollable on narrow screens; focusable so keyboard users can scroll it */}
        <pre
          tabIndex={0}
          aria-label={label}
          className="overflow-x-auto py-4 font-mono text-[0.6875rem] leading-[1.8] focus-visible:outline-offset-[-2px] sm:text-[0.8125rem] lg:text-[0.6875rem] xl:text-[0.75rem]"
        >
          <code className="grid min-w-max grid-cols-[auto_1fr]">
            {lines.map((line, i) => (
              <React.Fragment key={i}>
                <span aria-hidden="true" className="select-none pl-3 pr-3 text-right" style={{ color: "rgba(231, 239, 235, 0.45)" }}>
                  {i + 1}
                </span>
                <span className="pr-4" style={{ color: c.plain }}>{line ?? " "}</span>
              </React.Fragment>
            ))}
          </code>
        </pre>
      </div>
    </figure>
  );
}
