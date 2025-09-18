// src/components/Footer.jsx
import { useEffect, useRef } from "react";
import "../styles/Footer.css";

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    // ابدأ مخفي
    el.classList.remove("partners-footer--visible");

    // السكشن الأول داخل صفحة الهوم
    // DOM: <section id="home"><main class="home-page"> <section class="hero">...</section> ...
    let firstSection =
      document.querySelector("#home .hero") ||
      document.querySelector(".home-page .hero") ||
      document.querySelector("#home section"); // fallback لو اتغيرت الكلاسات

    if (!firstSection) return;

    // observer يبيّن الفوتر فقط لما السكشن الأول يبقى ظاهر جزئياً
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("partners-footer--visible");
        } else {
          el.classList.remove("partners-footer--visible");
        }
      },
      {
        root: null,     // viewport
        threshold: 0.1, // لازم 10% من السكشن يبقى ظاهر
      }
    );

    observer.observe(firstSection);

    // فحص مبدئي لحالة التحميل
    const r = firstSection.getBoundingClientRect();
    const inView = r.bottom > 0 && r.top < window.innerHeight;
    if (inView) el.classList.add("partners-footer--visible");

    return () => observer.disconnect();
  }, []);

  const partners = [
    "toggl","YASHICA","Google","Coinbase",
    "YAMAHA","Splunk","Square","SQUARESPACE",
  ];

  return (
    <footer ref={footerRef} className="partners-footer">
      <div className="partners-badge">شركاء النجاح</div>
      <div className="partners-strip">
        <div className="partners-inner">
          {partners.map((p, i) => (
            <span key={i} className="partner">{p}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
