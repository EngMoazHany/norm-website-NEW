import { useEffect } from "react";
import "../styles/About.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!reduce) {
      // ✅ أنيميشن أسرع + دخول مباشر
      gsap.defaults({ ease: "power2.out", duration: 0.6 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 85%", // يبدأ أسرع (قريب من الدخول)
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".about-title", {
        y: 30,
        opacity: 0,
        immediateRender: false,
        duration: 0.5, // أسرع من الأول
      }).from(
        ".about-content p",
        {
          y: 15,
          opacity: 0,
          stagger: 0.1, // أسرع في التتابع
          duration: 0.45,
          immediateRender: false,
        },
        "-=0.25"
      );

      gsap.to(".about-spot", {
        y: -60, // حركة أهدى شوية
        ease: "none",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8, // أسرع في الاستجابة
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-spot" aria-hidden="true" />

      <div className="about-content" dir="rtl">
        <h1 className="about-title">مــن نكــــون</h1>

        <p>
          شركة إنتاج إعلامي وفني تأسست عام 2024، تجمع بين التفكير الإبداعي
          والانضباط المهني، وتقدّم حلولًا إنتاجية بمعايير عالمية.
        </p>
        <p>نؤمن أن العمل الجيد لا يقتصر على الصورة بل يبدأ من الفكرة.</p>
        <p>
          في <strong>NORM</strong> نصغي بدقة، نحلّ احتياجاتك، نخطط بوعي،
          وننتج بجودة تليق بثقة شركائنا.
        </p>
      </div>
    </section>
  );
}
