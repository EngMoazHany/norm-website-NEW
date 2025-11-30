import { useEffect, useRef } from "react";
import "../styles/splash.css";

export default function SplashVideo({ onDone }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const v = videoRef.current;
    const tryPlay = v?.play?.();
    if (tryPlay?.catch) {
      tryPlay.catch(() => v?.setAttribute("controls", "true"));
    }
    return () => { document.body.style.overflow = prev; };
  }, []);

  const finish = () => onDone?.();

  return (
    <div className="splash">
      <video
        ref={videoRef}
        src="/videos/intro.mp4"
        autoPlay
        muted
        playsInline
        onEnded={finish}
        onError={finish}
        style={{ width: "100%", height: "100%", objectFit: "cover", background: "#000" }}
      />
      <button className="skip" onClick={finish}>تخطي ▶</button>
    </div>
  );
}
