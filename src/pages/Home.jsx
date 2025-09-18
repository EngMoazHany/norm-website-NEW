// src/pages/Home.jsx
import { useEffect } from "react";
import "../styles/Home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.defaults({ ease: "power3.out", duration: 1 });

    const sections = [
      { wrap: ".hero", title: ".hero .hero-title", sub: ".hero .hero-subtitle-inline" },
      { wrap: ".insomnia-section", title: ".insomnia-section .hero-title", sub: ".insomnia-section .hero-subtitle-inline" },
    ];

    sections.forEach(({ wrap, title, sub }) => {
      gsap.timeline({
        scrollTrigger: { trigger: wrap, start: "top 85%", once: true }
      })
      .from(title, { y: 40, opacity: 0, immediateRender: false })
      .from(sub,   { y: 20, opacity: 0, immediateRender: false }, "-=0.35");
    });

    if (!reduce) {
      gsap.utils.toArray(".section-bg").forEach((el) => {
        gsap.to(el, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      });
    }

    // ===== تبديل العبارات في الهيرو بحركة طلوع/نزول ناعمة =====
    const heroSub = document.querySelector(".hero .hero-subtitle-inline");
    let tlSwap;
    if (heroSub && !reduce) {
      const phrases = [
        "حيث تجد لكل حكاية معيارها",
        "حيث نجد لكل حكاية معيارها",
        "نحن  تجد لكل حكاية معيارها",
      ];
      let i = 0;

      gsap.set(heroSub, { clearProps: "all" });

      tlSwap = gsap.to(heroSub, {
        y: -12,
        duration: 1.6,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        onRepeat: () => {
          i = (i + 1) % phrases.length;
          heroSub.textContent = phrases[i];
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(s => s.kill());
      if (tlSwap) tlSwap.kill();
    };
  }, []);

  return (
    <main className="home-page" dir="rtl">
      {/* SECTION 1: معيار الحكاية */}
      <section className="hero">
        <div className="section-bg bg-story" aria-hidden="true" />
        <div className="hero-heading hero-heading--inline">
          <h1 className="hero-title">معيـــار الحكايـــة</h1>
          <span className="hero-subtitle-inline">حيث تجد لكل حكاية معيارها</span>
          <Footer />
        </div>
      </section>

      {/* SECTION 2: لا ننام */}
      <section className="insomnia-section">
        <div className="section-bg bg-insomnia" aria-hidden="true" />
        <div className="hero-heading hero-heading--inline">
          <h1 className="hero-title">لا ننــام</h1>
          <span className="hero-subtitle-inline">مختلفون</span>
        </div>
      </section>
    </main>
  );
}
