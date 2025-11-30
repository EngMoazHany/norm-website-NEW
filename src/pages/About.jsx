import { useEffect } from "react";
import "../styles/About.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const low = window.__LOW_END || reduce;

    gsap.defaults({ ease: "power2.out", duration: low ? 0.45 : 0.6 });

    const ctx = gsap.context(() => {
      // Reveal سريع وخفيف
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 85%",
          toggleActions: "play none none reverse",
          once: low, // على الأجهزة الضعيفة: مرة واحدة
        },
      });

      tl.from(".about-title", {
        y: 24, opacity: 0, immediateRender: false,
      }).from(".about-content p", {
        y: 12, opacity: 0, stagger: 0.08, immediateRender: false,
      }, "-=0.2").add(() => {
        gsap.set([".about-title", ".about-content p"], { clearProps: "transform,opacity" });
      });

      // Parallax: عطّله على الأجهزة الضعيفة/الموبايل
      if (!low && window.innerWidth >= 900) {
        gsap.set(".about-spot", { willChange: "transform" });
        gsap.to(".about-spot", {
          y: -60, ease: "none",
          scrollTrigger: {
            trigger: ".about-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
          onComplete: () => gsap.set(".about-spot", { willChange: "auto" }),
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-spot" aria-hidden="true" />
      <div className="about-content" dir="rtl">
        <h1 className="about-title">مــن نكــــون</h1>
        <p>شركة إنتاج إعلامي وفني تأسست عام 2024، تجمع بين التفكير الإبداعي والانضباط المهني، وتقدّم حلولًا إنتاجية بمعايير عالمية.</p>
        <p>نؤمن أن العمل الجيد لا يقتصر على الصورة بل يبدأ من الفكرة.</p>
        <p>في <strong>NORM</strong> نصغي بدقة، نحلّ احتياجاتك، نخطط بوعي، وننتج بجودة تليق بثقة شركائنا.</p>
      </div>
    </section>
  );
}
