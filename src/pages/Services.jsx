import "../styles/Services.css";
import I1 from "../assets/Services1.png";
import I2 from "../assets/Services2.png";
import I3 from "../assets/Services3.png";
import I4 from "../assets/Services4.png";
import I5 from "../assets/Services5.png";
import I6 from "../assets/Services6.png";
import I7 from "../assets/Services7.png";
import I8 from "../assets/Services8.png";

const ICONS = [I1, I2, I3, I4, I5, I6, I7, I8];

// النسخة المطلوبة
const SERVICES = [
  {
    title: "الأفلام الدعائية والإعلانات",
    desc: "محتوى بصري مبتكر يبرز علامتك ويصل لجمهورك.",
  },
  {
    title: "بناء وتطوير العلامات التجارية",
    desc: "هوية واضحة ومتسقة لكل منصاتك.",
  },
  {
    title: "الرسوم المتحركة والخدع البصرية",
    desc: "إضافة بعد إبداعي لكل مشروع.",
  },
  {
    title: "الإنتاج السينمائي",
    desc: "أفلام تعريفية، وثائقية، وإبداعية بمعايير سينمائية عالية.",
  },
];

export default function Services() {
  return (
    <section id="services" className="Services-section" dir="rtl">
      <div className="services-wrap">
        <h1 className="services-title">خدماتنا</h1>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <article key={i} className="service-card" tabIndex={0}>
              <span
                className="card-icon"
                style={{ backgroundImage: `url(${ICONS[i % ICONS.length]})` }}
                aria-hidden="true"
              />
              <h3 className="card-title">{s.title}</h3>
              <div className="card-lines" aria-hidden="true">
                <span className="line w80" />
                <span className="line w60" />
                <span className="line w90" />
                <span className="line w70" />
              </div>
              <p className="card-desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
