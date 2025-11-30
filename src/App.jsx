import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import SplashVideo from "./components/SplashVideo.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Vision from "./pages/Vision.jsx";
import Services from "./pages/Services.jsx";
import Team from "./pages/Team.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const [splashVisible, setSplashVisible] = useState(true);

  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="vision"><Vision /></section>
        <section id="services"><Services /></section>
        <section id="team"><Team /></section>
        <section id="contact"><Contact /></section>
      </main>
      {splashVisible && <SplashVideo onDone={() => setSplashVisible(false)} />}
      {/* ملاحظة: Footer الشركاء بيظهر داخل سكشن الهيرو كـ component منفصل */}
    </>
  );
}
