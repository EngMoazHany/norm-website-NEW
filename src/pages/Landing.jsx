import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../sections/Home";
import About from "../sections/About";
import Services from "../sections/Services";
import Team from "../sections/Team";

export default function Landing() {
  return (
    <>
      <Navbar />
      
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="team">
        <Team />
      </section>

      <Footer />
    </>
  );
}
