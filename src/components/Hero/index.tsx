"use client";

import { useRef } from "react";

import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Intro from "./Intro";

export default function Hero() {
  const aboutMeRef = useRef<HTMLElement>(null);

  return (
    <>
      <Intro aboutMeRef={aboutMeRef} />

      <AboutMe ref={aboutMeRef} />

      <Projects />
    </>
  );
}
