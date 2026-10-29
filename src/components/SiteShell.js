"use client"
import React, { useEffect, useRef } from "react";
import { MotionConfig } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { LanguageProvider, useLanguage } from "@/i18n/LanguageContext";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Cursor from "@/components/motion/Cursor";
import { scrollToSection } from "@/components/motion/scrollToSection";
import { useMotionPaused } from "@/lib/motionPause";

function SkipLink() {
  const { t } = useLanguage();
  return <a href="#contenido" className="skip-link">{t('header.skip')}</a>;
}

// Standalone routes reuse the home sections, whose visible titles are h2s;
// this gives each route its own h1 without skipping heading levels.
function RouteTitle({ titleKey }) {
  const { t } = useLanguage();
  return <h1 className="sr-only">{t(titleKey)} — Samuel Arandia</h1>;
}

// A deep link (/#proyecto-2, or a header link from another route) is resolved
// by the browser before hydration, while reveal transforms are still applied
// and before the locale may switch to English and reflow the page. Re-anchor
// once the layout settles; later locale toggles leave the reader where they are.
function InitialHashScroll() {
  const { locale } = useLanguage();
  const settled = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => { settled.current = true; }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (settled.current) return undefined;
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return undefined;
    const frame = requestAnimationFrame(() => scrollToSection(id, { immediate: true }));
    return () => cancelAnimationFrame(frame);
  }, [locale]);

  return null;
}

// The static HTML carries the Spanish <title> from page metadata; keep the tab
// title in the visitor's language once the locale is known.
function DocumentTitle({ routeTitleKey, titleKey }) {
  const { t } = useLanguage();
  useEffect(() => {
    if (titleKey) document.title = t(titleKey);
    else if (routeTitleKey) document.title = `${t(routeTitleKey)} | Samuel Arandia`;
    else document.title = t('meta.homeTitle');
  }, [t, routeTitleKey, titleKey]);
  return null;
}

// Mirrors the "pause animations" switch on <html> so CSS loops (stack
// marquees, status dot) can stop too.
function MotionPauseSync() {
  const [paused] = useMotionPaused();
  useEffect(() => {
    document.documentElement.dataset.motionPaused = paused ? "true" : "false";
  }, [paused]);
  return null;
}

// Shared frame for every route: theme-aware backdrop, header, footer, and the
// motion providers. framer-motion animations follow prefers-reduced-motion.
export default function SiteShell({ children, routeTitleKey, titleKey }) {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <SkipLink />
        <InitialHashScroll />
        <MotionPauseSync />
        <DocumentTitle routeTitleKey={routeTitleKey} titleKey={titleKey} />
        <div className="backdrop" aria-hidden="true">
          <div className="backdrop__fade">
            <div className="backdrop__grid" />
          </div>
        </div>
        <Cursor />
        <SmoothScroll>
          <Header />
          <div className="relative">
            <div className="page-tone" aria-hidden="true" />
            <main id="contenido" tabIndex={-1} className="focus:outline-none">
              {routeTitleKey && <RouteTitle titleKey={routeTitleKey} />}
              {children}
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      </MotionConfig>
    </LanguageProvider>
  );
}
