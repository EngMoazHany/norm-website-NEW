// npm i @formspree/react
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../styles/Contact.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("mqaypkgw");
  const [errorsText, setErrorsText] = useState(null);

  return (
    <section id="contact" className="contact-section" dir="rtl">
      <div className="contact-panel">
        {!state.succeeded ? (
          <form
            className="contact-form"
            onSubmit={async (e) => {
              setErrorsText(null);
              await handleSubmit(e);
              // اجمع أي رسائل خطأ من formspree لو وجدت
              if (state.errors?.length) {
                setErrorsText(state.errors.map((er) => er.message).join(" • "));
              }
            }}
            noValidate
          >
            {/* honey-pot اختياري لمكافحة السبام */}
            <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} />

            <label className="field">
              <span className="label">الاسم</span>
              <input type="text" name="name" required />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </label>

            <label className="field">
              <span className="label">الإيميل</span>
              <input id="email" type="email" name="email" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </label>

            <label className="field">
              <span className="label">تفاصيل المشروع</span>
              <input type="text" name="details" required />
              <ValidationError prefix="Details" field="details" errors={state.errors} />
            </label>

            {errorsText && <p className="form-error" role="alert">{errorsText}</p>}

            <button className="submit-btn" type="submit" disabled={state.submitting}>
              {state.submitting ? "Sending..." : "Submit inquiry"}
            </button>
          </form>
        ) : (
          <div className="form-success">
            <p>Thanks! Your message has been sent.</p>
          </div>
        )}

        <div className="contact-hero">
          <h1 className="contact-title">دعنا نعرف اكثر<br />عن مشروعك</h1>
          <div className="contact-social">
            <span className="social-label">تواصــل معنــا</span>
            <div className="icons">
              <a href="#" aria-label="X" className="sicon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M17.53 3H20l-6.91 8.02L20.49 21h-4.66l-4.06-5.04L6.8 21H4.33l7.3-8.47L3.98 3h4.74l3.67 4.56L17.53 3z" /></svg>
              </a>
              <a href="#" aria-label="Instagram" className="sicon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 0 5.7.1 4.8.2 4 .5 3.2.8 2.6 1.2 2 1.8c-.6.6-1 .2-1.3 1C.4 3.6.3 4.5.2 5.8 0 7.1 0 7.5 0 12s0 4.9.2 6.2c.1 1.3.2 2.2.5 3 .3.8.7 1.4 1.3 2 .6.6 1.2 1 2 1.3.8.3 1.7.4 3 .5 1.3.1 1.7.1 6.2.1s4.9 0 6.2-.2c1.3-.1 2.2-.2 3-.5.8-.3 1.4-.7 2-1.3.6-.6 1-1.2 1.3-2 .3-.8.4-1.7.5-3 .1-1.3.2-1.7.2-6.2s0-4.9-.2-6.2c-.1-1.3-.2-2.2-.5-3-.3-.8-.7-1.4-1.3-2-.6-.6-1.2-1-2-1.3-.8-.3-1.7-.4-3-.5C16.9 0 16.5 0 12 0z" /><path d="M12 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 1 0 12 5.8zm0 10.2A4 4 0 1 1 12 8a4 4 0 0 1 0 8zM18.4 4.6a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 1 0 0-2.88z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="sicon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.06 0 4.81 2.67 4.81 6.15V23h-4v-7.01c0-1.67-.03-3.81-2.32-3.81-2.33 0-2.69 1.82-2.69 3.69V23h-4V8z" /></svg>
              </a>
              <a href="#" aria-label="WhatsApp" className="sicon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M20 3.5A10 10 0 0 0 3.7 17.7L3 21l3.4-.7A10 10 0 1 0 20 3.5Zm-8 17a8 8 0 0 1-4.1-1.1l-.3-.2-2.4.5.5-2.4-.2-.3A8 8 0 1 1 12 20.5Zm4.7-6.1c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.9 1-.3.2-.6.1a6.5 6.5 0 0 1-3.8-3.3c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.6l-.9-2.2c-.2-.6-.5-.5-.6-.5h-.5a1 1 0 0 0-.7.3c-.2.2-.7.7-.7 1.7s.7 2 1 2.4a12.7 12.7 0 0 0 4.6 4.6c.5.2 1.6.6 2.3.8.9.3 1.7.2 2.3.1.7-.1 1.6-.6 1.9-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.2Z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="contact-footer">© NORM Production 2025</footer>
    </section>
  );
}
