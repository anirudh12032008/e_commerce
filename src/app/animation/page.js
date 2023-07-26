"use client";
import { useEffect } from "react";
import Intro from "./Intro";
import Description from "./Description";
import Projects from "./Projects";
import Shop from "./Shop";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className="bg-black">
      <Intro />
      <Description />
      <Shop/>
      <Projects />
    </main>
  );
}
