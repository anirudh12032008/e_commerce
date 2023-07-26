import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "./style.module.css";
import { formatPrice } from "@/lib/format";


export default function Index(props) {
  return (
    <div className={styles.description}>
      <AnimatedText>{props.desc}</AnimatedText>
      <AnimatedText>{formatPrice(props.price)}</AnimatedText>
    </div>
  );
}

function AnimatedText({ children }) {
  const text = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        scrub: true,
        start: "0px bottom",
        end: "bottom+=400px bottom",
      },
      opacity: 0,
      left: "-200px",
      ease: "power3.Out",
    });
  }, []);

  return <p ref={text}>{children}</p>;
}
