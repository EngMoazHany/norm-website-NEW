import "../styles/Services.css";

// أيقونات لكل كارت
import I1 from "../assets/Services1.png";
import I2 from "../assets/Services2.png";
import I3 from "../assets/Services3.png";
import I4 from "../assets/Services4.png";
import I5 from "../assets/Services5.png";
import I6 from "../assets/Services6.png";
import I7 from "../assets/Services7.png";
import I8 from "../assets/Services8.png";

const ICONS = [I1, I2, I3, I4, I5, I6, I7, I8];

const SERVICES = [
  { title: "الأفلام المصوّرة", desc: "شرح الخدمة بشكل مبسّط وجميل، يوضح المراحل من الفكرة إلى التنفيذ وإخراج العمل بأعلى جودة." },
  { title: "الهويّة البصريّة", desc: "بناء هويّة متكاملة من الشعار إلى الأدلة البصرية وتطبيقاتها عبر كل نقاط التماس." },
  { title: "الإعلانات الإبداعيّة", desc: "إنتاج إعلانات تلفزيونية ورقمية، نصوص مؤثرة، ولوحات قصصية تُترجم إلى صورة قوية." },
  { title: "الموشن جرافيك", desc: "تحريك ذكي وبناء إيقاع بصري يوصل الرسالة بوضوح وبساطة ومتعة." },
  { title: "إدارة المحتوى", desc: "خطط تحريرية، زوايا طرح، وجدولة، مع متابعة الأداء وتطوير مستمر." },
  { title: "التغطيات المرئية", desc: "توثيق احترافي للفعاليات والمؤتمرات مع تسليم سريع ومونتاج ديناميكي." },
  { title: "البودكاست المرئي", desc: "تصميم الاستوديو، هندسة الصوت، تصوير ومونتاج بنَفَس سينمائي جذّاب." },
  { title: "الاستشارات الإبداعيّة", desc: "تشخيص دقيق، توصيات عملية، وخريطة طريق قابلة للتنفيذ تُحسّن الأثر." }
];

export default function Services() {
  return (
    <section id="services" className="Services-section" dir="rtl">
      <div className="services-wrap">
        <h1 className="services-title">خدماتنــــا</h1>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <article key={i} className="service-card" tabIndex={0}>
              {/* الأيقونة في الركن العلوي الأيسر */}
              <span
                className="card-icon"
                style={{ backgroundImage: `url(${ICONS[i % ICONS.length]})` }}
                aria-hidden="true"
              />

              <h3 className="card-title">{s.title}</h3>

              {/* السطور الافتراضية */}
              <div className="card-lines" aria-hidden="true">
                <span className="line w80" />
                <span className="line w60" />
                <span className="line w90" />
                <span className="line w70" />
              </div>

              {/* الوصف يظهر بالهوفر */}
              <p className="card-desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
