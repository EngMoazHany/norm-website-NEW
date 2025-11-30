import "../styles/vision.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Vision(){
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const low = window.__LOW_END || reduce;

    gsap.defaults({ ease: "power2.out", duration: low ? 0.45 : 0.9 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ".vision-content", start: "top 85%", once: low }
      });
      tl.from(".vision-title", { y: 28, opacity: 0, immediateRender: false })
        .from(".vision-content p", { y: 12, opacity: 0, stagger: 0.1, immediateRender: false }, "-=0.25")
        .add(() => gsap.set([".vision-title", ".vision-content p"], { clearProps: "transform,opacity" }));

      if (!low && window.innerWidth >= 900) {
        gsap.set([".vision-sun", ".v-vert", ".v-horz"], { willChange: "transform" });
        gsap.to(".vision-sun", {
          y: -70, ease: "none",
          scrollTrigger: { trigger: ".vision-section", start: "top bottom", end: "bottom top", scrub: 0.8 }
        });
        gsap.to(".v-vert", {
          y: -50, ease: "none",
          scrollTrigger: { trigger: ".vision-section", start: "top bottom", end: "bottom top", scrub: 0.8 }
        });
        gsap.to(".v-horz", {
          x: -50, ease: "none",
          scrollTrigger: { trigger: ".vision-section", start: "top bottom", end: "bottom top", scrub: 0.8 }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="vision" className="vision-section">
      <div className="vision-deco" aria-hidden="true">
        <div className="vision-sun"></div>
        <span className="v-line v-vert" />
        <span className="v-line v-horz" />
      </div>
      <div className="vision-content" dir="rtl">
        <h1 className="vision-title">رؤيتـنــــا</h1>
        <p>أن نكون مرجعًا مهنيًا في الإنتاج الإعلامي والفكري، يجمع بين الإبداع والجودة والانضباط.</p>
        <p>نطمح لبناء نموذج إنتاجي بمعايير عالمية، يعكس صوره الفكرة وصدق التنفيذ،ويمنح شركاءنا ثقة مستدامة.</p>
      </div>
    </section>
  );
}
