import { useEffect, useRef } from "react";
import "../styles/navbar.css";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;

  gsap.to(window, {
    duration: 1.2,          // مدة الحركة (ثانية)
    scrollTo: {
      y: el,
      offsetY: 90           // تعويض ارتفاع النافبار
    },
    ease: "power2.inOut"    // منحنى الحركة
  });
}

const links = [
  { id: "home", label: "الرئيسية" },
  { id: "about", label: "من نحن" },
  { id: "vision", label: "رؤيتنا" },
  { id: "services", label: "خدماتنا" },
  { id: "team", label: "فريقنا" },
];

export default function Navbar() {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
  }, []);

  return (
    <header ref={headerRef} className="navbar">
      <div className="navbar-inner">
        <a
          href="#contact"
          className="cta"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("contact");
          }}
        >
          تواصل معنا
        </a>

        <nav className="nav">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToId(l.id);
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#home"
          className="brand"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("home");
          }}
        >
          <img src="/logo.png" alt="NORM" />
        </a>
      </div>
    </header>
  );
}
