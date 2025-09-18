import { useRef, useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const dropRef = useRef(null);
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const onFileChange = (e) => {
    const f = e.target.files?.[0];
    if (f) setFileName(f.name);
  };

  const onDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropRef.current?.classList.add("is-dragover");
  };
  const onDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropRef.current?.classList.remove("is-dragover");
  };
  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropRef.current?.classList.remove("is-dragover");
    const f = e.dataTransfer.files?.[0];
    if (f && fileInputRef.current) {
      const dt = new DataTransfer();
      dt.items.add(f);
      fileInputRef.current.files = dt.files;
      setFileName(f.name);
    }
  };

  return (
    <section id="contact" className="contact-section" dir="rtl">
      <div className="contact-panel">
        {/* الفورم يسار */}
        <form
          className="contact-form"
          action="https://formsubmit.co/el/yacofe"
          method="POST"
          encType="multipart/form-data"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" style={{ display: "none" }} />

          <label className="field">
            <span className="label">الاسم</span>
            <input type="text" name="name" required />
          </label>

          <label className="field">
            <span className="label">الإيميل</span>
            <input type="email" name="email" required />
          </label>

          <label className="field">
            <span className="label">تفاصيل المشروع</span>
            <input type="text" name="details" required />
          </label>

          <div
            ref={dropRef}
            className="dropzone"
            onDragEnter={onDrag}
            onDragOver={onDrag}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <span className="drop-inner">
              {fileName || "Choose a file or drag and drop here"}
            </span>
            <input
              ref={fileInputRef}
              type="file"
              name="attachment"
              hidden
              onChange={onFileChange}
            />
          </div>

          <button className="submit-btn" type="submit">
            Submit inquiry
          </button>
        </form>

        {/* الهيدر يمين */}
        <div className="contact-hero">
          <h1 className="contact-title">
            دعنا نعرف اكثر
            <br />
            عن مشروعك
          </h1>

          <div className="contact-social">
            <span className="social-label">تواصــل معنــا</span>
            <div className="icons">
              {/* X */}
              <a href="#" aria-label="X" className="sicon">
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="currentColor"
                >
                  <path d="M17.53 3H20l-6.91 8.02L20.49 21h-4.66l-4.06-5.04L6.8 21H4.33l7.3-8.47L3.98 3h4.74l3.67 4.56L17.53 3z" />
                </svg>
              </a>

              {/* Instagram (نفس اللوجو من Team.jsx) */}
              <a href="#" aria-label="Instagram" className="sicon">
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="currentColor"
                >
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 0 5.7.1 4.8.2 4 .5 3.2.8 2.6 1.2 2 1.8c-.6.6-1 .2-1.3 1C.4 3.6.3 4.5.2 5.8 0 7.1 0 7.5 0 12s0 4.9.2 6.2c.1 1.3.2 2.2.5 3 .3.8.7 1.4 1.3 2 .6.6 1.2 1 2 1.3.8.3 1.7.4 3 .5 1.3.1 1.7.1 6.2.1s4.9 0 6.2-.2c1.3-.1 2.2-.2 3-.5.8-.3 1.4-.7 2-1.3.6-.6 1-1.2 1.3-2 .3-.8.4-1.7.5-3 .1-1.3.2-1.7.2-6.2s0-4.9-.2-6.2c-.1-1.3-.2-2.2-.5-3-.3-.8-.7-1.4-1.3-2-.6-.6-1.2-1-2-1.3-.8-.3-1.7-.4-3-.5C16.9 0 16.5 0 12 0z" />
                  <path d="M12 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 1 0 12 5.8zm0 10.2A4 4 0 1 1 12 8a4 4 0 0 1 0 8zM18.4 4.6a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 1 0 0-2.88z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="sicon">
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.06 0 4.81 2.67 4.81 6.15V23h-4v-7.01c0-1.67-.03-3.81-2.32-3.81-2.33 0-2.69 1.82-2.69 3.69V23h-4V8z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a href="#" aria-label="WhatsApp" className="sicon">
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="currentColor"
                >
                  <path d="M20 3.5A10 10 0 0 0 3.7 17.7L3 21l3.4-.7A10 10 0 1 0 20 3.5Zm-8 17a8 8 0 0 1-4.1-1.1l-.3-.2-2.4.5.5-2.4-.2-.3A8 8 0 1 1 12 20.5Zm4.7-6.1c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.9 1-.3.2-.6.1a6.5 6.5 0 0 1-3.8-3.3c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.6l-.9-2.2c-.2-.6-.5-.5-.6-.5h-.5a1 1 0 0 0-.7.3c-.2.2-.7.7-.7 1.7s.7 2 1 2.4a12.7 12.7 0 0 0 4.6 4.6c.5.2 1.6.6 2.3.8.9.3 1.7.2 2.3.1.7-.1 1.6-.6 1.9-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.2Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="contact-footer">© NORM Production 2025</footer>
    </section>
  );
}
