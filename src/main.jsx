// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./styles/globals.css";
import App from "./App.jsx";

gsap.registerPlugin(ScrollTrigger);

// ---- Detect low-end / enable reduced effects ----
const devMem = navigator.deviceMemory || 4;
const cores = navigator.hardwareConcurrency || 4;
const isTouch = matchMedia("(pointer: coarse)").matches;
const lowEndHeuristic = devMem <= 4 || cores <= 4 || isTouch;

// Optional: quick runtime FPS probe (0.6s)
let lowFPS = false;
{
  let frames = 0, start = performance.now();
  const tick = () => {
    frames++;
    const now = performance.now();
    if (now - start < 600) requestAnimationFrame(tick);
    else {
      const fps = (frames / (now - start)) * 1000;
      lowFPS = fps < 45;
      if (lowEndHeuristic || lowFPS) {
        document.documentElement.classList.add("reduced-effects");
        window.__LOW_END = true;
      } else {
        window.__LOW_END = false;
      }
    }
  };
  requestAnimationFrame(tick);
}

// ---- Smooth scroll (Lenis) ----
const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const low = () => window.__LOW_END || prefersReduce;

const lenis = new Lenis({
  duration: low() ? 0.5 : 0.9,
  easing: (t) => 1 - Math.pow(1 - t, 3),
  smoothWheel: true,
  smoothTouch: !low(),   // عالأجهزة الأضعف: off
  wheelMultiplier: low() ? 0.9 : 1.05,
  touchMultiplier: low() ? 0.9 : 1.1,
  gestureOrientation: "vertical",
});

// حرك Lenis بتوقيت GSAP
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);

// حدّث ScrollTrigger عند أي Scroll
lenis.on("scroll", ScrollTrigger.update);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
