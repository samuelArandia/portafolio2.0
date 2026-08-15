"use client";

import { useEffect, useRef, useState } from "react";

const MAX_PARTICLES = 90;
const LINK_DIST2 = 1900;
const COLOR = "255,255,255";

export default function Cursor() {
  const canvasRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (fine && !reduced) setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2, vx: 0, vy: 0 };
    let lastX = pointer.x;
    let lastY = pointer.y;
    let hovering = false;
    const particles = [];

    function spawn() {
      const depth = Math.random();
      const angle = Math.random() * Math.PI * 2;
      const jitter = hovering ? 5 : 12;
      particles.push({
        x: pointer.x + (Math.random() - 0.5) * jitter,
        y: pointer.y + (Math.random() - 0.5) * jitter,
        vx: Math.cos(angle) * (0.15 + depth * 0.5) + pointer.vx * (0.04 + depth * 0.08),
        vy: Math.sin(angle) * (0.15 + depth * 0.5) + pointer.vy * (0.04 + depth * 0.08),
        depth,
        life: 0,
        maxLife: hovering ? 550 + Math.random() * 250 : 700 + Math.random() * 500,
        size: 0.7 + depth * 2,
        converge: hovering ? 0.16 : 0.018,
      });
      if (particles.length > MAX_PARTICLES) particles.shift();
    }

    function onMove(e) {
      pointer.vx = e.clientX - lastX;
      pointer.vy = e.clientY - lastY;
      lastX = pointer.x = e.clientX;
      lastY = pointer.y = e.clientY;

      const speed = Math.hypot(pointer.vx, pointer.vy);
      const count = hovering ? 3 : Math.min(4, 1 + Math.floor(speed / 6));
      for (let i = 0; i < count; i++) spawn();
    }

    function onOver(e) {
      if (e.target.closest("a, button, [data-cursor-hover]")) hovering = true;
    }
    function onOut(e) {
      if (e.target.closest("a, button, [data-cursor-hover]")) hovering = false;
    }

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.documentElement.classList.add("custom-cursor-active");

    let raf;
    let lastTime = performance.now();

    function tick(now) {
      const dt = Math.min(now - lastTime, 48);
      lastTime = now;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // ambient emission so the cloud stays alive even when the pointer rests
      if (Math.random() < (hovering ? 0.5 : 0.12)) spawn();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += dt;
        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }
        const step = dt / 16;
        p.vx += (pointer.x - p.x) * p.converge * step;
        p.vy += (pointer.y - p.y) * p.converge * step;
        p.vx *= 0.94;
        p.vy *= 0.94;
        p.x += p.vx * step;
        p.y += p.vy * step;
      }

      // constellation links between nearby particles
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < LINK_DIST2) {
            const alpha = (1 - dist2 / LINK_DIST2) * 0.16 * Math.min(a.depth, b.depth) + 0.015;
            ctx.strokeStyle = `rgba(${COLOR},${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        const t = p.life / p.maxLife;
        const fade = t < 0.15 ? t / 0.15 : 1 - (t - 0.15) / 0.85;
        const alpha = Math.max(0, fade) * (0.3 + p.depth * 0.7);
        ctx.beginPath();
        ctx.fillStyle = `rgba(${COLOR},${alpha})`;
        ctx.arc(p.x, p.y, p.size * (0.7 + fade * 0.3), 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 pointer-events-none mix-blend-difference"
      style={{ zIndex: 100 }}
    />
  );
}
