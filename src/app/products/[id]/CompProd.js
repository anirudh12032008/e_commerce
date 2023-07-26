"use client";
import { useEffect } from "react";
import Intro from "../../animation/Intro";
import Description from "../../animation/Description";
import Projects from "../../animation/Projects";
import Shop from "../../animation/Shop";

export default function CompProd(props) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className="bg-white text-black">
      <Intro
        name={props.name}
        img1={props.img1}
        img2={props.img2}
        img3={props.img3}
      />
      <Description desc={props.desc} price={props.price} />
      <Shop incrementProductQuantity={props.incrementProductQuantity} prodid={props.prodid}/>
      <Projects desc2={props.desc2} desc3={props.desc3} img3={props.img3} />
    </main>
  );
}
