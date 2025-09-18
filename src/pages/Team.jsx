import { useMemo } from "react";
import "../styles/Team.css";

// صورة الموظف (نفسها للجميع مؤقتًا)
import moazImg from "../assets/MOAZ.jpg";

const LINKEDIN = "https://www.linkedin.com/in/moazhany27";
const INSTAGRAM = "https://www.instagram.com/m.o.a.z.h.a.n.y?igsh=c2lseWozcGZqd3lx";

export default function Team() {
  // ✅ 15 عضو
  const TEAM = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        name: "moaz hany",
        role: "software engineering",
        img: moazImg,
        linkedin: LINKEDIN,
        instagram: INSTAGRAM,
      })),
    []
  );

  return (
    <section id="team" className="Team-section">
      <div className="team-wrap">
        <h1 className="team-title">فريقنــــا</h1>

        {/* فيو بورت ثابت */}
        <div className="team-viewport">
          <div className="team-track">
            {TEAM.map((m) => (
              <Card key={`a-${m.id}`} {...m} />
            ))}
            {TEAM.map((m) => (
              <Card key={`b-${m.id}`} {...m} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ name, role, img, linkedin, instagram }) {
  return (
    <div className="team-card">
      <div className="img-wrap">
        <img src={img} alt={name} />
        <div className="social-icons">
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="icon-btn"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.06 0 4.81 2.67 4.81 6.15V23h-4v-7.01c0-1.67-.03-3.81-2.32-3.81-2.33 0-2.69 1.82-2.69 3.69V23h-4V8z"/>
            </svg>
          </a>
          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="icon-btn"
            title="Instagram"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 0 5.7.1 4.8.2 4 .5 3.2.8 2.6 1.2 2 1.8c-.6.6-1 .2-1.3 1C.4 3.6.3 4.5.2 5.8 0 7.1 0 7.5 0 12s0 4.9.2 6.2c.1 1.3.2 2.2.5 3 .3.8.7 1.4 1.3 2 .6.6 1.2 1 2 1.3.8.3 1.7.4 3 .5 1.3.1 1.7.1 6.2.1s4.9 0 6.2-.2c1.3-.1 2.2-.2 3-.5.8-.3 1.4-.7 2-1.3.6-.6 1-1.2 1.3-2 .3-.8.4-1.7.5-3 .1-1.3.2-1.7.2-6.2s0-4.9-.2-6.2c-.1-1.3-.2-2.2-.5-3-.3-.8-.7-1.4-1.3-2-.6-.6-1.2-1-2-1.3-.8-.3-1.7-.4-3-.5C16.9 0 16.5 0 12 0z"/>
              <path d="M12 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 1 0 12 5.8zm0 10.2A4 4 0 1 1 12 8a4 4 0 0 1 0 8zM18.4 4.6a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 1 0 0-2.88z"/>
            </svg>
          </a>
        </div>
      </div>
      <h3 className="team-name">{name}</h3>
      <p className="team-role">{role}</p>
    </div>
  );
}
