import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;

  gsap.to(window, {
    duration: 1.2,
    scrollTo: { y: el, offsetY: 80 },
    ease: "power2.inOut",
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
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // detect resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header style={styles.navbar}>
      <div style={styles.navdiv} dir="rtl">
        {/* Logo */}
        <div style={styles.logo}>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("home");
            }}
          >
            <img src="/logo.png" alt="NORM" style={styles.logoImage} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            style={styles.menuToggle}
            onClick={() => setIsOpen((p) => !p)}
          >
            ☰
          </button>
        )}

        {/* Navigation */}
        <nav
          style={{
            ...(isMobile ? styles.mobileMenu : styles.navLinks),
            ...(isOpen ? styles.showMenu : {}),
          }}
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              style={isMobile ? styles.mobileLink : styles.navLink}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(link.id);
                setIsOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}

          {/* CTA inside menu on mobile */}
          {isMobile && (
            <a
              href="#contact"
              style={styles.mobileLink}
              onClick={(e) => {
                e.preventDefault();
                scrollToId("contact");
                setIsOpen(false);
              }}
            >
              تواصل معنا
            </a>
          )}
        </nav>

        {/* CTA (PC only) */}
        {!isMobile && (
          <div style={styles.contactLink}>
            <a
              href="#contact"
              style={styles.navLink}
              onClick={(e) => {
                e.preventDefault();
                scrollToId("contact");
              }}
            >
              تواصل معنا
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    margin: "1px auto",
    padding: "15px 30px",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(10px)",
    borderRadius: "12px",
    zIndex: 1000,
    width: "90%",
    maxWidth: "1200px",
  },

  navdiv: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    transform: "translateY(4px)",
  },

  logoImage: {
    width: "110px",
    height: "auto",
  },

  // === PC Menu ===
  navLinks: {
    display: "flex",
    gap: "30px",
    alignItems: "center",
  },

  navLink: {
    color: "#fff",
    fontSize: "18px",
    fontWeight: 700,
    textDecoration: "none",
    cursor: "pointer",
  },

  contactLink: {
    fontWeight: 700,
  },

  // === Mobile Menu Button ===
  menuToggle: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "32px",
    cursor: "pointer",
  },

  // === Mobile Menu ===
  mobileMenu: {
    position: "absolute",
    top: "70px",
    right: "0",
    backgroundColor: "rgba(0,0,0,0.8)",
    width: "100%",
    padding: "20px",
    flexDirection: "column",
    display: "none",
    gap: "20px",
    borderRadius: "12px",
  },

  showMenu: {
    display: "flex",
  },

  mobileLink: {
    color: "#fff",
    fontSize: "20px",
    textDecoration: "none",
    fontWeight: 700,
    padding: "10px 0",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
  },
};
