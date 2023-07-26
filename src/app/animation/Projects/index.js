import React, { useState, useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "Salar de Atacama",
    src: "salar_de_atacama.jpg",
  },
  {
    title: "Valle de la luna",
    src: "valle_de_la_muerte.jpeg",
  },
  {
    title: "Miscanti Lake",
    src: "miscani_lake.jpeg",
  },
  {
    title: "Miniques Lagoons",
    src: "miniques_lagoon.jpg",
  },
];

export default function Index(props) {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: imageContainer.current,
      start: "top-=50vh",
      end: document.body.offsetHeight - window.innerHeight - 50,
    });
  }, []);

  return (
    <div ref={container} className={styles.projects}>
      <div className={styles.projectDescription}>
        <div ref={imageContainer} className={styles.imageContainer}>
          <Image
            src={
props.img3            }
            fill={true}
            alt="project image"
            priority={true}
          />
        </div>
        <div className={styles.column}>
          <p>
            {props.desc2}
          </p>
        </div>
        <div className={styles.column}>
          <p>
           {props.desc3}
          </p>
        </div>
      </div>

      {/* <div className={styles.projectList}>
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              onMouseOver={() => {
                setSelectedProject(index);
              }}
              className={styles.projectEl}
            >
              <h2>{project.title}</h2>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
