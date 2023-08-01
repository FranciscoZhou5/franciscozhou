"use client";

import { useRef } from "react";

import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Intro from "./Intro";
import MyServices from "./MyServices";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Hero() {
  const aboutMeRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  return (
    <>
      <Intro aboutMeRef={aboutMeRef} contactRef={contactRef} />

      <AboutMe ref={aboutMeRef} />

      <Projects />

      <MyServices />

      <div className="w-full h-[1px] bg-[#3e3f4a]"></div>

      <Contact ref={contactRef} />

      <Footer />
    </>
  );
}
