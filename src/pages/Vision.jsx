import "../styles/vision.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Vision(){
  useEffect(() => {
    gsap.defaults({ ease: "power3.out", duration: 1 });

    // ظهور العنوان والنصوص
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ".vision-content", start: "top 80%" }
    });
    tl.from(".vision-title", { y: 40, opacity: 0, immediateRender: false })
      .from(".vision-content p", { y: 20, opacity: 0, stagger: 0.15, immediateRender: false }, "-=0.3");

    // Parallax خفيف للدائرة والخطوط
    gsap.to(".vision-sun", {
      y: -70, ease: "none",
      scrollTrigger: { trigger: ".vision-section", start: "top bottom", end: "bottom top", scrub: 1.2 }
    });
    gsap.to(".v-vert", {
      y: -50, ease: "none",
      scrollTrigger: { trigger: ".vision-section", start: "top bottom", end: "bottom top", scrub: 1.2 }
    });
    gsap.to(".v-horz", {
      x: -50, ease: "none",
      scrollTrigger: { trigger: ".vision-section", start: "top bottom", end: "bottom top", scrub: 1.2 }
    });

    return () => ScrollTrigger.getAll().forEach(s => s.kill());
  }, []);

  return (
    <section id="vision" className="vision-section">
      {/* الديكور يمين كخلفية */}
      <div className="vision-deco" aria-hidden="true">
        <div className="vision-sun"></div>
        <span className="v-line v-vert" />
        <span className="v-line v-horz" />
      </div>

      {/* المحتوى يمين – ثابت ومافيش تداخل */}
      <div className="vision-content" dir="rtl">
        <h1 className="vision-title">رؤيتـنــــا</h1>
        <p>أن نكون مرجعًا مهنيًا في الإنتاج الإعلامي والفكري، يجمع بين الإبداع والجودة والانضباط.</p>
        <p>نطمح لبناء نموذج إنتاجي بمعايير عالمية، يعكس صوره الفكرة وصدق التنفيذ،ويمنح شركاءنا ثقة مستدامة.</p>
      </div>
    </section>
  );
}
